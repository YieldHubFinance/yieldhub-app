const singleAssetRequire = require.context('images/single-assets', false, /\.(svg|webp|png)$/);
const singleAssets = Object.fromEntries(
  singleAssetRequire.keys().map(path => [path.substring(2, path.lastIndexOf('.')), path])
);
const singleAssetCache = {};

export const getSingleAssetSrc = symbol => {
  if (symbol in singleAssetCache) {
    return singleAssetCache[symbol].default;
  }

  if (symbol in singleAssets) {
    return (singleAssetCache[symbol] = singleAssetRequire(singleAssets[symbol])).default;
  }

  throw new Error(`Image required for '${symbol}' token in 'images/single-assets/'`);
};
