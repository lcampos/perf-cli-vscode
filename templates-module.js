var templates = require('./node_modules/salesforcedx-templates/lib/generators/apexClassGenerator');
var apexClassCreator = require('./node_modules/salesforcedx-templates/lib/commands/force/apex/class/create.js');

var dxcommands = require('@salesforce/command');

/*
var options = {
    apiversion: "49.0",
    classname: "testTemplateModule",
    loglevel: "warn",
    namespace: "generator",
    outputdir: "./tests",
    resolved: "unknown",
    template: "DefaultApexClass"
}; */

console.log('before');
/*
templates.apiversion = "49.0";
templates.classname = "testTemplateModule";
templates.loglevel = "warn";
templates.namespace = "generator";
templates.outputdir = "./tests";
templates.resolved = "unknown";
templates.template = "DefaultApexClass";

templates.default
*/
try {
    apexClassCreator.default.run(['-n', 'elError']);
} catch (e) {
    console.log('el error => ', e);
}


console.log('after');