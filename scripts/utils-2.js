const path = require("path");
const fs = require('fs');

const utils = {
  handleSideBarRouter: function (routerPath) {
    return '\/' + routerPath.replace(/\\/g, '\/').replace('.md', '').replace('README', '');
  },
  generateSideBar: function (rootPath, dirPath) {
    console.log(rootPath);
    console.log(dirPath);
    let sideBarConfig = [];
    const fullDirPath = path.resolve(rootPath, dirPath);
    console.log(fullDirPath);
    fs.readdirSync(fullDirPath).forEach(file => {
      const filePath = path.resolve(fullDirPath, file);
      let fileinfo = fs.statSync(filePath);
      if (fileinfo.isFile()) {
        sideBarConfig.push(this.handleSideBarRouter(path.relative(rootPath, filePath)));
      }
    });
    console.log(sideBarConfig);
    return sideBarConfig;
  }
};

module.exports = utils;
