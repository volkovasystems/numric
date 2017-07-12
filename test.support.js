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

var assert = require("should");



//: @client:
var numric = require("./numric.support.js");
//: @end-client

describe("numric", function () {
	describe("`numric( 123 )`", function () {return it("should return true", function () {return assert.equal(numric(123), true);});});

	describe("`numric( '123' )`", function () {return it("should return true", function () {return assert.equal(numric("123"), true);});});

	describe("`numric( '0x1010' )`", function () {return it("should return true", function () {return assert.equal(numric("0x1010"), true);});});

	describe("`numric( '0b1010101' )`", function () {return it("should return true", function () {return assert.equal(numric("0b1010101"), true);});});

	describe("`numric( )`", function () {return it("should return false", function () {return assert.equal(numric(), false);});});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibnVtcmljIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxxQkFBVCxDQUFmO0FBQ0E7O0FBRUFFLFNBQVUsUUFBVixFQUFvQixZQUFPO0FBQzFCQSxVQUFVLGlCQUFWLEVBQTZCLG9CQUFPQyxHQUFJLG9CQUFKLEVBQTBCLG9CQUFPSixPQUFPSyxLQUFQLENBQWNILE9BQVEsR0FBUixDQUFkLEVBQTZCLElBQTdCLENBQVAsRUFBMUIsQ0FBUCxFQUE3Qjs7QUFFQUMsVUFBVSxtQkFBVixFQUErQixvQkFBT0MsR0FBSSxvQkFBSixFQUEwQixvQkFBT0osT0FBT0ssS0FBUCxDQUFjSCxPQUFRLEtBQVIsQ0FBZCxFQUErQixJQUEvQixDQUFQLEVBQTFCLENBQVAsRUFBL0I7O0FBRUFDLFVBQVUsc0JBQVYsRUFBa0Msb0JBQU9DLEdBQUksb0JBQUosRUFBMEIsb0JBQU9KLE9BQU9LLEtBQVAsQ0FBY0gsT0FBUSxRQUFSLENBQWQsRUFBa0MsSUFBbEMsQ0FBUCxFQUExQixDQUFQLEVBQWxDOztBQUVBQyxVQUFVLHlCQUFWLEVBQXFDLG9CQUFPQyxHQUFJLG9CQUFKLEVBQTBCLG9CQUFPSixPQUFPSyxLQUFQLENBQWNILE9BQVEsV0FBUixDQUFkLEVBQXFDLElBQXJDLENBQVAsRUFBMUIsQ0FBUCxFQUFyQzs7QUFFQUMsVUFBVSxhQUFWLEVBQXlCLG9CQUFPQyxHQUFJLHFCQUFKLEVBQTJCLG9CQUFPSixPQUFPSyxLQUFQLENBQWNILFFBQWQsRUFBeUIsS0FBekIsQ0FBUCxFQUEzQixDQUFQLEVBQXpCO0FBQ0EsQ0FWRCIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm51bXJpY1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwibnVtcmljL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9udW1yaWMuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcIm51bXJpY1wiOiBcIm51bXJpY1wiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgbnVtcmljID0gcmVxdWlyZSggXCIuL251bXJpYy5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5kZXNjcmliZSggXCJudW1yaWNcIiwgKCApID0+IHtcblx0ZGVzY3JpYmUoIFwiYG51bXJpYyggMTIzIClgXCIsICggKSA9PiBpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IGFzc2VydC5lcXVhbCggbnVtcmljKCAxMjMgKSwgdHJ1ZSApICkgKTtcblxuXHRkZXNjcmliZSggXCJgbnVtcmljKCAnMTIzJyApYFwiLCAoICkgPT4gaXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiBhc3NlcnQuZXF1YWwoIG51bXJpYyggXCIxMjNcIiApLCB0cnVlICkgKSApO1xuXG5cdGRlc2NyaWJlKCBcImBudW1yaWMoICcweDEwMTAnIClgXCIsICggKSA9PiBpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IGFzc2VydC5lcXVhbCggbnVtcmljKCBcIjB4MTAxMFwiICksIHRydWUgKSApICk7XG5cblx0ZGVzY3JpYmUoIFwiYG51bXJpYyggJzBiMTAxMDEwMScgKWBcIiwgKCApID0+IGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4gYXNzZXJ0LmVxdWFsKCBudW1yaWMoIFwiMGIxMDEwMTAxXCIgKSwgdHJ1ZSApICkgKTtcblxuXHRkZXNjcmliZSggXCJgbnVtcmljKCApYFwiLCAoICkgPT4gaXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4gYXNzZXJ0LmVxdWFsKCBudW1yaWMoICksIGZhbHNlICkgKSApO1xufSApO1xuIl19
//# sourceMappingURL=test.support.js.map
