var fontStream = require('./line')({
	fontname: 'hello'
});

var glyph = fs.createReadStream('icons/icon1.svg');
glyph.metadata = {
  unicode: ['\uE001\uE002'],
  name: 'icon1'
};
fontStream.write(glyph);

fontStream.end();
