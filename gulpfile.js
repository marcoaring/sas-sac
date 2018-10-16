var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
	pixrem = require('pixrem'),
	autoprefixer = require('autoprefixer'),
	concat = require('gulp-concat'),
	minifycss = require('gulp-uglifycss'),
	rename = require('gulp-rename'),
    mmq = require('gulp-merge-media-queries'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel');

gulp.task('sass', function(){
    gulp.src('css/sass/**/style.scss')
    	.pipe(sourcemaps.init())
    	.pipe(sass({
        	errLogToConsole: true,
            outputStyle: 'compact',
            precision: 10
        }).on('error', sass.logError))
    	.pipe(postcss([
        	autoprefixer({
            	browsers: ['last 5 versions']
        	}),
        	pixrem()
    	]))
    	.pipe(sourcemaps.write({ includeContent: false }))
    	.pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(mmq())
    	.pipe(rename({ suffix: '.min' }))
        .pipe(minifycss({ maxLineLen: 10 }))
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('scripts', function(){
    gulp.src('js/*.js')
        .pipe(concat('main.js'))
        .pipe(
            rename({
                suffix: '.min'
            })
        )
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/'));
});

gulp.task('scriptsVendor', function(){
    gulp.src('js/vendor/*.js')
        .pipe(concat('vendor.js'))
        .pipe(
            rename({
                suffix: '.min'
            })
        )
        .pipe(gulp.dest('assets/js/'));
});

gulp.task('watch', function() {
    gulp.watch('css/sass/**/*.scss', ['sass']);
    gulp.watch('js/vendor/*.js', ['scriptsVendor']);
    gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default', ['sass', 'scriptsVendor', 'scripts', 'watch']);