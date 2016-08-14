//file wrapper
module.exports = function(grunt) {
    
    //load plugins
    grunt.loadNpmTasks('grunt-responsive-images');
    
    //task configurations
    grunt.initConfig({
        
        //grunt-resposive-images plugin
        responsive_images: {
            myTask: {
                options: {
                    //task specific options here 
                    engine: 'im',

                    sizes: [{
                        width: 500,
                        suffix: "sm",
                    },{
                        width: 700,
                        suffix: "md"
                    },{
                        width: 845,
                        suffix: "lg"
                    },{
                        width: 926,
                        suffix: "xl"
                    },{ //start 2x images
                        width: 1000,
                        suffix: "sm-2x",
                        quality: 40
                    },{
                        width: 1400,
                        suffix: "md-2x",
                        quality: 40
                    },{
                        width: 1700,
                        suffix: "lg-2x",
                        quality: 40
                    },{
                        width: 1900,
                        suffix: "xl-2x",
                        quality: 40
                    }]
                },

                files: [{
                    //target-specific files list and/or options here
                    expand: true,
                    src: ['**.{jpg,gif,png}'], //file types
                    cwd: 'images/', //source directory
                    dest: 'images-opt/' //destination directory
                }]
            }
        },
    });
    
    //register tasks to run them
    grunt.registerTask('default', ['responsive_images']);
    
};