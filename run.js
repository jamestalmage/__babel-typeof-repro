var path = require('path');
var fs = require('fs');

var inputPath = path.join(__dirname, 'input.js');
var outputPath = path.join(__dirname, 'output.js');

var babel = require('babel-core');

var options = {
  presets : ['stage-3', 'es2015'],
  plugins: ['transform-runtime']
};

var result = babel.transformFileSync(inputPath, options);

fs.writeFileSync(outputPath, result.code);

require('./output.js');
