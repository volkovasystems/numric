
const assert = require( "assert" );
const numric = require( "./numric.js" );

assert.equal( numric( 9 ), true, "should be true" );

assert.equal( numric( "9" ), true, "should be true" );

assert.equal( numric( "a9" ), false, "should be false" );

assert.equal( numric( "abc" ), false, "should be false" );

console.log( "ok" );
