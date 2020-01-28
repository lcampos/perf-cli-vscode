"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var path = require("path");
// tslint:disable-next-line:no-var-requires
var generator = require('yeoman-generator');
class ApexClassGenerator extends generator {
    constructor(args, options) {
        super(args, options);
        this.sourceRoot(path.join(__dirname, 'templates', 'apexclass'));
        this.conflicter.force = false;
    }
    writing() {
        const template = 'DefaultApexClass';
        const outputdir = 'tests';
        const classname = 'nativeGenerator';
        const apiversion = '48.0';
        this.fs.copyTpl(this.templatePath(`${template}.cls`), this.destinationPath(path.join(outputdir, `${classname}.cls`)), { apiName: classname }),
        this.fs.copyTpl(this.templatePath('_class.cls-meta.xml'), this.destinationPath(path.join(outputdir, `${classname}.cls-meta.xml`)), { apiName: classname, apiVersion: apiversion });
    }
}
exports.default = ApexClassGenerator;