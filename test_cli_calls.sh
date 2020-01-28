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

printMsg " Run simple NodeJS hello world ..."
time node app-hello-world.js

printMsg " Run cli command by directly calling the cli ..."
time sfdx force:apex:class:create -n "testOneTwo" --template "DefaultApexClass" --outputdir "./tests"

printMsg " Run cli command using node child process ..."
time node cli_node_child_process.js

printMsg " Run cli command by calling the module directly from node ..."
time node templates-module.js

#remove setup dir
rm -rf "./tests"