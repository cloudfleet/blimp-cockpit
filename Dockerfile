# cloudfleet cockpit
#
# VERSION 0.3

FROM nginx

# old
#COPY public /usr/share/nginx/html

RUN mkdir -p /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
ADD ./app/ /usr/share/nginx/html/
# ADD ./dist/ /usr/share/nginx/html/
