import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsInput extends VsComponent {
  isVisiblePassword: boolean = false

  @Prop({ default: '' }) value!: any
  @Prop({ default: '' }) labelPlaceholder!: any
  @Prop({ default: '' }) label!: any
  @Prop({ type: Boolean, default: false }) block!: boolean
  @Prop({ type: Boolean, default: false }) iconAfter!: boolean
  @Prop({ type: Boolean, default: false }) visiblePassword!: boolean
  @Prop({ type: Boolean, default: false }) loading!: boolean
  @Prop({ type: String, default: null }) color!: string
  @Prop({ type: String, default: null }) state!: string
  @Prop({ type: Number, default: 0 }) progress!: number
  @Prop({ type: Boolean, default: false }) border!: boolean
  @Prop({ type: Boolean, default: false }) shadow!: boolean
  @Prop({ type: Boolean, default: false }) transparent!: boolean
  @Prop({ type: Boolean, default: false }) textWhite!: boolean
  @Prop({ type: Boolean, default: false }) square!: boolean

  // tslint:disable-next-line:variable-name
  _uid: any

  get getId() {
    return `vso-input--${this.$attrs.id || this._uid}`
  }

  get hasColor() {
    return (this.color || this.primary || this.danger || this.success || this.dark || this.warn)
  }

  beforeEnter(el: any) {
    el.style.height = 0
  }

  enter(el: any, done: any) {
    let h = el.scrollHeight
    el.style.height = h - 1 + 'px'
    done()
  }

  leave(el: any, done: any) {
    el.style.minHeight = '0px'
    el.style.height = '0px'
  }

  getMessage(type: string) {
    return this.$createElement('transition', {
      on: {
        beforeEnter: this.beforeEnter,
        enter: this.enter,
        leave: this.leave
      },
    }, [
      !!this.$slots[`message-${type}`] && this.$createElement('div', {
        staticClass: 'vso-input__message',
        class: [`vso-input__message--${type}`]
      }, [
        this.$slots[`message-${type}`]
      ])
    ])
  }

  public render(h: any): VNode {

    const input = h('input', {
      staticClass: 'vso-input',
      domProps: {
        value: this.value
      },
      class: [
        { ['vso-input--has-icon']: !!this.$slots.icon },
        { ['vso-input--has-icon--after']: !!this.iconAfter }
      ],
      on: {
        ...this.$listeners,
        input: (evt: any) => {
          this.$emit('input', evt.target.value)
        }
      },
      attrs: {
        ...this.$attrs,
        placeholder: '',
        id: this.getId,
        type: this.visiblePassword ? 'text' : this.$attrs.type
      }
    })

    const label = h('label', {
      attrs: {
        for: this.getId
      },
      class: [
        'vso-input__label',
        { 'vso-input__label--placeholder': this.labelPlaceholder },
        { 'vso-input__label--hidden': this.value !== '' || this.$attrs.type == 'date' || this.$attrs.type == 'time' },
        { 'vso-input__label--label': this.label }
      ],
    }, [
      this.label || this.$attrs.placeholder || this.labelPlaceholder
    ])

    const placeholder = h('label', {
      attrs: {
        for: this.getId
      },
      class: [
        'vso-input__label',
        { 'vso-input__label--hidden': this.value !== '' },
      ],
    }, [
      this.$attrs.placeholder
    ])

    const icon = h('span', {
      staticClass: 'vso-input__icon',
      class: [
        { 'vso-input__icon--after': this.iconAfter },
        { 'vso-input__icon--click': !!this.$listeners['click-icon'] }
      ],
      on: {
        click: (evt: any) => {
          this.$emit('click-icon', evt.target.value)
        }
      },
    }, [
      this.$slots.icon
    ])

    const messageSuccess = this.getMessage('success')

    const messageDanger = this.getMessage('danger')

    const messageWarn = this.getMessage('warn')

    const messagePrimary = this.getMessage('primary')

    const progressBar = h('div', {
      staticClass: 'vso-input__progress',
      class: [
        { 'vso-input__progress--danger': this.progress < 33 },
        { 'vso-input__progress--warn': this.progress < 66 && this.progress > 33 },
        { 'vso-input__progress--success': this.progress > 66 }
      ]
    }, [
      h('div', {
        staticClass: 'vso-input__progress__bar',
        style: {
          width: `${this.progress}%`
        },
      })
    ])

    const loading = h('div', {
      staticClass: 'vso-input__loading',
    })

    const effects = h('div', {
      staticClass: 'vso-input__affects',
    }, [
      h('div', {
        staticClass: 'vso-input__affects__1',
      }),
      h('div', {
        staticClass: 'vso-input__affects__2',
      }),
      h('div', {
        staticClass: 'vso-input__affects__3',
      }),
      h('div', {
        staticClass: 'vso-input__affects__4',
      })
    ])

    const inputContent = h('div', {
      staticClass: 'vso-input-content',
      class: [
        { [`vso-input-content--has-color`]: this.hasColor },
        { [`vso-input-content--has-label`]: this.label || this.labelPlaceholder }
      ]
    }, [
      input,
      this.label && placeholder,
      label,
      this.$slots.icon && icon,
      this.loading && loading,
      effects
    ])

    return h('div', {
      staticClass: 'vso-input-parent',
      class: [
        `vso-input-parent--state-${this.state}`,
        { 'vso-input-parent--border': !!this.border },
        { 'vso-input-parent--shadow': !!this.shadow },
        { [`vso-input-content--has-label`]: this.label || this.labelPlaceholder },
        { block: this.block },
        { transparent: this.transparent },
        { textWhite: this.textWhite },
        { square: this.square }
      ]
    }, [
      inputContent,
      this.progress > 0 && progressBar,
      messageSuccess,
      messageDanger,
      messageWarn,
      messagePrimary
    ])
  }
}
