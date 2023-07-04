#!/bin/bash

COMMAND=$(xrandr | grep '+')

for VARIABLE in $COMMAND; do
  echo $VARIABLE
done
