/** @jsx m */
const m = require('mithril')

function Button () {
  return <span
    class='dib tc pa3 lh-solid f3 fw7 white bg-green pointer br2 shadow-1'
  >
    Click Me!
  </span>
}

module.exports = {view: Button}
