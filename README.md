-----Project Setup and WedriverIO Installation

Create a new folder and open in IDE(VS Code)
Open terminal  in VS Code and run commands
npm init -y
npm init wido
Select the options as required and install
Check WeddriverIO version 
npm ls weddriverio
Check wido.confi.js file and project folders are created.
To run existing tests
Run all tests in the folder configured in wido.conf.js.  npx wide run wido.conf.js
Or 
npm run wido

---------To Generate and view reports

Run - npm install @wdio/allure-reporter —save-dev
Add reporter config in wido.config.js
Run test and check allure results folder is generated.
Install allure command line tool npm install -g allure-commandline —save-dev
Run commands
allure generate allure-results
allure open
