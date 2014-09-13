#!/bin/bash
rm -rf /usr/local/nginx/html 
ln -s -T /opt/cloudfleet/cockpit/public /usr/local/nginx/html 
