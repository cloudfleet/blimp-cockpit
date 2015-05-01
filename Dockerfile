# cloudfleet cockpit
#
# - this is the development Dockerfile
# - the production Dockerfile is app/Dockerfile
#   (bump up the version num. there if feeling brave)
#

FROM nginx

RUN mkdir -p /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
ADD ./app/ /usr/share/nginx/html/
# ADD ./dist/ /usr/share/nginx/html/
