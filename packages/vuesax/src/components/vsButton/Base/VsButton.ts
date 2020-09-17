import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'
import ripple, { rippleCut, rippleReverse } from '../../../util/ripple/index'

@Component
export default class VsButton extends VsComponent {
  [x: string]: any
  public Class: string = ''

  public prototype: any

  @Prop({ type: String, default: '' }) public ripple!: string

  @Prop({ type: Boolean, default: false }) public activeDisabled!: boolean
  // type Button Style
  @Prop({ type: Boolean, default: false }) public flat!: boolean

  @Prop({ type: Boolean, default: false }) public border!: boolean

  @Prop({ type: Boolean, default: false }) public gradient!: boolean

  @Prop({ type: Boolean, default: false }) public relief!: boolean

  @Prop({ type: Boolean, default: false }) public transparent!: boolean

  @Prop({ type: Boolean, default: false }) public shadow!: boolean

  @Prop({ type: Boolean, default: false }) public floating!: boolean

  @Prop({ type: Boolean, default: false }) public icon!: boolean

  @Prop({ type: Boolean, default: false }) public circle!: boolean

  @Prop({ type: Boolean, default: false }) public square!: boolean

  @Prop({ type: String, default: null }) public size!: string

  @Prop({ type: Boolean, default: false }) public loading!: boolean

  @Prop({ type: Boolean, default: false }) public upload!: boolean

  @Prop({ type: Boolean, default: false }) public block!: boolean

  @Prop({ type: String, default: '' }) public animationType!: string

  @Prop({ type: Boolean, default: false }) public animateInactive!: boolean

  @Prop({ type: String, default: null }) public to!: string | null

  @Prop({ type: String, default: null }) public href!: string | null

  @Prop({ type: Boolean, default: false }) public blank!: boolean

  public render(h: any): VNode {

    const defaultSlot = h('div', {
      staticClass: 'vso-button__content'
    }, this.$slots.default)

    const animateSlot = h('div', {
      staticClass: 'vso-button__animate',
      class: [
        `vso-button__animate--${this.animationType}`
      ]
    }, this.$slots.animate)

    const loadingElement = h('div', {
      staticClass: 'vso-button__loading'
    })

    const btn = h('button', {
      staticClass: 'vso-button',
      class: [
        // `vso-button--${this.color.replace('#', '')}`,
        `vso-button--${this.componentColor}`,
        `vso-button--size-${this.size}`,
        { [`vso-button--fff`]: this.color === '#fff' },
        { [`vso-button--active`]: !!this.active },
        { [`vso-button--active-disabled`]: !!this.activeDisabled },
        { [`vso-button--icon`]: !!this.icon },
        { [`vso-button--circle`]: !!this.circle },
        { [`vso-button--square`]: !!this.square },
        { [`vso-button--loading`]: !!this.loading },
        { [`vso-button--upload`]: !!this.upload },
        { [`vso-button--block`]: !!this.block },
        { [`vso-button--animate`]: !!this.$slots.animate },
        { [`vso-button--animate-${this.animationType}`]: !!this.animationType },
        { [`vso-button--animate-inactive`]: !!this.animateInactive },

        {
          [`vso-button--default`]:
          !this.flat &&
          !this.border &&
          !this.gradient &&
          !this.relief &&
          !this.transparent &&
          !this.shadow &&
          !this.floating
        },
        { [`vso-button--flat`]: !!this.flat },
        { [`vso-button--border`]: !!this.border },
        { [`vso-button--gradient`]: !!this.gradient },
        { [`vso-button--relief`]: !!this.relief },
        { [`vso-button--transparent`]: !!this.transparent },
        { [`vso-button--shadow`]: !!this.shadow },
        { [`vso-button--floating`]: !!this.floating },
      ],
      attrs: {
        ...this.$attrs
      },
      on: {
        ...this.$listeners,
        mousedown: (evt: EventTarget) => {
          // ripple effect
          if (this.ripple === 'reverse') {
            rippleReverse(evt)
          } else if (this.ripple === 'cut') {
            rippleCut(evt)
          } else {
            if (this.flat) {
              ripple(
                evt,
                (this.componentColor || this.color || 'primary') &&
                  !this.active &&
                  document.activeElement !== this.$el ?
                  this.componentColor || this.color :
                  null,
                this.flat && !this.active && document.activeElement !== this.$el
              )
            } else {
              ripple(
                evt,
                null,
                false
              )
            }
          }
        },
        click: (evt: EventTarget) => {
          if (this.to) {
            this.$router.push(this.to)
          } else if (this.href) {
            window.open(this.href, this.blank && '_blank' || '_self')
            // console.log(this.blank && '_self')
          }
          this.$emit('click', evt)
        }
      }
    }, [defaultSlot, this.$slots.animate ? animateSlot : null, this.loading ? loadingElement : null])
    return btn
  }
}
