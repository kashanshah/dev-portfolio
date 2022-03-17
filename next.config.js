const isProd = process.env.NODE_ENV === 'production';
const isLive = process.env.NODE_LIVE === 'live';
const webpack = require('webpack');
// Use the hidden-source-map option when you don't want the source maps to be
// publicly available on the servers, only to the error reporting

let withBundleAnalyzer;

if (!isLive || !isProd) {
  withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
}

let opts = {
  compress: false,
  generateEtags: false,
  useFileSystemPublicRoutes: false,
  poweredByHeader: false,
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../../public/.analyze/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../public/.analyze/sdk.html',
    },
  },
  // enable source maps on production for getting descriptive errors on logging tools (sentry eg.)
  productionBrowserSourceMaps: true,
};

opts.onDemandEntries = {
  // period (in ms) where the server will keep pages in the buffer
  maxInactiveAge: 25 * 1000 * 10000000,
  // number of pages that should be kept simultaneously without being disposed
  pagesBufferLength: 10000,
};

opts.serverRuntimeConfig = {
  // Will only be available on the server side
  mySecret: 'secret',
};

opts.publicRuntimeConfig = {
  // Will be available on both server and sdk
  baseAppUrl: process.env.BASE_APP_URL || '',
  nodeEnv: process.env.NODE_ENV,
  apiEnv: process.env.API_ENV,
  buildNr: process.env.BUILD_NR,
  buildDate: process.env.BUILD_DATE,
  buildBranch: process.env.BUILD_BRANCH,
  buildCommit: process.env.BUILD_COMMIT,
  sentryDsn: process.env.SENTRY_DSN,
  sentryVersion: process.env.SENTRY_VERSION,
  cdnUrl: process.env.ASSET_PREFIX || '',
  imageCdnUrl: process.env.ASSET_PREFIX_IMG || '',
  gaId: process.env.GA_ID,
  gtmId: process.env.GTM_ID,
  gtmEnv: process.env.GTM_ENV,
  gtmAuth: process.env.GTM_AUTH,
  newGtmId: process.env.NEW_GTM_ID,
  googleOptimizeId: process.env.GOOGLE_OPTIMIZE_ID,
  kochavaId: process.env.KOCHAVA_ID,
  clevertapId: process.env.CLEVERTAP_ID,
  segmentId: process.env.SEGMENT_ID,
  isTestingFont: process.env.TESTING_FONT,
};

// You may only need to add assetPrefix in the production.
opts.assetPrefix = process.env.ASSET_PREFIX || '';

opts.inlineImageLimit = 128;

opts.webpack = (webpackConfig, { dev }) => {
  webpackConfig.externals = webpackConfig.externals || {};
  webpackConfig.externals.moment = 'moment';

  webpackConfig.plugins.push(new webpack.IgnorePlugin({ resourceRegExp: /\/__tests__\// }));

  // disable sourcemaps of webpack for prod and live
  if (isProd || isLive) {
    webpackConfig.devtool = false;
  }

  if (dev) {
    // disable sourcemaps of babel-loader
    for (const r of webpackConfig.module.rules) {
      if (r.loader === 'babel-loader') {
        r.options.sourceMaps = false;
      }
    }
  }

  return webpackConfig;
};

opts.webpackDevMiddleware = (config) => {
  config.watchOptions = {
    poll: 800,
    aggregateTimeout: 300,
  };
  return config;
};

// HOC
let exportsObj = opts;

if (!isLive || !isProd) {
  exportsObj = withBundleAnalyzer(exportsObj);
}

module.exports = exportsObj;
