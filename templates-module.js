var apexClassCreator = require('./node_modules/salesforcedx-templates/lib/commands/force/apex/class/create.js');

try {
    apexClassCreator.default.run(['-n', 'modulePattern', '--outputdir', './tests']);
} catch (e) {
    console.log('error => ', e);
}
