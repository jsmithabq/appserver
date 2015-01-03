#!/bin/sh -f

cur_dir=`echo ${PWD##*/}`
if [ "$cur_dir" != "appserver" ]
then
  echo "Invoke this script from the application root directory, 'appserver'."
  exit -1
fi
if [ ! -d public/libs ] 
then
  mkdir -p public/libs
  echo "Created 'public/libs' for '.bowerrc' default library configuration."
fi
