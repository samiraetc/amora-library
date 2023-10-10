const {
  readdirSync,
  existsSync,
  mkdirSync,
  copyFileSync,
} = require('fs');
const { resolve, join } = require('path');
const { version } = require('./lerna.json');

const modules = readdirSync(resolve('./packages'));
const baseAssetsFolder = resolve('./assets');
const versionedAssetsFolder = resolve(baseAssetsFolder, version);

if (!existsSync(versionedAssetsFolder)) {
  mkdirSync(versionedAssetsFolder, { recursive: true });
}

const copyIfDirExists = (srcDir, destDir, moduleName) => {
  if (existsSync(srcDir)) {
    const destFolder = join(destDir, moduleName);
    if (!existsSync(destFolder)) {
      mkdirSync(destFolder);
    }
    readdirSync(srcDir).forEach((file) => {
      copyFileSync(join(srcDir, file), join(destFolder, file));
    });
  }
};

modules.forEach((module) => {
  // Assets generated which are versioned
  const builtAssetsFolder = resolve(join('./packages', module, 'build'));
  copyIfDirExists(builtAssetsFolder, versionedAssetsFolder, module);

  // Static assets that will overwrite pre-existing ones
  const constAssetsFolder = resolve(join('./packages', module, 'assets'));
  copyIfDirExists(constAssetsFolder, baseAssetsFolder, module);
});
