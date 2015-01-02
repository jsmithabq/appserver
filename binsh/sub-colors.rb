#!/usr/bin/env ruby

require 'yaml'
 
lines = File.readlines(ARGV[0])
file = File.new(ARGV[1], "w")
yaml_str = ""
index = 0
lines.each_index do |i|
  file.write(lines[i])
  if index == 0 && lines[i] == "=====================\n"
    index = i
  elsif index > 0 && lines[i] == "=====================\n"
    index = i + 1
    break
  end
  yaml_str += lines[i] if index != 0 && i > index
end
#puts yaml_str
colors = YAML.load(yaml_str)
#puts colors
colors.each do |key,value| 
  lines[index, lines.length - 1].each do |line|
    # ex: "background: /* $bkg_bg */ #BFB3B3;"
    offset = line.index(key)
    line[offset + 11, 7] = value if offset
  end
end
lines[index, lines.length - 1].each do |line|
  file.write(line)
end
file.close()
