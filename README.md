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

### In a docker container

To develop with the other necessary CloudFleet services (user management),
follow these steps:

- Clone project
- Install Docker
- Install fig (http://www.fig.sh/)
- Run "fig up"

## Testing

Running `grunt test` will run the unit tests with karma.
