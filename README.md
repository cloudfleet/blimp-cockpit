Blimp Cockpit
=============

This is the Dashboard and User Management Interface for CloudFleet Blimps.

Generated with
[yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Development

### On your own machine

You need to have [node](https://nodejs.org/) installed.

You get all the local dependencies by doing:

    npm install
    bower install

Run `grunt` for building and `grunt serve` for live preview as you work.

If you want to add a dependency from [bower.io](http://bower.io/search/), do:

    bower install --save <package-name>

For example, to add the `angular-ui-router` do
`bower install --save angular-ui-router`.

To quickly test the static files, run `grunt` and from the *dist/* folder run
some static file server like:

    python -m SimpleHTTPServer # serves files at http://localhost:8000/cockpit


### In a docker container

To develop with the other necessary CloudFleet services (user management),
follow these steps:

- Clone project
- Install [Docker](https://www.docker.com/)
  (or [boot2docker](http://boot2docker.io/) on OS X)
- Install [docker-compose](http://docs.docker.com/compose/)
- Run `docker-compose up`
- Open [http://localhost:8080/cockpit/]() in your browser
  (replace localhost with the output of `boot2docker ip` on OS X)
- Rock out!


To test the dist folder run:

    docker-compose -f docker-compose.dist.yml up

And to attach it to a real Blimp backend, fill out the
*nginx-default-dev-ownblimp.conf* file based on
*nginx-default-dev-ownblimp.conf.example* to match your settings and then run:

    docker-compose -f docker-compose.ownblimp.yml up


## Testing

Running `grunt test` will run the unit tests with karma.

## Deployment

Once you're happy with your changes, commit them to master and run:

    grunt deploy

The deploy task runs all the minification inside the `dist/` folder and pushes
the code to the
[production](https://github.com/cloudfleet/blimp-cockpit/tree/production) branch
from where Marina picks it up and builds a new Docker image for ARM
that can be deployed to the [Blimp](https://github.com/cloudfleet/blimp).
