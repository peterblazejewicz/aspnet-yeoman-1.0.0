'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
/**
 *
 */
module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.log(chalk.green('constructor'));
  }

  initializing() {
    this.log(chalk.green('initializing'));
  }
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the awe-inspiring ' + chalk.red('generator-aspnet-yo') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  }

  configuring() {
    this.log(chalk.green('confirm'));
  }

  default () {
    this.log(chalk.green('default'));
  }
  writing() {
    this.log(chalk.green('writing'));
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  }

  conflicts() {
    this.log(chalk.green('conflicts'));
  }
  install() {
    this.log(chalk.green('install'));
    this.installDependencies();
  }

  end() {
    this.log(chalk.green('end'));
  }
};