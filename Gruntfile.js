module.exports = function(grunt) {
	 "use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		concat: {
            dist: {
                files: {
                	"dist/bindfirst.js": ["src/*.js"],
                }
            }
        },
        jshint: {
            files: [
            	"src/*.js"
        	],
            options: {
                jshintrc: ".jshintrc"
            }
        },
        uglify: {
			all: {
            	files: {
                	"dist/bindfirst.min.js": ["dist/bindfirst.js"]
                },
				options: {
                	preserveComments: false,
                    banner: "/*! bindfirst <%= pkg.version %> | 2013 Alvin Teh | MIT-licensed */",
            	}
            }
        },
        watch: {
            files: ["src/*.js"],
        },
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask("default", ["jshint", "concat", "uglify"]);
}