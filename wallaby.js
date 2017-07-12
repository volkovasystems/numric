module.exports = ( ) => {
	return {
		"files": [
			{ "pattern": "./numric.module.js", "instrument": false },
			{ "pattern": "./test.module.js", "instrument": false },
			"./numric.js",
		],
		"tests": [
			"./test.js"
		],
		"debug": true,
		"env": {
			"type": "node",
			"runner": "node"
		},
		"setup": ( wallaby ) => {
			require( "child_process" ).execSync( "npm run deploy", { "cwd": wallaby.localProjectDir } );
		}
	};
};
