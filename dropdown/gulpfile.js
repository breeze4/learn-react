var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var path = require('path');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
    var bundler = watchify(browserify({
        // start point for browserify
        entries: [path.join('.', 'src', 'app.jsx')],
        // specify which transforms to apply
        transform: [reactify],
        // file extensions to consider for this set of transforms
        extensions: ['.jsx'],
        // boilerplate below
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));

    function build(file) {
        if (file) gutil.log('Recompiling ' + file);
        return bundler.bundle()
            // log errors during build process
            .on('error', gutil.log.bind(gutil, 'Browserify Error!'))
            .pipe(source('main.js'))
            // uncomment these to minify the output :)
            //.pipe(buffer())
            //.pipe(uglify())
            .pipe(gulp.dest('./'))
    }

    build();
    bundler.on('update', build);
})