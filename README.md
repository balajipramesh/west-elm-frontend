# west-elm-frontend

Demo for west-elm products. A Williams-Sonoma Coding Challenge

# Deployment

The project web-page runs directly from a local browser (Latest Chrome, Firefox, IE Edge) by launching the `product-list.html` inside the `src` directory

# Help

## Home

To refresh the page click `Home` menu item.

## Contact

To contact the developer of this project click `Contact` menu item.

## Carousel

* Click any image for the carousel arrows to show up. Click right (clockwise) or left (anti-clockwise) arrows to have the images rotate like a carousel.
* Click the image again the carousel arrows goes away and the hero image shows up.

## Product Detail

* Click the product detail icon to view the complete detail of the product.

## UI Responsiveness

* As the page shrinks or expands the product columns reduces to 1 column or increases the product column.

# Testing Requirements

To perform js unit test, you must have `nodejs` and `npm` installed.

## Build Dependencies

The testing javascript depends on the following library:

* Gulp
* Jasmine
* Karma

Note: Gulp should be installed globally. It can be installed globally by running `npm install -g gulp` 

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