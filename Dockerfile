# cloudfleet cockpit
#
# VERSION 0.3

FROM ubuntu:14.04

copy . /opt/cloudfleet/cockpit
WORKDIR /opt/cloudfleet/cockpit
RUN scripts/install.sh

CMD scripts/start.sh
