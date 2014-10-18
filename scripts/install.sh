#!/bin/bash
rm -rf /usr/share/nginx/html
ln -s -T /opt/cloudfleet/cockpit/public /usr/share/nginx/html
