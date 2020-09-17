import Vue, { VNode } from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import VsIconsClose from '../../../icons/close'
import { setColor } from '../../../util/index'

@Component
export default class VsNotification extends Vue {

  isVisible: boolean = false

  content: any = null

  title: string = null

  text: string = null

  color: string | null = null

  colorName: string | null = null

  border: string | null = null

  icon: string | null = null

  onClick: any = null

  buttonClose: boolean = true

  flat: boolean = true

  onDestroy: any = null

  sticky: boolean = false

  square: boolean = false

  width: string = null

  loading: boolean = false

  progressAuto: boolean = false

  progress: number = 0

  duration: number = 4000

  countProgress: number = 0

  intervalProgress: any = null

  notPadding: any = null

  clickClose: boolean = false

  classNotification: string = null

  close() {
    this.isVisible = false
  }

  handleClickClose() {
    this.isVisible = false
  }

  beforeEnter(el: any) {
    el.style.maxHeight = `0px`
    el.style.padding = `0px 20px`
  }

  enter(el: any, done: any) {
    const h = el.scrollHeight
    el.style.maxHeight = `${h + 40}px`
    if (window.innerWidth < 600) {
      el.style.padding = `15px`
    } else {
      el.style.padding = `20px`
    }
    done()
  }

  leave(el: any, done: any) {
    const parent = this.$el.parentNode
    setTimeout(() => {
      done()
      if (parent.childNodes.length == 1) {
        document.body.removeChild(parent)
      }
      parent.removeChild(this.$el)
      this.$destroy()
      if (this.onDestroy) {
        this.onDestroy()
      }
    }, 250)
  }

  @Watch('isVisible')
  handleIsVisible() {
    this.$nextTick(() => {
      setColor('color', this.color, this.$el)
      setColor('border', this.border, this.$el)
    })
  }

  get getProgress() {
    setInterval(() => {
      this.progress++
    }, 1)
    return 20
  }

  mounted() {
    if (this.progressAuto) {
      this.intervalProgress = setInterval(() => {
        this.progress++
      }, (this.duration / 100))
    }
  }

  beforeDestroy() {
    clearInterval(this.intervalProgress)
  }

  public render(h: any): VNode {
    const title = h('header', {
      staticClass: 'vso-notification__content__header'
    }, [
      h('h4', {
        domProps: {
          innerHTML: this.title
        },
      })
    ])

    const text = h('div', {
      staticClass: 'vso-notification__content__text'
    }, [
      h('p', {
        domProps: {
          innerHTML: this.text
        },
      })
    ])

    const content = h('div', {
      staticClass: 'vso-notification__content'
    }, [
      this.title && title,
      this.text && text,
      this.content && h(this.content)
    ])

    const icon = h('div', {
      staticClass: 'vso-notification__icon',
      domProps: {
        innerHTML: this.icon
      },
    })

    const closeBtn = h('button', {
      staticClass: 'vso-notification__close',
      on: {
        click: this.handleClickClose
      }
    }, [
      h(VsIconsClose, {
        props: {
          hover: 'less'
        }
      })
    ])

    const loading = h('div', {
      staticClass: 'vso-notification__loading',
    })

    const progress = h('div', {
      staticClass: 'vso-notification__progress',
      style: {
        width: `${this.progress}%`
      }
    })

    return h('transition', {
      props: {
        name: 'notification'
      },
      on: {
        beforeEnter: this.beforeEnter,
        enter: this.enter,
        leave: this.leave
      },
    }, [
      this.isVisible && h('div', {
        staticClass: 'vso-notification',
        class: [
          { 'vso-notification--color': this.color },
          { 'vso-notification--border': this.border },
          { 'vso-notification--icon': this.icon },
          { 'vso-notification--onClick': this.onClick },
          { 'vso-notification--flat': this.flat },
          { 'vso-notification--sticky': this.sticky },
          { 'vso-notification--square': this.square },
          { 'vso-notification--width-all': this.width == '100%' },
          { 'vso-notification--width-auto': this.width == 'auto' },
          { 'vso-notification--loading': this.loading },
          { 'vso-notification--notPadding': this.notPadding },
          `vso-notification--${this.colorName}`,
          this.classNotification
        ],
        on: {
          click: () => {
            if (this.onClick) {
              this.onClick()
            }
            if (this.clickClose) {
              this.close()
            }
          }
        }
      }, [
        (!this.loading && this.icon) && icon,
        !this.loading && content,
        this.buttonClose && closeBtn,
        this.loading && loading,
        progress
      ])
    ]
    )
  }
}
