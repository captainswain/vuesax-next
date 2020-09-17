import './style.sass'
import component from './VsRadio'

component.install = (vue: any) => {
  vue.component('vso-radio', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
