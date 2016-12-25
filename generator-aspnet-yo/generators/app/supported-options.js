module.exports = [{
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
}]
