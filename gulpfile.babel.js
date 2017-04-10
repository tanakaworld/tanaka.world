import gulp from 'gulp';
import autoprefixer from 'autoprefixer';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import rimraf from 'rimraf';
import notify from 'gulp-notify';
import browserSync, {reload} from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import nested from 'postcss-nested';
import vars from 'postcss-simple-vars';
import extend from 'postcss-simple-extend';
import cssnano from 'cssnano';
import htmlReplace from 'gulp-html-replace';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import runSequence from 'run-sequence';
import ghPages from 'gulp-gh-pages';
import sass from 'gulp-sass';
import es from 'event-stream';
import concat from 'gulp-concat';

const paths = {
    bundle: 'app.js',
    entry: 'src/Index.js',
    srcSass: 'src/**/*.sass',
    srcCss: ['node_modules/normalize.css/normalize.css'],
    srcImg: 'src/images/**',
    srcLint: ['src/**/*.js', 'test/**/*.js'],
    dist: 'dist',
    distJs: 'dist/js',
    distCss: 'dist/styles',
    distImg: 'dist/images',
    distDeploy: './dist/**/*'
};

const customOpts = {
    entries: [paths.entry],
    debug: true,
    cache: {},
    packageCache: {}
};

const opts = Object.assign({}, watchify.args, customOpts);

gulp.task('clean', cb => {
    rimraf('dist', cb);
});

gulp.task('browserSync', () => {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('watchify', () => {
    const bundler = watchify(browserify(opts));

    function rebundle() {
        return bundler.bundle()
            .on('error', notify.onError())
            .pipe(source(paths.bundle))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(paths.distJs))
            .pipe(reload({stream: true}));
    }

    bundler.transform(babelify)
        .on('update', rebundle);
    return rebundle();
});

gulp.task('browserify', () => {
    browserify(paths.entry, {debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source(paths.bundle))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.distJs));
});

gulp.task('styles', () => {
    es.concat(
        gulp.src(paths.srcCss),
        gulp.src(paths.srcSass).pipe(sass.sync().on('error', sass.logError))
    ).pipe(rename({extname: '.css'}))
        .pipe(sourcemaps.init())
        .pipe(postcss([vars, extend, nested, autoprefixer, cssnano]))
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.distCss))
        .pipe(reload({stream: true}));
});

gulp.task('htmlReplace', () => {
    gulp.src('index.html')
        .pipe(htmlReplace({css: 'styles/main.css', js: 'js/app.js'}))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('images', () => {
    gulp.src(paths.srcImg)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(paths.distImg));
});

gulp.task('watchTask', () => {
    gulp.watch(paths.srcSass, ['styles']);
});

gulp.task('deploy', () => {
    gulp.src(paths.distDeploy)
        .pipe(ghPages());
});

gulp.task('watch', cb => {
    runSequence('clean', ['browserSync', 'watchTask', 'watchify', 'styles', 'images'], cb);
});

gulp.task('build', cb => {
    process.env.NODE_ENV = 'production';
    runSequence('clean', ['browserify', 'styles', 'htmlReplace', 'images'], cb);
});

gulp.task('default', ['watch']);
