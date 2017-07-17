"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

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
	@end-test-license

	@test-configuration:
		{
			"package": "numric",
			"path": "numric/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/numric.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"numric": "numric"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const numric = require( "./numric.js" );
//: @end-server





describe( "numric", ( ) => {
	//: @!bridge:
	describe( "`numric( 123 )`", ( ) => it( "should return true", ( ) => assert.equal( numric( 123 ), true ) ) );

	describe( "`numric( '123' )`", ( ) => it( "should return true", ( ) => assert.equal( numric( "123" ), true ) ) );

	describe( "`numric( '0x1010' )`", ( ) => it( "should return true", ( ) => assert.equal( numric( "0x1010" ), true ) ) );

	describe( "`numric( '0b1010101' )`", ( ) => it( "should return true", ( ) => assert.equal( numric( "0b1010101" ), true ) ) );

	describe( "`numric( )`", ( ) => it( "should return false", ( ) => assert.equal( numric( ), false ) ) );
	//: @end-bridge

	
} );
