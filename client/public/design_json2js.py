#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Feb 12 15:51:56 2021

@author: koch
"""

import os
import glob

dir_files = os.path.join(os.path.dirname(os.path.realpath(__file__)), "designs")
#dir_files = os.path.join('/Users/koch/Docs/pedlr-task/code/task', "designs")

design_file = os.path.join(dir_files, 'designs.js') 
if os.path.exists(design_file) :
    os.remove(design_file)
f_new = open(design_file, 'w')

first = True

for json_file in sorted(glob.glob(os.path.join(dir_files, 'design-*.json'))) :
    name = os.path.splitext(os.path.basename(json_file))[0]
    name = name.replace('-', '_')
    json = open(json_file, 'r')
    content = json.read()
    json.close()
    
    if first :
        f_new.write('var ' + name + ' = ' + content)
        first = False
    else:
        f_new.write('\nvar ' + name + ' = ' + content)

f_new.close()
    
    
    
