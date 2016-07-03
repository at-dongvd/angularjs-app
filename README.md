# angularjs-app
## Getting Started

To get you started you can simply clone the `angularjs-app` repository and install the dependencies:

### Prerequisites

- Git
- Node.js and tools (`npm`, `bower`,...)

### Clone app-template

Clone the `angularjs-app` repository using `git`:

```bash
git clone https://github.com/at-dongvd/angularjs-app.git
cd angularjs-app
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code.  The tools help us manage and test the application.

- We get the tools we depend upon via `npm`.
- We get the Angular code via `bower`.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```bash
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new folders in your project.

- `node_modules` - contains the npm packages for the tools we need
- `app/bower_components` - contains the angular framework files

_Note that the `bower_components` folder would normally be installed in the root folder but `app-template` changes this location through the `.bowerrc` file.  Putting it in the app folder makes it easier to serve the files by a webserver._

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start this server is:

```bash
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.
## Directory Layout

```
app/                           --> all of the source files for the application
  index.html                   --> app layout file (the main html template file of the app)
  css/                         --> all app stylesheets
    app.css                    --> default stylesheet
  data/						   --> data
  	contact.json               --> information contact
  	person.json                --> base information myself
  	rate.json                  --> rate Currency Converter
  icon/
  	...						   --> icons need use
  img/
  	...                        --> images need use
  js/                          --> all app business logics
    app.js                     --> main application module
    controllers.js             --> the controller logic
    directives.js              --> custom directives
    filters.js                 --> custom filters
    services.js                --> custom services
  view/                        --> the view template
  	partials/                  --> part of page to include
  		footer.html            --> footer of page
  		header.html            --> header of page
    app.html                   --> the partial template for app page
    about.html                 --> the partial template for about page

test/                          --> all tests
  protractor.conf.js           --> Protractor config file
  karma.conf.js                --> config file for running unit tests with Karma
  e2e/                         --> end-to-end tests
    scenarios.js               --> end-to-end scenarios to be run by Protractor
  unit/                        --> unit tests
    controllers.js             --> test cases of the controller
    directives.js              --> test cases of custom directives
    filters.js                 --> test cases of custom filters
    services.js                --> test cases of custom services
```
##End