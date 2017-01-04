"use strict";

/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "numric",
			"path": "numric/numric.js",
			"file": "numric.js",
			"module": "numric",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/numric.git",
			"test": "numric-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Check if value contains all numeric literals.
	@end-module-documentation

	@include:
		{
			"harden": "harden",
			"truly": "truly"
		}
	@end-include
*/

var harden = require("harden");
var protype = require("protype");
var truly = require("truly");

var numric = function numric(value) {
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

	if (!protype(value, STRING) && !protype(value, NUMBER)) {
		throw new Error("invalid value");
	}

	return truly(value) && numric.NUMERIC_PATTERN.test(value.toString());
};

harden.bind(numric)("NUMERIC_PATTERN", /^\d+\.?\d*$/);

module.exports = numric;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bXJpYy5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwicHJvdHlwZSIsInRydWx5IiwibnVtcmljIiwidmFsdWUiLCJTVFJJTkciLCJOVU1CRVIiLCJFcnJvciIsIk5VTUVSSUNfUEFUVEVSTiIsInRlc3QiLCJ0b1N0cmluZyIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNRyxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3RDOzs7Ozs7Ozs7OztBQVdBLEtBQUksQ0FBQ0gsUUFBU0csS0FBVCxFQUFnQkMsTUFBaEIsQ0FBRCxJQUE2QixDQUFDSixRQUFTRyxLQUFULEVBQWdCRSxNQUFoQixDQUFsQyxFQUE0RDtBQUMzRCxRQUFNLElBQUlDLEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFRCxRQUFPTCxNQUFPRSxLQUFQLEtBQWtCRCxPQUFPSyxlQUFQLENBQXVCQyxJQUF2QixDQUE2QkwsTUFBTU0sUUFBTixFQUE3QixDQUF6QjtBQUNBLENBakJEOztBQW1CQVgsT0FBT1ksSUFBUCxDQUFhUixNQUFiLEVBQXVCLGlCQUF2QixFQUEwQyxhQUExQzs7QUFFQVMsT0FBT0MsT0FBUCxHQUFpQlYsTUFBakIiLCJmaWxlIjoibnVtcmljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJudW1yaWNcIixcblx0XHRcdFwicGF0aFwiOiBcIm51bXJpYy9udW1yaWMuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm51bXJpYy5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJudW1yaWNcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9udW1yaWMuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJudW1yaWMtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRDaGVjayBpZiB2YWx1ZSBjb250YWlucyBhbGwgbnVtZXJpYyBsaXRlcmFscy5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5cbmNvbnN0IG51bXJpYyA9IGZ1bmN0aW9uIG51bXJpYyggdmFsdWUgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJ2YWx1ZTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm51bWJlclwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhcHJvdHlwZSggdmFsdWUsIFNUUklORyApICYmICFwcm90eXBlKCB2YWx1ZSwgTlVNQkVSICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCB2YWx1ZVwiICk7XG5cdH1cblxuXHRyZXR1cm4gdHJ1bHkoIHZhbHVlICkgJiYgbnVtcmljLk5VTUVSSUNfUEFUVEVSTi50ZXN0KCB2YWx1ZS50b1N0cmluZyggKSApO1xufTtcblxuaGFyZGVuLmJpbmQoIG51bXJpYyApKCBcIk5VTUVSSUNfUEFUVEVSTlwiLCAvXlxcZCtcXC4/XFxkKiQvICk7XG5cbm1vZHVsZS5leHBvcnRzID0gbnVtcmljO1xuIl19
