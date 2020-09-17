import './style.sass'
import component from './VsInput'

component.install = (vue: any) => {
  vue.component('vso-input', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
