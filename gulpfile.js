var gulp = require('gulp'), 
    sass = require('gulp-ruby-sass') ,
    notify = require("gulp-notify") ,
    bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');


var config = {
     sassPath: './resources/sass',
     bowerDir: './bower_components' ,
    jsFiles :'./resources/js/**/*.js',
    jsDest : './assets/js'
}

gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(config.bowerDir)) 
});

gulp.task('icons', function() { 
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*') 
        .pipe(gulp.dest('./assets/fonts')); 
});

gulp.task('sass', function() { 
    return gulp.src(config.sassPath + '/app.scss')
         .pipe(sass({
             style: 'compressed',
             loadPath: [
                 config.sassPath + '/app.scss',
                 config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
                 config.bowerDir + '/fontawesome/scss',
             ]
         }) 
            .on("error", notify.onError(function (error) {
                 return "Error: " + error.message;
             }))) 
         .pipe(gulp.dest('./assets/css')); 
});



gulp.task('js', function() {
  return gulp.src([config.bowerDir+'/jquery/dist/jquery.js',
                  config.bowerDir+'/bootstrap-sass-official/assets/javascripts/bootstrap.js',
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
});




// Rerun the task when a file changes
 gulp.task('watch', function() {
  gulp.watch(config.sassPath + '/**/*.scss', ['sass']); 
  gulp.watch(config.jsFiles , ['js']); 
});

  gulp.task('default', ['watch','bower', 'icons', 'sass','js']);
