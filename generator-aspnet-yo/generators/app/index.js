'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const common = require('./lib/common');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    common.supportedApplicationOptions.forEach(option => {
      const {
        name,
        type,
        required,
        desc,
        defaults
      } = option;
      this.argument(name, {
        type,
        required,
        desc,
        defaults
      });
    });
    this.log(chalk.green('constructor'));
  }

  initializing() {
    this.log(chalk.green('initializing'));
    if (this.options.type && common.isValidProjetType(this.options.type) === true) {
      this.log(`Creating ${chalk.cyan(this.options.type)} project`);
    } else if (this.options.type) {
      this.log(`${this.options.type} is not a valid project type`, chalk.cyan(this.options.type));
      this.options.type = this.options.name = undefined;
    }
    this.props = {};
  }

  prompting() {
    this.log(`appname: ${this.appname}`);
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the awe-inspiring ' + chalk.red('generator-aspnet-yo') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts)
      .then(function (props) {
        // To access props later use this.props.someAnswer;
        this.props = props;
      }.bind(this));
  }

  configuring() {
    this.log(chalk.green('confirm'));
  }

  default() {
    this.log(chalk.green('default'));
  }

  writing() {
    this.log(chalk.green('writing'));
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
    // always save a config file
    this.config.save();
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
