const path = require('path');

module.exports = {
  entry: {
	'home' : './javascript/home.js',
	'create' : './javascript/create.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};