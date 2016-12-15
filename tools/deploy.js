import fs from 'fs';
import path from 'path';
import fsextra from 'fs-extra';

const repoPath = path.join(__dirname, '..', 'build');

async function execute() {
  // 创建build目录
  fs.mkdirSync(repoPath);
  // 拷贝需要发布的文件
  fsextra.copySync(getCopyPath('app'), path.join(repoPath, 'app'));
  fsextra.copySync(getCopyPath('bin'), path.join(repoPath, 'bin'));
  fsextra.copySync(getCopyPath('public'), path.join(repoPath, 'public'));
  fsextra.copySync(getCopyPath('views'), path.join(repoPath, 'views'));
  fsextra.copySync(getCopyPath('package.json'), path.join(repoPath, 'package.json'));
  fsextra.copySync(getCopyPath('pm2.json'), path.join(repoPath, 'pm2.json'));

}

function getCopyPath(file) {
  return path.join(__dirname, '..', file);
}

execute();
