const gulp = require('gulp')
, babel = require('gulp-babel')
, concat = require('gulp-concat')
, sourcemaps = require("gulp-sourcemaps")
, uglify = require('gulp-uglify')
, webpack = require('webpack-stream')
, jest = require('gulp-jest').default;

const paths = {
    scripts: {
        src: ['src/**/*.js','__tests__/**/*.test.js'],
        dest: 'dist/'
    }
};
function compile() {
    return gulp.src('src/stack.js', { sourcemaps: true })
        .pipe(sourcemaps.init())
        .pipe(webpack( {
        mode: "development",
        module: {
            rules: [
                {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
                }
            ]
        }
        }))
        .pipe(uglify())
        .pipe(concat('stack.min.js'))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(paths.scripts.dest));
}

function test(){
        return gulp.src('__tests__').pipe(jest({
            "preprocessorIgnorePatterns": [
                "<rootDir>/dist/"
                , "<rootDir>/node_modules/"
            ],
            "automock": false
        }));
}

function watch() {
    gulp.watch(paths.scripts.src, build);
}


const  build = gulp.series(test, gulp.parallel(compile));

gulp.task('test', test);
gulp.task('build',build);
gulp.task('watch', watch);
gulp.task('default', build);