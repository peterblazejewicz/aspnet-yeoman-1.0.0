'use strict';
const constants = require('./constants');
//
// supported project types constants
const supportedProjectTypes = [
  constants.CLASS_LIB,
  constants.CONSOLE_APP,
  constants.EMPTY_WEB,
  constants.FSHARP_CONSOLE_APP,
  constants.FSHARP_EMPTY_WEB,
  constants.FSHARP_LIB,
  constants.FSHARP_TEST,
  constants.FSHARP_WEB_API,
  constants.FSHARP_WEB_BASIC_APP,
  constants.NANCY_WEB,
  constants.UNIT_TEST,
  constants.WEB_API,
  constants.WEB_APP,
  constants.WEB_BASIC_APP
];

let isValidProjectType = type => {
  return supportedProjectTypes.indexOf(type) > -1;
};

const supportedApplicationOptions = [{
  name: 'type',
  type: String,
  required: false,
  desc: 'the project type to create'
}, {
  name: 'name',
  type: String,
  required: false,
  desc: 'the name of the application'
}, {
  name: 'ui',
  type: String,
  required: false,
  defaults: 'bootstrap',
  desc: 'the ui library to use (bootstrap OR semantic)'
}];

const defaultOptions = [{
  name: 'Empty Web Application',
  value: constants.EMPTY_WEB
}, {
  name: 'Empty Web Application (F#)',
  value: constants.FSHARP_EMPTY_WEB
}, {
  name: 'Console Application',
  value: constants.CONSOLE_APP
}, {
  name: 'Console Application (F#)',
  value: constants.FSHARP_CONSOLE_APP
}, {
  name: 'Web Application',
  value: constants.WEB_APP
}, {
  name: 'Web Application Basic [without Membership and Authorization]',
  value: constants.WEB_BASIC_APP
}, {
  name: 'Web Application Basic [without Membership and Authorization] (F#)',
  value: constants.FSHARP_WEB_BASIC_APP
}, {
  name: 'Web API Application',
  value: constants.WEB_API
}, {
  name: 'Web API Application (F#)',
  value: constants.FSHARP_WEB_API
}, {
  name: 'Nancy ASP.NET Application',
  value: constants.NANCY_WEB
}, {
  name: 'Class Library',
  value: constants.CLASS_LIB
}, {
  name: 'Class Library (F#)',
  value: constants.FSHARP_LIB
}, {
  name: 'Unit test project (xUnit.net)',
  value: constants.UNIT_TEST
}, {
  name: 'Unit test project (xUnit.net) (F#)',
  value: constants.FSHARP_TEST
}];

module.exports = {
  defaultOptions,
  isValidProjectType,
  supportedProjectTypes,
  supportedApplicationOptions
};
