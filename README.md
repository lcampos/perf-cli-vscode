Some scripts used to get an idea how different approaches of calling the Salesforce CLI will perform.

## Approaches

1. Node process - this is just a simple hello world NodeJS process
1. Salesforce CLI - directly call one of the CLI's scaffolding commands the CLI ships with
1. CLI via Child process - call the CLI scaffolding command using a node child process (same as the vscode extensions)
1. Call oclif plugin - programmatically call the oclif plugin that has the CLI scaffolding command
1. Call without oclif - run the scaffolding logic as if it was part of the project or a library that is not wrapped by oclif


The scaffolding command is `sfdx force:apex:class:create`

## Setup

1. Clone this repo on the environment you want to test on (Mac OS, Windows, etc)
1. Run `yarn install`
1. Run `./test_cli_calls.sh` on your terminal