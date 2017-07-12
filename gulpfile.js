"use strict";

const babel = require( "gulp-babel" );
const changed = require( "gulp-changed" );
const debug = require( "gulp-debug" );
const del = require( "del" );
const gulp = require( "gulp" );
const plumber = require( "gulp-plumber" );
const rename = require( "gulp-rename" );
const replace = require( "gulp-replace" );
const sourcemap = require( "gulp-sourcemaps" );
const yargs = require( "yargs" );

const clientPattern = /\/\/\:\s*\@client\:(.+?|[^]+?)\/\/\:\s*\@end\-client/gm;
const serverPattern = /\/\/\:\s*\@server\:(.+?|[^]+?)\/\/\:\s*\@end\-server/gm;

let parameter = yargs
	.boolean( "client" )
	.boolean( "server" )
	.boolean( "all" )
	.coerce( "module", ( name ) => name.split( /\,/ ) )
	.argv

let list = parameter.module;

gulp.task( "server", function formatClient( ){
	return gulp.src( list.map( ( name ) => `${ name }.module.js` ) )
		.pipe( plumber( ) )
		.pipe( debug( { "title": "Server File:" } ) )
		.pipe( rename( ( path ) => {
			path.basename = path.basename.replace( ".module", "" );
			return path;
		} ) )
		.pipe( replace( clientPattern, "" ) )
		.pipe( changed( "./", {
			"hasChanged": changed.compareContents
		} ) )
		.pipe( debug( { "title": "Server File Done:" } ) )
		.pipe( gulp.dest( "./" ) );
} );

gulp.task( "client", function formatServer( ){
	return gulp.src( list.map( ( name ) => `${ name }.module.js` ) )
		.pipe( plumber( ) )
		.pipe( debug( { "title": "Client File:" } ) )
		.pipe( rename( ( path ) => {
			path.basename = path.basename.replace( ".module", ".support" );
			return path;
		} ) )
		.pipe( replace( serverPattern, "" ) )
		.pipe( sourcemap.init( ) )
		.pipe( babel( ) )
		.pipe( sourcemap.write( "./" ) )
		.pipe( changed( "./", {
			"hasChanged": changed.compareContents,
		} ) )
		.pipe( debug( { "title": "Client File Done:" } ) )
		.pipe( gulp.dest( "./" ) );
} );

let defaultTask = [ ];
if( parameter.all ){
	defaultTask.push( "server" );
	defaultTask.push( "client" );

}else{
	if( parameter.server ){
		defaultTask.push( "server" );
	}

	if( parameter.client ){
		defaultTask.push( "client" );
	}
}

gulp.task( "default", defaultTask );
