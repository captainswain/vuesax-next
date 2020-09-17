import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsRadio extends VsComponent {

  _uid: any

  model: {
    prop: 'model',
    event: 'change'
  }

  @Prop({}) value: any

  @Prop({}) val: any

  @Prop({ type: String, default: null }) name: string

  @Prop({ type: Boolean, default: false }) disabled: boolean

  @Prop({ type: Boolean, default: false }) loading: boolean

  @Prop({ type: Boolean, default: false }) labelBefore: boolean

  get isChecked() {
    return this.value == this.val
  }

  public render(h: any): VNode {
    const radioInput = h('input', {
      attrs: {
        type: 'radio',
        id: this._uid,
        value: this.val,
        name: this.name || this.value,
        checked: this.isChecked
      },
      on: {
        input: () => {
          this.$emit('input', this.val)
        }
      }
    })

    const radioEffect = h('span', {
      staticClass: 'vso-radio__effect',
    }, [
      h('span', {
        staticClass: 'vso-radio__effect__icon'
      }, [
        this.$slots.icon
      ]),
      h('span', { staticClass: 'vso-radio__effect__loading' })
    ])

    const label = h('label', {
      staticClass: 'vso-radio__label',
      attrs: {
        for: this._uid
      }
    }, [this.$slots.default])

    const radio = h('div', {
      staticClass: 'vso-radio'
    }, [
      radioInput,
      radioEffect,
    ])
    return h('div', {
      staticClass: 'vso-radio-content',
      class: {
        disabled: this.disabled,
        loading: this.loading,
        active: this.isChecked
      }
    }, [
      this.labelBefore && label,
      radio,
      !this.labelBefore && label
    ])
  }
}
