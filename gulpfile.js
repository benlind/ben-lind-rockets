/**********************************************
 * CONFIG
 */

var gulp   = require('gulp'), 
    sass   = require('gulp-sass') 
    notify = require('gulp-notify') 
    bower  = require('gulp-bower');

var config = {
  source: './src/',
  dest: './dist/',
  bowerDir: './bower_components/' ,
};

var bootstrapSass = {
  in: config.bowerDir + 'bootstrap-sass-official/'
};

var fontAwesome = {
  inScss: config.bowerDir + '/fontawesome/scss',
  inFonts: config.bowerDir + '/fontawesome/fonts/**.*',
};

var fonts = {
  in: [
    config.source + 'fonts/*.*',
    bootstrapSass.in + 'assets/fonts/**/*',
    fontAwesome.inFonts,
  ],
  out: config.dest + 'fonts/'
};

var scss = {
  in: [
    config.source + 'scss/*',
  ],
  out:   config.dest + 'css/',
  watch: config.source + 'scss/*',
  sassOpts: {
    outputStyle: 'compressed',
    precison: 3,
    errLogToConsole: true,
    includePaths: [
      config.source + 'scss',
      bootstrapSass.in + 'assets/stylesheets',
      fontAwesome.inScss,
    ]
  }
};

var js = {
  in: [
    config.source + 'js/*',
  ],
  out: config.dest + 'js/',
  inBootstrap: bootstrapSass.in + 'assets/javascripts/**/*',
  outBootstrap: config.dest + 'js/bootstrap',
};



/**********************************************
 * TASKS
 */

gulp.task('bower', function() { 
  return bower()
    .pipe(gulp.dest(config.bowerDir));
});

// Move fonts
gulp.task('fonts', function () {
  return gulp
    .src(fonts.in)
    .pipe(gulp.dest(fonts.out));
});

// Compile scss
gulp.task('sass', ['fonts'], function () {
  return gulp.src(scss.in)
    .pipe(sass(scss.sassOpts)
      .on('error', notify.onError(function (error) {
        return "Error: " + error.message;
      })))
    .pipe(gulp.dest(scss.out));
});

// Move js
gulp.task('js', function () {
  gulp
    .src(js.in)
    .pipe(gulp.dest(js.out));
  return gulp
    .src(js.inBootstrap)
    .pipe(gulp.dest(js.outBootstrap));
});

// Default task
gulp.task('default', ['bower', 'fonts', 'sass', 'js'], function () {
   gulp.watch(scss.watch, ['sass']);
});
