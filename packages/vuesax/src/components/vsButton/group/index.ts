import './style.sass'

import component from './VsButtonGroup'
component.install = (vue: any) => {
  vue.component('vso-button-group', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
