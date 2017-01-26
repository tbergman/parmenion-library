/* eslint-disable */

const dts = require('react-to-typescript-definitions');
const fs = require('fs');
const path = require('path');

const sourcePath = process.argv[2];
const dtsSource = dts.generateFromFile(null, sourcePath, {});
const dtsSourceWithoutImport = dtsSource.replace('import * as React from \'react\';', '').trim();

if (dtsSourceWithoutImport === '') {
  process.exit();
}

const dtsPath = path.join(path.dirname(sourcePath), path.basename(sourcePath, path.extname(sourcePath)) + '.d.tsx');
fs.writeFileSync(dtsPath, dtsSource.replace(/export function/g, 'export declare function'));

console.log('Generated', sourcePath);
