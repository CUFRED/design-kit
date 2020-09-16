var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var sherpa = require('style-sherpa');
var fs = require('fs');
var path = require('path');
const browsersync = require('browser-sync').create();

var sassPaths = [
  'node_modules/normalize-scss/sass',
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];
var adkTemplatesDir = path.resolve(__dirname, 'templates');
var adkTemplatesData = fs.readdirSync(adkTemplatesDir)
  .filter(adkTemplateFile => adkTemplateFile.indexOf('index') < 0) // exclude the `.hbs` template
  .map(adkTemplateFile => {
    return {
      title: adkTemplateFile.split('.')[0], // remove `.html` extension
      url: adkTemplateFile
    };
  });

////////////////////////////////////////////////////////////////////////////////
// Tasks
////////////////////////////////////////////////////////////////////////////////
// Create adk template list
function createAdkTemplatesList() {
  return gulp.src('templates/index.hbs')
    .pipe($.compileHandlebars({ adkTemplates: adkTemplatesData }))
    .pipe($.rename('index.html'))
    .pipe(gulp.dest('templates'));
}

// Compile Sass
function sass() {
  return gulp.src('scss/adk.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
    .on('error', $.sass.logError))
    // Wrap all Design Kit CSS in .adk class so we can scope it
    .pipe($.cssWrap({
      selector: '.adk',
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    // Minify the output
    .pipe($.cleanCss())
    .pipe(gulp.dest('css'));
}

function openwaterSass() {
  return gulp.src('scss/ow.scss')
    .pipe($.sass().on('error', $.sass.logError))
    // Wrap all CSS in .ow-adk class to be scopable
    .pipe($.cssWrap({
      selector: '.adk-ow',
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe($.cleanCss())
    .pipe(gulp.dest('css'));
}

// Generate documentation
function docs(done) {
  return sherpa('docs.md', {
    output: '/docs/index.html',
    template: 'docs.hbs'
  }, () => done());
}

// Server
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 8080,
    open: false,
    livereload: false,
    middleware: [cors],
  });
  done();

  function cors (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  }
}


// Default task
gulp.task('default', gulp.series(sass, openwaterSass, docs, createAdkTemplatesList, browserSync, function(done) {
  gulp.watch(['scss/**/*.scss'], gulp.series(sass));
  gulp.watch(['scss/ow.scss'], gulp.series(openwaterSass));
  gulp.watch(['docs/**/*', 'docs.md', 'docs.hbs'], gulp.series(docs));
  done();
}));

// SASS task
gulp.task('sass', sass);

// Openwater (awards and competitions) SASS task
gulp.task('openwaterSass', openwaterSass);

// Docs task
gulp.task('docs', docs);

// Create Adk Templates List task
gulp.task('createAdkTemplatesList', createAdkTemplatesList);
