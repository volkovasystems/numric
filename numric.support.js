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
			"protype": "protype",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bXJpYy5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwicHJvdHlwZSIsInRydWx5IiwibnVtcmljIiwidmFsdWUiLCJTVFJJTkciLCJOVU1CRVIiLCJFcnJvciIsIk5VTUVSSUNfUEFUVEVSTiIsInRlc3QiLCJ0b1N0cmluZyIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7O0FBRUEsSUFBTUcsU0FBUyxTQUFTQSxNQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUN0Qzs7Ozs7Ozs7Ozs7QUFXQSxLQUFJLENBQUNILFFBQVNHLEtBQVQsRUFBZ0JDLE1BQWhCLENBQUQsSUFBNkIsQ0FBQ0osUUFBU0csS0FBVCxFQUFnQkUsTUFBaEIsQ0FBbEMsRUFBNEQ7QUFDM0QsUUFBTSxJQUFJQyxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsUUFBT0wsTUFBT0UsS0FBUCxLQUFrQkQsT0FBT0ssZUFBUCxDQUF1QkMsSUFBdkIsQ0FBNkJMLE1BQU1NLFFBQU4sRUFBN0IsQ0FBekI7QUFDQSxDQWpCRDs7QUFtQkFYLE9BQU9ZLElBQVAsQ0FBYVIsTUFBYixFQUF1QixpQkFBdkIsRUFBMEMsYUFBMUM7O0FBRUFTLE9BQU9DLE9BQVAsR0FBaUJWLE1BQWpCIiwiZmlsZSI6Im51bXJpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibnVtcmljXCIsXG5cdFx0XHRcInBhdGhcIjogXCJudW1yaWMvbnVtcmljLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJudW1yaWMuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibnVtcmljXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbnVtcmljLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwibnVtcmljLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Q2hlY2sgaWYgdmFsdWUgY29udGFpbnMgYWxsIG51bWVyaWMgbGl0ZXJhbHMuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuXG5jb25zdCBudW1yaWMgPSBmdW5jdGlvbiBudW1yaWMoIHZhbHVlICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwidmFsdWU6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJudW1iZXJcIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIXByb3R5cGUoIHZhbHVlLCBTVFJJTkcgKSAmJiAhcHJvdHlwZSggdmFsdWUsIE5VTUJFUiApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgdmFsdWVcIiApO1xuXHR9XG5cblx0cmV0dXJuIHRydWx5KCB2YWx1ZSApICYmIG51bXJpYy5OVU1FUklDX1BBVFRFUk4udGVzdCggdmFsdWUudG9TdHJpbmcoICkgKTtcbn07XG5cbmhhcmRlbi5iaW5kKCBudW1yaWMgKSggXCJOVU1FUklDX1BBVFRFUk5cIiwgL15cXGQrXFwuP1xcZCokLyApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG51bXJpYztcbiJdfQ==
