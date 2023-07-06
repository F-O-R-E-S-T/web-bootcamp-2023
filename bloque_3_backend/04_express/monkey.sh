#!/bin/bash

touch $1.txt 
# Acá me faltaba un echo 
echo $1 >> $1.txt
