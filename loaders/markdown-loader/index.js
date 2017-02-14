var frontMatter = require('front-matter')
var markdownIt = require('markdown-it')
var hljs = require('highlight.js')
var objectAssign = require('object-assign')

var highlight = function (str, lang) {
  if ((lang !== null) && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value
    } catch (_error) {
      console.error(_error)
    }
  }
  try {
    return hljs.highlightAuto(str).value
  } catch (_error) {
    console.error(_error)
  }
  return ''
}

var md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight,
})

  .use(require('markdown-it-sub'))
  .use(require('markdown-it-footnote'))
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-abbr'))
  .use(require('markdown-it-attrs'))


  .use(require('markdown-it-container'), 'classname', {
    validate: name => name.trim().length,
    render: (tokens, idx) => {
      if (tokens[idx].nesting === 1) {
        return `<div class="${tokens[idx].info.trim()}">\n`;
      } else  {
        return '</div>\n';
      }
    }
  })

  .use(require('markdown-it-anchor'), {
    level: [1,2],
    // slugify: string => string,
    permalink: false,
    // renderPermalink: (slug, opts, state, permalink) => {},
    permalinkClass: 'header-anchor',
    permalinkSymbol: '¶',
    permalinkBefore: false
  })

  .use(require('markdown-it-table-of-contents'), {
  	includeLevel: [2]
  });


  // https://github.com/markdown-it/markdown-it/issues/46
  // Override link render to open all link in a new window

  // Remember old renderer, if overriden, or proxy to default renderer
  var defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {

      // get href of link
      var hrefIndex = tokens[idx].attrIndex('href');

      // only if href exists
      if (hrefIndex !== -1) {
        // get url
        var url = tokens[idx].attrs[hrefIndex][1];

        // does the url start with http
        if( url.indexOf('http') === 0 ) {
          // If you are sure other plugins can't add `target` - drop check below
          var aIndex = tokens[idx].attrIndex('target');

          if (aIndex < 0) {
            tokens[idx].attrPush(['target', '_blank']); // add new attribute
          } else {
            tokens[idx].attrs[aIndex][1] = '_blank';    // replace value of existing attr
          }
        }
      }

    // pass token to default renderer.
    return defaultRender(tokens, idx, options, env, self);
  };


module.exports = function (content) {
  this.cacheable()
  const meta = frontMatter(content)
  const body = md.render(meta.body)
  const result = objectAssign({}, meta.attributes, {
    body,
  })
  this.value = result
  return `module.exports = ${JSON.stringify(result)}`
}
