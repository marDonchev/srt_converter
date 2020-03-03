//var http = require("http");
var filewalk = require("rs-filewalk");
var path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const log = console.log;
const detectCharacterEncoding = require("detect-character-encoding");

// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold("Hello world!"));

// Pass in multiple arguments
log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

// Nest styles
log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// Nest styles of the same type even (color, underline, background)
log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);

// ES2015 template literal
log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.keyword("orange")("Yay for orange colored text!"));
log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
log(chalk.hex("#DEADED").bold("Bold gray!"));

//path.join( __dirname, 'a-directory' )
//var files = filewalk("");
const currentPath = __dirname;
const parentPath = path.resolve(__dirname, "..");
log(chalk.yellow(`path=${currentPath}, parentPath=${parentPath}`));
var files = filewalk(currentPath);
//console.info(files);
console.log("files length = " + files.length);
files.map(record => {
  log(chalk.keyword("orange")(record.file));
});

const fileBuffer = fs.readFileSync(currentPath + "/" + files[0].file);
const charsetMatch = detectCharacterEncoding(fileBuffer);
console.info(charsetMatch);
