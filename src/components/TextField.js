/** @jsx m */
const m = require('mithril')

function TextField (vnode) {
  const {
    value = '',
    label = '',
    oninput = Function.prototype,
    onchange = Function.prototype,
    placeholder = '',
    inputProps = {},
    inputClass = '',
    labelClass = ''
  } = vnode.attrs

  return <div
    class='dib'
  >
    {label &&
      <label
        class={'fw3 green ' + labelClass}
      >
        {label}
      </label>
    }
    {label &&
      <br />
    }
    <input
      class={'input-reset outline-0 br-0 bl-0 bt-0 bb b--green black-90 pv2 black-90 f3 ' + inputClass}
      value={value}
      placeholder={placeholder}
      oninput={oninput}
      onchange={onchange}
      {...inputProps}
    />
  </div>
}

module.exports = {view: TextField}
