"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		All rights reserved.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "numric",
			"path": "numric/numric.js",
			"file": "numric.js",
			"module": "numric",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/numric.git",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Check if value contains all numeric literals.
	@end-module-documentation

	@include:
		{
			"protype": "protype",
			"stringe": "stringe",
			"truly": "truly"
		}
	@end-include
*/

const protype = require( "protype" );
const stringe = require( "stringe" );
const truly = require( "truly" );

const NUMERIC_PATTERN = /^[\+\-]?(?:(?:0[xX][0-9a-fA-F]+)|(?:0[bB][01]+)|(?:\d*\.?\d+(?:[Ee][\+\-]?\d+)?))$/;

const numric = function numric( value ){
	/*;
		@meta-configuration:
			{
				"value:required": [
					"string",
					"number"
				]
			}
		@end-meta-configuration
	*/

	if( typeof value == "number" ){
		return true;
	}

	if( !protype( value, STRING + NUMBER ) ){
		return false;
	}

	return truly( value ) && NUMERIC_PATTERN.test( stringe( value ) );
};

module.exports = numric;
