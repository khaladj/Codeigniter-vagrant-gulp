var gulp = require('gulp'), 
    sass = require('gulp-ruby-sass') ,
    notify = require("gulp-notify") ,
    bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    merge = require('merge-stream'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;


var config = {
    sassPath: './resources/sass',
    jsPath: './resources/js',
     bowerDir: './bower_components' ,
    jsFiles :'./resources/js/*.js',
    jsDest : './assets/js'
}


gulp.task('html', function(){
	gulp.src(['application/views/**/*.php'])
	.pipe(reload({stream:true}))
})

gulp.task('browser-sync', function() {
	browserSync.init({
		proxy : 'http://localhost/my.eagleigps.com.local/index.php/',
	});
});

gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(config.bowerDir)) 
});


gulp.task('icons', function() { 
  var otherfonts =  gulp.src([config.bowerDir + '/font-awesome/fonts/**.*']) 
               .pipe(gulp.dest('./assets/fonts')); 
  var bootstrapfonts =  gulp.src([config.bowerDir + '/bootstrap-sass-official/assets/fonts/bootstrap/**.*']) 
                .pipe(gulp.dest('./assets/fonts/bootstrap')); 
  return merge(otherfonts, bootstrapfonts);

});

gulp.task('sass', function() { 
    return gulp.src(config.sassPath + '/app.scss')
         .pipe(sass({
             style: 'compressed',
             loadPath: [
                 config.sassPath + '/app.scss',
                 config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
                 config.bowerDir + '/font-awesome/scss',
             ]
         }) 
            .on("error", notify.onError(function (error) {
                 return "Error: " + error.message;
             }))) 

         .pipe(gulp.dest('./assets/css')) 
        .pipe(reload({stream:true}))
});



gulp.task('js', function() {
  return gulp.src([config.bowerDir+'/jquery/dist/jquery.js',
                   config.bowerDir+'/bootstrap-sass-official/assets/javascripts/bootstrap.js',
                   config.bowerDir+'/hammerjs/hammer.js',
                   config.bowerDir+'/jquery-hammerjs/jquery.hammer.js',
                   config.jsFiles

    ])
    .pipe(sourcemaps.init())
    .pipe(concat({ path: 'app.js', stat: { mode: 0666 }}))
    .pipe(gulp.dest(config.jsDest))
    .pipe(rename('app.min.js'))
    .pipe(uglify()
    .on('error', notify.onError(function (error) {
             return "Error: " + error.message;
      }))) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.jsDest))
    .pipe(reload({stream:true}))

});




// Rerun the task when a file changes
 gulp.task('watch', function() {
  gulp.watch(config.sassPath + '/**/*.scss', ['sass']); 
  gulp.watch(config.jsFiles , ['js']); 
  gulp.watch('application/views/**/*.php', ['html'])
});

  gulp.task('default', ['html', 'browser-sync','watch','bower', 'icons', 'sass','js']);
