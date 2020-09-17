import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsSwitch extends VsComponent {

  @Prop({ default: '' }) value: any

  @Prop({ default: '' }) val!: any

  @Prop({ default: '' }) notValue!: any

  @Prop({ type: Boolean, default: false }) loading!: boolean

  @Prop({ type: Boolean, default: false }) square!: boolean

  @Prop({ type: Boolean, default: false }) indeterminate!: boolean

  @Prop({ type: Boolean, default: false }) icon!: boolean

  get isChecked() {
    let isChecked = false

    if (this.value) {

      if (typeof this.value == 'boolean') {
        isChecked = this.value
      } else if (typeof this.value == 'object' && this.value !== null) {
        const array = this.value
        const containValue = array.indexOf(this.val) === -1 &&
          JSON.stringify(array).indexOf(JSON.stringify(this.val)) === -1
        let indexVal = 0

        array.forEach((item: any, index: number) => {
          if (JSON.stringify(item) == JSON.stringify(this.val)) {
            indexVal = index
          }
        })

        if (containValue) {
          return false
        } else {
          return true
        }
      }

    } else {
      isChecked = false
    }
    return isChecked
  }

  public render(h: any): VNode {
    const circle = h('div', {
      class: ['vso-switch__circle'],
    }, [
      this.$slots.circle
    ])

    const textOn = h('div', {
      ref: 'on',
      class: ['vso-switch__text', 'on'],
    }, [this.$slots.on || this.$slots.default])

    const textOff = h('div', {
      ref: 'off',
      class: ['vso-switch__text', 'off'],
    }, [this.$slots.off || this.$slots.default])

    const background = h('div', {
      class: ['vso-switch__background'],
    })

    const input = h('input', {
      attrs: {
        ...this.$attrs,
        type: 'checkbox',
      },
      domProps: {
        checked: this.isChecked
      },
      on: {
        ...this.$listeners,
        input: (evt: any) => {
          if (typeof this.value == 'boolean') {

            this.$emit('input', !this.value)

          } else if (typeof this.value == 'object' && this.value !== null) {

            const array = this.value
            const containValue = array.indexOf(this.val) === -1 &&
              JSON.stringify(array).indexOf(JSON.stringify(this.val)) === -1
            let indexVal = 0

            array.forEach((item: any, index: number) => {
              if (JSON.stringify(item) == JSON.stringify(this.val)) {
                indexVal = index
              }
            })

            if (containValue) {
              array.push(this.val)
            } else {
              array.splice(indexVal, 1)
            }

            this.$emit('input', array)

          } else {

            if (this.val !== this.value) {
              this.$emit('input', this.val)
            } else {
              this.$emit('input', this.notValue || null)
            }
          }
          this.$emit('change', evt)
        }
      },
      class: ['vso-switch__input'],
    })

    return h('div', {
      staticClass: 'vso-switch',
      attrs: {
        type: 'checkbox',
      },
      class: {
        'vso-switch--loading': this.loading,
        'vso-switch--square': this.square,
        'vso-switch--indeterminate': this.indeterminate,
        'vso-switch--icon': this.icon,
      },
    }, [
      input,
      circle,
      textOn,
      textOff,
      // !this.active && textOff,
      background
    ])
  }
}
