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
	//: @!bridge:
	describe("`numric( 123 )`", function () {return it("should return true", function () {return assert.equal(numric(123), true);});});

	describe("`numric( '123' )`", function () {return it("should return true", function () {return assert.equal(numric("123"), true);});});

	describe("`numric( '0x1010' )`", function () {return it("should return true", function () {return assert.equal(numric("0x1010"), true);});});

	describe("`numric( '0b1010101' )`", function () {return it("should return true", function () {return assert.equal(numric("0b1010101"), true);});});

	describe("`numric( )`", function () {return it("should return false", function () {return assert.equal(numric(), false);});});
	//: @end-bridge


});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibnVtcmljIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxxQkFBVCxDQUFmO0FBQ0E7Ozs7QUFJQUUsU0FBVSxRQUFWLEVBQW9CLFlBQU87QUFDMUI7QUFDQUEsVUFBVSxpQkFBVixFQUE2QixvQkFBT0MsR0FBSSxvQkFBSixFQUEwQixvQkFBT0osT0FBT0ssS0FBUCxDQUFjSCxPQUFRLEdBQVIsQ0FBZCxFQUE2QixJQUE3QixDQUFQLEVBQTFCLENBQVAsRUFBN0I7O0FBRUFDLFVBQVUsbUJBQVYsRUFBK0Isb0JBQU9DLEdBQUksb0JBQUosRUFBMEIsb0JBQU9KLE9BQU9LLEtBQVAsQ0FBY0gsT0FBUSxLQUFSLENBQWQsRUFBK0IsSUFBL0IsQ0FBUCxFQUExQixDQUFQLEVBQS9COztBQUVBQyxVQUFVLHNCQUFWLEVBQWtDLG9CQUFPQyxHQUFJLG9CQUFKLEVBQTBCLG9CQUFPSixPQUFPSyxLQUFQLENBQWNILE9BQVEsUUFBUixDQUFkLEVBQWtDLElBQWxDLENBQVAsRUFBMUIsQ0FBUCxFQUFsQzs7QUFFQUMsVUFBVSx5QkFBVixFQUFxQyxvQkFBT0MsR0FBSSxvQkFBSixFQUEwQixvQkFBT0osT0FBT0ssS0FBUCxDQUFjSCxPQUFRLFdBQVIsQ0FBZCxFQUFxQyxJQUFyQyxDQUFQLEVBQTFCLENBQVAsRUFBckM7O0FBRUFDLFVBQVUsYUFBVixFQUF5QixvQkFBT0MsR0FBSSxxQkFBSixFQUEyQixvQkFBT0osT0FBT0ssS0FBUCxDQUFjSCxRQUFkLEVBQXlCLEtBQXpCLENBQVAsRUFBM0IsQ0FBUCxFQUF6QjtBQUNBOzs7QUFHQSxDQWREIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibnVtcmljXCIsXG5cdFx0XHRcInBhdGhcIjogXCJudW1yaWMvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL251bXJpYy5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwibnVtcmljXCI6IFwibnVtcmljXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBudW1yaWMgPSByZXF1aXJlKCBcIi4vbnVtcmljLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5kZXNjcmliZSggXCJudW1yaWNcIiwgKCApID0+IHtcblx0Ly86IEAhYnJpZGdlOlxuXHRkZXNjcmliZSggXCJgbnVtcmljKCAxMjMgKWBcIiwgKCApID0+IGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4gYXNzZXJ0LmVxdWFsKCBudW1yaWMoIDEyMyApLCB0cnVlICkgKSApO1xuXG5cdGRlc2NyaWJlKCBcImBudW1yaWMoICcxMjMnIClgXCIsICggKSA9PiBpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IGFzc2VydC5lcXVhbCggbnVtcmljKCBcIjEyM1wiICksIHRydWUgKSApICk7XG5cblx0ZGVzY3JpYmUoIFwiYG51bXJpYyggJzB4MTAxMCcgKWBcIiwgKCApID0+IGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4gYXNzZXJ0LmVxdWFsKCBudW1yaWMoIFwiMHgxMDEwXCIgKSwgdHJ1ZSApICkgKTtcblxuXHRkZXNjcmliZSggXCJgbnVtcmljKCAnMGIxMDEwMTAxJyApYFwiLCAoICkgPT4gaXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiBhc3NlcnQuZXF1YWwoIG51bXJpYyggXCIwYjEwMTAxMDFcIiApLCB0cnVlICkgKSApO1xuXG5cdGRlc2NyaWJlKCBcImBudW1yaWMoIClgXCIsICggKSA9PiBpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiBhc3NlcnQuZXF1YWwoIG51bXJpYyggKSwgZmFsc2UgKSApICk7XG5cdC8vOiBAZW5kLWJyaWRnZVxuXG5cdFxufSApO1xuIl19
//# sourceMappingURL=test.support.js.map
