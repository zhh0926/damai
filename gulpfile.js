
// 1. 导入 gulp 模块
let gulp = require('gulp')

// 2. 导入 gulp-cssmin 模块
let cssmin = require('gulp-cssmin')

// 3. 导入 gulp-autoprefixer 模块
let autoprefixer = require('gulp-autoprefixer')

// 4. 导入 gulp-sass 模块
let sass = require('gulp-sass')

// 5. 导入 gulp-uglify 模块
let uglify = require('gulp-uglify')

// 6. 导入 gulp-babel 模块
let babel = require('gulp-babel')

// 7. 导入 gulp-htmlmin 模块
let htmlmin = require('gulp-htmlmin')

// // 8. 导入 gulp-file-include 模块
// let fileInclude = require('gulp-file-include')

// 10. 导入 del 模块
let del = require('del')

// 11. 导入 gulp-webserver 模块
let webserver = require('gulp-webserver')


// 2. 创建一个打包 sass 的任务
gulp.task('sass', function () {
  return gulp
    .src('./src/sass/*.scss') // 2-1. 找到 sass 文件
    .pipe(sass()) // 2-2. 把 sass 语法转换成 css 语法
    .pipe(autoprefixer()) // 2-3. 自动添加前缀
    .pipe(cssmin()) // 2-4. 压缩 css 文件
    .pipe(gulp.dest('./dist/css')) // 2-5. 放到指定的目录
})

// 3. 创建一个打包 js 的任务
gulp.task('js', function () {
  return gulp
    .src('./src/js/*.js') // 3-1. 找到 js 文件
    .pipe(babel({ presets: ['@babel/env'] })) // 3-2. es6 转换成 es5
    .pipe(uglify()) // 3-3. 压缩 js 文件
    .pipe(gulp.dest('./dist/js')) // 3-4. 放到指定目录
})

// 4. 创建一个打包 html 的任务
gulp.task('html', function () {
  return gulp
    .src('./src/pages/*.html') // 4-1. 找到 html 文件
    // .pipe(fileInclude({
    //   prefix: '@-@', // 自定义一个标识符
    //   basepath: './src/components'
    // })) // 4-2. 导入 html 片段
    .pipe(htmlmin({
      removeAttributeQuotes: true, // 移出属性上面的双引号
      removeEmptyAttributes: true, // 移出空属性
      removeComments: true, // 移出注释
      removeScriptTypeAttributes: true, // 移出 script 标签上面的 type 属性
      removeStyleLinkTypeAttributes: true, // 移出 style 标签和 link 标签的 type 属性
      collapseBooleanAttributes: true, // 把布尔值的属性直接写成简写形式
      minifyCSS: true, // 把 html 页面里面的 style 标签给压缩了
      minifyJS: true, // 把 html 页面里面的 script 标签压缩了
      collapseWhitespace: true, // 取除空格和换行
    })) // 4-3. 压缩 html 文件
    .pipe(gulp.dest('./dist/pages')) // 4-4. 放到指定目录
})



// 8. 删除 dist 文件夹的任务
//   保证我每次出来的 dist 文件夹都是按照最新的 src 目录生成
//   不会有多余的东西
gulp.task('del', function () {
  // 这个任务做的就是删除 dist 文件夹的工作
  return del('./dist')
})

// 9. 打包完毕以后，自动给我打开浏览器
gulp.task('webserver', function () {
  return gulp
    .src('./dist') // 9-1. 找到 dist 目录
    .pipe(webserver({
      port: 8080, // 端口号
      host: 'localhost', // 域名
      open: './pages/index.html', // 你要默认打开那个文件（从 dist 下面开始找目录）
      livereload: true, // 自动刷新浏览器（dist 目录内容发生改变的时候会自动刷新）
    })) // 9-2. 打开浏览器
})
/*
  域名位置，可以自定义
    + www.guoxiang.com
    + 你想打开自定义域名
    + 需要再电脑上做一个配置
    + C:windows/system32/drivers/etc/hosts 文件
    + 再最后加上一行
      + 127.0.0.1  你自定义的域名
*/

// 10. 创建一个监控任务
//   当你 src 目录下的某些内容改变的时候
//   自动重新打包生成 dist 里面对应的文件
gulp.task('watch', function () {
  // 监控 css 目录下的所有 css 文件
  // 当这个目录下的内容改变的时候，自动执行一下 css 任务
  gulp.watch('./src/sass/*.scss', gulp.series('sass'))
  gulp.watch('./src/js/*.js', gulp.series('js'))
  gulp.watch('./src/pages/*.html', gulp.series('html'))
  // gulp.watch('./src/components/*.html', gulp.series('html'))
})

// 0. 创建一个默认任务
gulp.task('default', gulp.series(
  'del',
  gulp.parallel( 'sass', 'js', 'html'),
  'webserver',
  'watch'
))
