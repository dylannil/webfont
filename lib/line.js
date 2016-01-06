/**
 * Pipeline
 */
var fs = require('fs'),
	svg2font = require('svgicons2svgfont'),
	svg2ttf = require('svg2ttf'),
	ttf2eot = require('ttf2eot'),
	ttf2woff = require('ttf2woff'),
	ttf2woff2 = require('ttf2woff2');

module.exports = function(options) {
	var fontStream = svg2font({
		fontName: options.fontname
	});

	fontStream.pipe(fs.createWriteStream('fonts/hello.svg'))
		.on('finish', function() {
			console.log('Font created');
		})
		.on('error', function(err) {
			console.error(err);
		});

	// options.formats ['ttf' ,'eot', 'woff', 'woff2', 'svg']
	// svg2ttf
	fs.writeFileSync('hello.ttf', new Buffer(svg2ttf(fs.readFileSync('fonts/hello.svg'), {}).buffer));
	// ttf2eot
	// ttf2woff
	// ttf2woff2
	fs.writeFileSync('hello.woff2', ttf2woff2(fs.readFileSync('fonts/hello.ttf')));
};