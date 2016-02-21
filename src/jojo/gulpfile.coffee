gulp = require 'gulp'
coffee = require 'gulp-coffee'
sass = require 'gulp-sass'
slim = require 'gulp-slim'
open = require 'gulp-open'
connect = require 'gulp-connect'
uglify = require 'gulp-uglify'
minifyCss = require 'gulp-minify-css'
concat = require 'gulp-concat'
runSequence = require 'run-sequence'

gulp.task 'compile-coffee', () ->
  gulp.src('src/scripts/**/*.coffee')
  .pipe coffee()
  .pipe gulp.dest('src/tmp/js')

gulp.task 'compile-sass', () ->
  gulp.src('src/styles/**/*.sass')
  .pipe sass()
  .pipe gulp.dest('src/tmp/css')

gulp.task 'compile-js', () ->
  gulp.src 'src/tmp/js/**/*.js'
  .pipe concat('application.js')
  .pipe uglify()
  .pipe gulp.dest('dist/js')

gulp.task 'compile-css', () ->
  gulp.src('src/tmp/css/**/*.css')
  .pipe concat('application.css')
  .pipe minifyCss()
  .pipe gulp.dest('dist/css')

gulp.task 'compile-slim', ->
  gulp.src('src/views/*.slim')
  .pipe slim pretty: true
  .pipe gulp.dest 'dist/'

gulp.task 'open', ->
  gulp.src(__filename)
  .pipe open {uri: 'http://localhost:8080'}

gulp.task 'connect', ->
  connect.server
    root: 'dist'
    livereload: true

gulp.task 'reload', ->
  gulp.src('dist/index.html')
  .pipe connect.reload()

gulp.task 'compile', -> runSequence(
  ['compile-coffee', 'compile-sass', 'compile-slim'],
  ['compile-js', 'compile-css']
)

gulp.task 'watch', ->
  gulp.watch [
    'src/styles/**/*.scss'
    'src/scripts/**/*.coffee'
    'src/views/**/*.slim'
  ], ['compile', 'reload']

gulp.task 'default', [
  'compile',
  'connect',
  'open'
]
