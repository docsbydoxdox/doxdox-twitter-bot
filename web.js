require('with-env')();

const {tweet} = require('./src/utils/twitter');

const title = 'doxdox';
const description = 'JSDoc to Markdown, Bootstrap, and custom Handlebars template documentation generator.';
const url = 'https://doxdox.org/neogeek/doxdox';

const status = `${title} - ${description} ${url} #javascript #documentation`;

console.log('Tweet contents: %s', status);
console.log('Tweet length: %d', status.length);

tweet(status);
