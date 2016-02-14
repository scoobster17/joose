# Joose Component Library

Joose is a component library consisting of many vanilla JavaScript components, each of which can be used completely independently by installing it separately. In fact, this library is simply a module that 'requires' all of the components.

Please see the list below for a list of included components, each of which contains a link to that individual component and example methods or HTML/CSS to be used for that component.

## Installation

To install this component library using [bower](http://bower.io/search/?q=joose-cl) use the following command:

`bower install joose-cl` (recommended) or `bower install joose`

To install this component independently using [npm](https://www.npmjs.com/package/joose-accordion) use the following command:

`npm install joose-cl`

Please note that trying to use `joose` as the package name (in npm only) will result in downloading a different and unrelated package by a different author. For this reason and consistency, it is recommended to use the `joose-cl` package name, 'cl' standing for 'component library'.

## Usage

Please see the links below for usage with specific components. This approach has been taken to reduce multiple copies of the same information and redundancy amongst them.

For HTML-based components, on page load the script searches the page for the `data-component` attribute to pick up any components that haven't been manually initialised using the `new` keyword.

## Components

  * [accordion](https://github.com/scoobster17/joose-accordion); a lightweight, unstyled accordion component
  * [storage](https://github.com/scoobster17/joose-storage); storage helper functions for dealing with cookies, sessionStorage and localStorage
  * [tabs](https://github.com/scoobster17/joose-tabs); a lightweight, unstyled tabset component
  * [utils](https://github.com/scoobster17/joose-utils); utility helper functions including class handling