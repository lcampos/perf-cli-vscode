var apexGenerator = require('./apexClassGenerator');
var yeoman = require('yeoman-environment');
var env = yeoman.createEnv();

env.registerStub(apexGenerator.default, 'generator');
env.run('generator');