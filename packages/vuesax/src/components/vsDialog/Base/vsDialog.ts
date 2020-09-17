import { VNode } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import VsIconsClose from '../../../icons/close'
import VsComponent from '../../../mixins/component'
import { insertBody } from '../../../util/index'

@Component
export default class VsDialog extends VsComponent {
  rebound: boolean = false

  @Prop({ default: false, type: Boolean }) value: boolean

  @Prop({ default: false, type: Boolean }) loading: boolean

  @Prop({ default: false, type: Boolean }) fullScreen: boolean

  @Prop({ default: false, type: Boolean }) notClose: boolean

  @Prop({ default: false, type: Boolean }) preventClose: boolean

  @Prop({ default: false, type: Boolean }) notPadding: boolean

  @Prop({ default: false, type: Boolean }) overflowHidden: boolean

  @Prop({ default: false, type: Boolean }) blur: boolean

  @Prop({ default: false, type: Boolean }) square: boolean

  @Prop({ default: false, type: Boolean }) autoWidth: boolean

  @Prop({ default: false, type: Boolean }) scroll: boolean

  @Prop({ default: false, type: Boolean }) notCenter: boolean

  @Prop({ default: null, type: String }) width: string

  @Prop({ default: false, type: Boolean }) routerClose: boolean

  esc(evt: any) {
    if (evt.which == 27 && !this.preventClose) {
      this.$emit('input', false)
    }
  }

  addEsc() {
    window.addEventListener('keydown', this.esc)
  }

  insertDialog() {
    this.addEsc()
    this.$nextTick(() => {
      const dialog = this.$refs['dialog-content'] as HTMLElement
      insertBody(dialog, document.querySelector('#app'))
    })
  }

  @Watch('value')
  handleWatchValue(val: boolean) {
    if (val) {
      this.insertDialog()
      if (this.overflowHidden) {
        document.body.style.overflow = 'hidden'
      }
    } else {
      if (this.overflowHidden) {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', this.esc)
      }
    }
  }

  beforeDestroy() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }

  public render(h: any): VNode {
    const header = h('header', {
      staticClass: 'vso-dialog__header'
    }, [
      this.$slots.header
    ])

    const content = h('div', {
      staticClass: 'vso-dialog__content',
      class: {
        notFooter: !this.$slots.footer
      }
    }, [
      this.$slots.default
    ])

    const footer = h('footer', {
      staticClass: 'vso-dialog__footer'
    }, [
      this.$slots.footer
    ])

    const close = h('button', {
      staticClass: 'vso-dialog__close',
      on: {
        click: (evt: any) => {
          this.$emit('input', !this.value)
        }
      }
    }, [
      h(VsIconsClose, {
        props: {
          hover: 'x'
        }
      })
    ])

    const loading = h('div', {
      staticClass: 'vso-dialog__loading',
    }, [
      h('div', {
        staticClass: 'vso-dialog__loading__load',
      })
    ])

    const dialog = h('div', {
      staticClass: 'vso-dialog',
      style: {
        width: this.width
      },
      class: {
        'vso-dialog--fullScreen': this.fullScreen,
        'vso-dialog--rebound': this.rebound,
        'vso-dialog--notPadding': this.notPadding,
        'vso-dialog--square': this.square,
        'vso-dialog--autoWidth': this.autoWidth,
        'vso-dialog--scroll': this.scroll,
        'vso-dialog--loading': this.loading,
        'vso-dialog--notCenter': this.notCenter,
      }
    }, [
      this.loading && loading,
      !this.notClose && close,
      this.$slots.header && header,
      content,
      this.$slots.footer && footer
    ])

    const dialogContent = h('div', {
      staticClass: 'vso-dialog-content',
      ref: 'dialog-content',
      class: {
        blur: this.blur,
        fullScreen: this.fullScreen,
      },
      on: {
        click: (evt: any) => {
          if (!evt.target.closest('.vso-dialog') && !this.preventClose) {
            this.$emit('input', !this.value)
          }

          if (this.preventClose && !evt.target.closest('.vso-dialog')) {
            this.rebound = true
            setTimeout(() => {
              this.rebound = false
            }, 300);
          }
        }
      }
    }, [
      dialog
    ])

    return h('transition', {
      props: {
        name: 'vso-dialog'
      },
    }, [this.value && dialogContent])
  }
}
