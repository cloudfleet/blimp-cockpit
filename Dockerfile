# cloudfleet cockpit
#
# VERSION 0.3

FROM nginx

COPY . /opt/cloudfleet/cockpit
WORKDIR /opt/cloudfleet/cockpit
RUN scripts/install.sh
