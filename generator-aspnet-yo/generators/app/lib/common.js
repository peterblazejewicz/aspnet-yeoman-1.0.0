'use strict';


let supportedProjects = ['emptyweb',
  'consoleapp',
  'web',
  'webbasic',
  'webapi',
  'nancy',
  'classlibrary',
  'unittest',
  'fsharp_lib',
  'fsharp_webapi',
  'fsharp_console',
  'fsharp_emptyweb',
  'fsharp_webbasic',
  'fsharp_test'
];

let isValidProjetType = type => {
  return supportedProjects.indexOf(type) !== -1;
};

let supportedOptions = [{
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
  isValidProjetType,
  supportedProjects,
  supportedOptions
};
