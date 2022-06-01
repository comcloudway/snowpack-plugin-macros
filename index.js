const pkg = require('./package.json');

const supported_etxs = ['.js', '.css', '.jsx'];

module.exports = function (snowpackConfig, pluginOptions) {
  return {
    name: pkg.name,
    transform({ id, contents, fileExt }) {
      if (supported_etxs.includes(fileExt)) {
        Object.entries(pluginOptions || {})
              .forEach(([regexp, transform])=>{
                contents = contents.replace(new RegExp(regexp, 'g'), (...results)=>transform({
                  results,
                  contents,
                  ext: fileExt,
                  path: id
                })||results[0]);
              })
      }

      return contents;
    },
  };
};
