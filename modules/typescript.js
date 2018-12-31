module.exports = function() {
  this.nuxt.options.extensions.push('ts')

  this.extendBuild(config => {
    const tsLoader = {
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
        transpileOnly: true
      },
      exclude: [/vendor/, /\.nuxt/]
    }
    config.module.rules.push({
      test: /((client|server)\.js)|(\.tsx?)$/,
      ...tsLoader
    })
    for (let rule of config.module.rules) {
      if (rule.loader === 'vue-loader') {
        if (!rule.options.loaders) {
          rule.options.loaders = {}
        }
        rule.options.loaders.ts = tsLoader
      }
    }
    if (config.resolve.extensions.indexOf('.ts') < 0) {
      config.resolve.extensions.push('.ts')
    }
  })
}
