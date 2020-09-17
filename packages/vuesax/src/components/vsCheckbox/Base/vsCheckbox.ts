import { VNode } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import VsIconsCheck from '../../../icons/check'
import VsComponent from '../../../mixins/component'

@Component
export default class VsCheckbox extends VsComponent {
  // tslint:disable-next-line:variable-name
  _uid: any

  @Prop({ default: '' }) value: any

  @Prop({ default: '' }) val!: any

  @Prop({ default: '' }) notValue!: any

  @Prop({ type: Boolean, default: false }) indeterminate!: boolean

  @Prop({ type: Boolean, default: false }) lineThrough!: boolean

  @Prop({ type: Boolean, default: false }) checked: boolean

  @Prop({ type: Boolean, default: false }) checkedForce: boolean

  @Prop({ type: Boolean, default: false }) loading!: boolean

  @Prop({ type: Boolean, default: false }) labelBefore!: boolean

  @Watch('indeterminate')
  handleIndeterminate(val: boolean) {
    if (val) {
      this.$emit('input', true)
    } else {
      this.$emit('input', false)
    }
  }

  mounted() {
    if (this.checked && typeof this.value == 'boolean') {
      this.$emit('input', true)
    }
  }

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
    const InputCheckbox = h('input', {
      staticClass: 'vso-checkbox',
      attrs: {
        ...this.$attrs,
        type: 'checkbox',
        id: this._uid
      },
      domProps: {
        checked: this.checkedForce || this.isChecked
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
          this.$emit('mousedown', evt)
        },
        blur: (evt: EventTarget) => {
          this.$emit('blur', evt)
        }
      }
    })

    const checkbox = h('div', {
      staticClass: 'vso-checkbox-mask',
    }, [
      !this.$slots.icon && h(VsIconsCheck, {
        props: {
          indeterminate: this.indeterminate
        }
      }),
      this.$slots.icon
    ])

    const label = h('label', {
      staticClass: 'vso-checkbox-label',
      class: [
        {
          lineThrough: this.lineThrough
        }
      ],
      attrs: {
        for: this._uid
      }
    }, [
      this.$slots.default
    ])

    const conCheckbox = h('div', {
      staticClass: 'vso-checkbox-con'
    }, [
      InputCheckbox,
      checkbox
    ])

    return h('div', {
      staticClass: 'vso-checkbox-content',
      class: [
        { 'vso-checkbox--checked': this.isChecked },
        { 'vso-checkbox--disabled': this.$attrs.hasOwnProperty('disabled') },
        { 'vso-checkbox--loading': this.loading },
        { 'vso-checkbox--label-before': this.labelBefore },
      ]
    },
      [
        conCheckbox,
        this.$slots.default && label
      ]
    )
  }
}
