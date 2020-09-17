import './style.sass'
import component from './VsTableTr'

component.install = (vue: any) => {
  vue.component('vso-tr', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
