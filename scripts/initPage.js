const fs = require('fs');
const path = require("path");
// 排除检查的文件
var excludes = ['.DS_Store'];

var filehelper = {
  getFileName: function (rpath, dpath) {
    let filenames = [];
    // let fileImg = /\.(png|jpe?g|gif|webp)(\?.*)?$/;
    let fileTypes = /\.md$/; //只匹配以md结尾的文件
    const directoryPath = path.resolve(rpath, '.' + dpath);
    fs.readdirSync(directoryPath).forEach(file => {
      if (excludes.indexOf(file) < 0) {
        fullpath = path.resolve(directoryPath, file);
        var fileinfo = fs.statSync(fullpath);
        if (fileinfo.isFile()) {
          // if(file.indexOf('.md') > 0) {
          if (fileTypes.test(file) > 0) {
            if (file === 'index.md') {
              file = '';
            } else {
              file = file.replace('.md', '');
            }
            filenames.push(dpath + '/' + file);
          }
        }
      }
    });
    filenames.sort(); // 排序
    return filenames;
  }
}
module.exports = filehelper;
