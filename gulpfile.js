var gulp = require("gulp");
var sass = require('gulp-sass');

gulp.task('scss', function () {
   	 return gulp.src('./source/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});


/*
  Colocar tarefas em background
*/
gulp.task('watch', function () {
    gulp.watch('./source/scss/*.scss', ['scss']);
});


/*
  Chamada para todas as tarefas
*/

gulp.task('iniciarTarefas', ['scss', 'watch']);