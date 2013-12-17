module.exports = function(grunt) {
	 "use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
        bower: {
            test: {
                options: {
                    cleanup: true,
                    layout: "byComponent",
                    targetDir: "test/dependencies"
                }
            }
        },
        clean: {
            dist: {
                src: ["dist"]
            },
            test: {
                src: ["test/dependencies"]
            }
        },
		concat: {
            dist: {
                files: {
                	"dist/bindfirst.js": ["src/*.js"]
                }
            },
            test: {
                files: {
                    "test/dependencies/bindfirst/bindfirst.js": ["src/*.js"]
                }
            }
        },
        copy: {
            test: {
            	expand: true,
            	filter: "isFile",
            	flatten: true,
                cwd: "node_modules/grunt-mocha/node_modules/mocha/",
                src: "**",
                dest: "test/dependencies/mocha/"
            }
        },
        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },
            test: {
                src: "src/*.js"
            }
        },
        mocha: {
            test: {
            	options: {
            		log: true,
            		run: false
            	},
                src: ["test/index.html"]
            }
        },
        uglify: {
			dist: {
            	files: {
                	"dist/bindfirst.min.js": ["dist/bindfirst.js"]
                },
				options: {
                	preserveComments: false,
                    banner: "/*! bindfirst <%= pkg.version %> | 2013 Alvin Teh | MIT-licensed */"
            	}
            }
        },
        watch: {
            dev: {
                files: ["src/*.js"],
                tasks: [
                    "jshint",
                    "mocha:all"
                ]
            }
        },
	});

	require("load-grunt-tasks")(grunt);

	grunt.registerTask("default", ["clean:dist", "concat:dist", "uglify:dist"]);
    grunt.registerTask("monitor", ["watch:dev"]);
    grunt.registerTask("test", ["jshint:test", "bower:test", "copy:test", "concat:test", "mocha:test"]);

};