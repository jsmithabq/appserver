#!/bin/sh -f

echo ""
echo "executing 'sub-colors.rb' on all matching files..."

for file in "$@"
do
  if [ -f $file ]; then
    ./sub-colors.rb $file $file.tmp
    #mv -f file.tmp $file
  fi
done

