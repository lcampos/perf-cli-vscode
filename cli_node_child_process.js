var cross_spawn = require('cross-spawn');

cross_spawn(
      'sfdx',
      ['force:apex:class:create', '--classname', 'test', '--template', 'DefaultApexClass', '--outputdir', './tests']
    );