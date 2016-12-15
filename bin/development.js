#!/usr/bin/env node

var log = console.log.bind(console, '>>> [DEV]:'.red)  
require('../app') // start app
process.on('exit', function (e) {
  log(' ♫ App Quit'.green)
})
