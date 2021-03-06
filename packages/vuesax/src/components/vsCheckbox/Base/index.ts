import './style.sass'
import component from './vsCheckbox'

component.install = (vue: any) => {
  vue.component('vso-checkbox', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
