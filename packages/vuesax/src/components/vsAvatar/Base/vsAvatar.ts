import { VNode } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'
import { setColor } from '../../../util/index'

@Component
export default class VsAvatar extends VsComponent {
  @Prop({ default: null }) badgePosition: string

  @Prop({ default: false, type: Boolean }) pointer: boolean

  @Prop({ default: false, type: Boolean }) circle: boolean

  @Prop({ default: false, type: Boolean }) square: boolean

  @Prop({ default: false, type: Boolean }) history: boolean

  @Prop({ default: false, type: Boolean }) loading: boolean

  @Prop({ default: false, type: Boolean }) historyGradient: boolean

  @Prop({ default: false, type: Boolean }) writing: boolean

  @Prop({ default: false, type: Boolean }) badge: boolean

  @Prop({ default: '', type: String }) badgeColor: string

  @Prop({ default: '', type: String }) size: string

  textLength: number = 0

  countPlus: number = 0

  index: number = null

  getParent() {
    return (this.$parent as any).vsAvatarGroup && (this.$parent as any)
  }

  get getText() {
    const [nodeText] = this.$slots.text
    const text = nodeText.text.trim()
    let getLetters = [text]
    if (text.length > 5) {
      getLetters = text.split(/\s/g).map((item) => {
        return item[0]
      })
      this.textLength = getLetters.length
    } else {
      this.textLength = getLetters[0].length
    }

    return getLetters
  }

  get isHidden() {
    return this.getParent() && this.getParent().max && this.index > Number(this.getParent().max) - 1
  }

  get isLatest() {
    return this.getParent() && this.index == Number(this.getParent().max) - 1
  }

  @Watch('$slots.text')
  handleSlotText() {
    console.log('cambio el slot')
  }

  @Watch('badgeColor')
  handleBadgeColor() {
    setColor('badge', this.badgeColor, this.$el)
    this.$el.classList.add('vso-change-color-badge')
  }

  mounted() {
    setColor('badge', this.badgeColor, this.$el)
    this.$el.classList.add('vso-change-color-badge')
    if (this.getParent()) {
      this.index = this.getParent().avatars.length
      this.getParent().avatars.push(this)
    }
  }

  public render(h: any): VNode {
    const writing = h('div', {
      staticClass: 'vso-avatar__points'
    }, [
      h('div', {
        staticClass: 'vso-avatar__points__point'
      }),
      h('div', {
        staticClass: 'vso-avatar__points__point'
      }),
      h('div', {
        staticClass: 'vso-avatar__points__point'
      })
    ])

    const badge = h('div', {
      staticClass: 'vso-avatar__badge',
      class: [{
        isSlot: this.$slots.badge,
        writing: this.writing
      }, this.badgePosition]
    }, [
      this.writing ? writing : this.$slots.badge
    ])

    const avatar = h('div', {
      staticClass: 'vso-avatar',
      class: {
        [`vso-avatar--letter--${this.textLength}`]: this.textLength > 2
      }
    }, [
      this.$slots.text && this.getText,
      this.$slots.default
    ])

    const loading = h('div', {
      staticClass: 'vso-avatar__loading',
    }, [
      h('div', {
        staticClass: 'vso-avatar__loading__animate'
      })
    ])

    const latest = h('div', {
      staticClass: 'vso-avatar__latest',
      directives: [
        {
          name: 'show',
          value: this.getParent() && this.getParent().avatars.length - this.index - 1 != 0
        }
      ]
    }, [
      `+${this.getParent() && this.getParent().avatars.length - this.index - 1}`
    ])

    const icons = h('div', {
      staticClass: 'vso-avatar__icons',
    }, [
      this.$slots.icons
    ])

    return h('div', {
      staticClass: 'vso-avatar-content',
      attrs: {
        ...this.$attrs
      },
      on: {
        ...this.$listeners
      },
      style: {
        width: `${this.size}px`,
        height: `${this.size}px`,
        cursor: this.pointer && 'pointer'
      },
      class: {
        'history': this.history,
        'history--gradient': this.historyGradient,
        'vso-avatar-content--circle': this.circle,
        'vso-avatar-content--square': this.square,
        'vso-avatar-content--hidden': this.isHidden,
        'vso-avatar-content--latest': this.isLatest,
        'vso-avatar-content--hasIcons': this.$slots.icons,
        [`vso-avatar-content--size--${this.size}`]: this.size,
      }
    }, [
      this.loading && loading,
      avatar,
      this.$slots.badge ? badge : this.badge && badge,
      this.isLatest && latest,
      this.$slots.icons && icons
    ])
  }
}
