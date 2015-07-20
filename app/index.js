'use strict';
var path = require('path');
var npmName = require('npm-name');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  init: function () {
    this.log(
      '\nHello from Kirill Buga!' +
      '\nHere you can create the best angular module ever');
  },
  askForModuleName: function () {
    var done = this.async();

    var prompts = [{
      name: 'name',
      message: 'Module Name',
      default: path.basename(process.cwd()),
    },{
      name: 'path',
      message: 'Where I should put it?',
      default: '/'
    }];

    this.prompt(prompts, function (props) {
      this.name = props.name;
      this.path = props.path;
      this.camelName = this.name.charAt(0).toUpperCase() + this.name.slice(1);
      done();
    }.bind(this));
  },

  app: function () {
    this.config.save();

    this.template('template.jade', path.join(process.cwd(), this.path, this.name + '.jade'));
    this.template('service.js', path.join(process.cwd(), this.path, this.name + '.service.js'));
    this.template('controller.js', path.join(process.cwd(), this.path, this.name + '.сontroller.js'));
    this.template('directive.js', path.join(process.cwd(), this.path, this.name + '.directive.js'));
    this.template('styles.styl', path.join(process.cwd(), this.path, this.name + '.styl'));
    this.template('spec.js', path.join(process.cwd(), this.path, this.name + '.spec.js'));
  }

});
