import './style.sass'
import component from './vsTable'

component.install = (vue: any) => {
  vue.component('vso-table', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
