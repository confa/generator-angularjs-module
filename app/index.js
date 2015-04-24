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
      done();
    }.bind(this));
  },

  app: function () {
    this.config.save();

    this.template('template.html', path.join(process.cwd(), this.path, this.name + '.html'));
    this.template('service.js', path.join(process.cwd(), this.path, this.name + 'Service.js'));
    this.template('controller.js', path.join(process.cwd(), this.path, this.name + 'Сontroller.js'));
    this.template('directive.js', path.join(process.cwd(), this.path, this.name + 'Directive.js'));
    this.template('styles.less', path.join(process.cwd(), this.path, this.name + '.less'));
    this.template('spec.js', path.join(process.cwd(), this.path, this.name + '.spec.js'));
  }

});
