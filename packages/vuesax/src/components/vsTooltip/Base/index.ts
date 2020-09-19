import './style.sass'
import component from './vsTooltip'

component.install = (vue: any) => {
  vue.component('vso-tooltip', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
