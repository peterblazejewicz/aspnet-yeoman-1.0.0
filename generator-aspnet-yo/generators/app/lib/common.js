'use strict';
const constants = require('./constants');
//
// supported project types constants
const supportedProjects = [
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
  return supportedProjects.indexOf(type) > -1;
};

const supportedOptions = [{
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

module.exports = {
  isValidProjectType,
  supportedProjects,
  supportedOptions
};
