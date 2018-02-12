# west-elm-frontend

Demo for west-elm products. A Williams-Sonoma Coding Challenge

# Deployment

The project web-page runs directly from a local browser (Latest Chrome, Firefox, IE Edge) by launching the `product-list.html` inside the `src` directory

# Testing Requirements

To perform js unit test, you must have `nodejs` and `npm` installed.

## Build Dependencies

The testing javascript depends on the following library:

* Gulp
* Jasmine
* Karma

## Installation

Once you have `nodejs` and `npm` installed. Download or clone the project. On preferred terminal of your choice go to the folder where the project was downloaded / cloned.

Run the below command:

`npm install`

The above command shall install all the above said dependencies that are required for this project.

## Running tests

JS tests are executed using gulp task runner. The following gulp tasks are supported.

* clean
* test

### clean

The `clean` task will remove the coverage directory i.e any last executed runs will be cleared. To run this task execute `gulp clean` on your command line.

This task has no dependencies.

### test

The `test` task will run the javascript unit tests. And creates a report card for number of tests that ran and their success or failure status and also the code coverage achieved by the js unit tests.

To run this task execute `gulp test` on your command line.

This task depends on `clean` task

## Viewing test reports

Once the gulp tasks are executed, the report shall be generated under `coverage` folder

To see how many unit test passed navigate to `<project_folder>/coverage/report/units.html`

To see code coverage navigate to `<project_folder>/coverage/report/lcov-report/index.html`