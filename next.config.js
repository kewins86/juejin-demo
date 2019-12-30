const withLess = require('@zeit/next-less');
const WithCss = require('@zeit/next-css');

if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {};
}

module.exports = withLess(
  WithCss({
    lessLoaderOptions: {
      modifyVars: {
        'primary-color': '#666'
      },
      javascriptEnabled: true
    }
  })
);