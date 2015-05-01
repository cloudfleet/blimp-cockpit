# cloudfleet cockpit
#
# VERSION 0.4

FROM nginx

RUN mkdir -p /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
ADD ./ /usr/share/nginx/html/
