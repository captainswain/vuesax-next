import './style.sass'
import component from './VsTableTh'

component.install = (vue: any) => {
  vue.component('vso-th', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
