import './style.sass'

import vsCol from './VsCol'
import vsRow from './VsRow'
vsCol.install = (vue: any) => {
  vue.component('vso-col', vsCol)
}

vsRow.install = (vue: any) => {
  vue.component('vso-row', vsRow)
}

if (typeof window !== 'undefined' && window.Vue) {
  vsCol.install(window.Vue)
  vsRow.install(window.Vue)
}

export {
  vsCol,
  vsRow
}
