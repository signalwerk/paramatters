// https://github.com/markdown-it/markdown-it/issues/46
// Override link render to open all link in a new window

function markdownitLinkHrefBlank (md, config) {
  config = config || {}

  var defaultRender = md.renderer.rules.link_open || this.defaultRender

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
    return defaultRender(tokens, idx, options, env, self)
  }
}

markdownitLinkHrefBlank.defaultRender = function (tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options)
}

module.exports = markdownitLinkHrefBlank
