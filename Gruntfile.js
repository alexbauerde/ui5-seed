module.exports = function(grunt) {
  require("time-grunt")(grunt);

  grunt.initConfig({
    prompt: {
      backendcredentials: {
        options: {
          questions: [
            {
              config: "user", // arbitrary name or config for any other grunt task
              type: "input", // list, checkbox, confirm, input, password
              message: "Username" // Question to ask the user, function needs to return a string
            },
            {
              config: "pwd", // arbitrary name or config for any other grunt task
              type: "password", // list, checkbox, confirm, input, password
              message: "Password" // Question to ask the user, function needs to return a string
            }
          ]
        }
      }
    },
    pkg: grunt.file.readJSON("package.json"),
    clean: {
      dist: ["dist/*"],
      resources: ["dist/resources/**/*.*", "dist/resources/**/.*"]
    },
    cleanempty: {
      options: {},
      src: ["dist/resources/**/*"]
    },
    nwabap_ui5uploader: {
      options: {
        conn: {
          server: "URL OF ABAP SYSTEM"
        },
        auth: {
          user: "<%= user %>",
          pwd: "<%= pwd %>"
        }
      },
      upload_build: {
        options: {
          ui5: {
            package: "$TMP",
            bspcontainer: "ZUI5_SAMPLE",
            bspcontainer_text: "UI5 Beispiel-App"
          },
          resources: {
            cwd: "dist",
            src: "**/*.*"
          }
        }
      }
    },
    run: {
      commands: {
        //exec: "ui5 build self-contained --a"
        exec: "ui5 build preload --exclude-task=createDebugFiles"
      }
    }
  });
  grunt.loadNpmTasks("grunt-prompt");
  grunt.loadNpmTasks("grunt-run");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-cleanempty");
  grunt.loadNpmTasks("grunt-nwabap-ui5uploader");

  //grunt.registerTask('default', ['prompt:backendcredentials', 'clean:dist', 'run', 'clean:resources', 'cleanempty', 'nwabap_ui5uploader']);
  //   grunt.registerTask("default", [
  //     "clean:dist",
  //     "run",
  //     "clean:resources",
  //     "cleanempty"
  //   ]);
  // grunt.registerTask("default", [
  //   "prompt:backendcredentials",
  //   "nwabap_ui5uploader"
  // ]);
};
