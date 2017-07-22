/** @jsx m */
const m = require('mithril')

function Button (vnode) {
  const {
    onclick,
    buttonClass = '',
    buttonType = 'default'
  } = vnode.attrs

  const buttonStyles = {
    default: ' white bg-gray ',
    primary: ' white bg-green ',
    secondary: ' white bg-pink '
  }

  return <span
    class={
      'dib tc pa2 lh-solid f3 fw3 pointer br2 shadow-1 ttu tracked ma1 ' +
      buttonStyles[buttonType] +
      buttonClass
    }
    onclick={onclick}
  >
    {vnode.children}
  </span>
}

module.exports = {view: Button}
