const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Fish Ui Ac',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: ['readme.md', 'README.md', 'license.md'],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\Matth\\Documents\\fish-ui\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Fish Ui Ac',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\Matth\\Documents\\fish-ui',
          templates:
            'C:\\Users\\Matth\\Documents\\fish-ui\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\Matth\\Documents\\fish-ui\\.docz',
          cache: 'C:\\Users\\Matth\\Documents\\fish-ui\\.docz\\.cache',
          app: 'C:\\Users\\Matth\\Documents\\fish-ui\\.docz\\app',
          appPackageJson: 'C:\\Users\\Matth\\Documents\\fish-ui\\package.json',
          appTsConfig: 'C:\\Users\\Matth\\Documents\\fish-ui\\tsconfig.json',
          gatsbyConfig:
            'C:\\Users\\Matth\\Documents\\fish-ui\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\Matth\\Documents\\fish-ui\\gatsby-browser.js',
          gatsbyNode: 'C:\\Users\\Matth\\Documents\\fish-ui\\gatsby-node.js',
          gatsbySSR: 'C:\\Users\\Matth\\Documents\\fish-ui\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\Matth\\Documents\\fish-ui\\.docz\\app\\imports.js',
          rootJs: 'C:\\Users\\Matth\\Documents\\fish-ui\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\Matth\\Documents\\fish-ui\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\Matth\\Documents\\fish-ui\\.docz\\app\\index.html',
          db: 'C:\\Users\\Matth\\Documents\\fish-ui\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
