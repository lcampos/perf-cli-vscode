#!/bin/sh
set -e  # exit on failure

#print message function
printMsg() {
    local msg=("$@") # get all arguments passed to function
    echo ""
    echo "------------------------------------------------------------------------"
    echo "${msg}"
    echo "------------------------------------------------------------------------"
    echo ""
}

#setup dir where all test data gets created
mkdir "./tests"

printMsg " Run Node process (hello world) ..."
time node app-hello-world.js

printMsg " Run CLI command directly ..."
time sfdx force:apex:class:create -n "testOneTwo" --template "DefaultApexClass" --outputdir "./tests"

printMsg " Run CLI command via node child process (vscode approach) ..."
time node cli_node_child_process.js

printMsg " Run command by programmatically calling the ocliff plugin ..."
time node templates-module.js

printMsg " Run code without oclif ..."
time node local-generator.js

#remove setup dir
rm -rf "./tests"