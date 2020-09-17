import './style.sass'
import component from './VsNavbar'

component.install = (vue: any) => {
  vue.component('vso-navbar', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
