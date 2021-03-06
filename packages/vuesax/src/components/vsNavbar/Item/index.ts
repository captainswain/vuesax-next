import './style.sass'
import component from './vsNavbarItem'

component.install = (vue: any) => {
  vue.component('vso-navbar-item', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
