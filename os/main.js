const os = require('os');

console.log(`This is used to represent ${os.EOL} the end of a line`)

console.log(`This systems CPU architecture is ${os.arch}`)

// Commonly used operating system-specific constants
console.log(os.constants)

console.log(`This system has ${Math.round(os.freemem / (1024 * 1024 * 1024))}gb of ram remaining out of ${Math.floor(os.totalmem / (1024 * 1024 * 1024))}gb`)

console.log(`This is ${os.hostname()} how can I be of service?`)



