const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    env: JSON.stringify(NODE_ENV),
    basePath: __dirname,
    srcDir: 'src',
    main: 'index',
    outDir: 'dist',
    publicPath: '/',
    sourcemaps: true,
    externals: {},
    globals: {},
    verbose: false,
};
