const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsp = ts.createProject('tsconfig.json', {
    rootDir: 'src',
    outDir: 'dist',
});

const sourcePath = ['./src/**/*.ts'];
const distPath = './dist';

gulp.task('build-ts', () => {
    return gulp.src(sourcePath)
        .pipe(tsp())
        .pipe(gulp.dest(distPath));
});

gulp.task('watch-ts', ['build-ts'], function () {
    gulp.watch(sourcePath, ['build-ts']);
});

gulp.task('default', ['watch-ts']);