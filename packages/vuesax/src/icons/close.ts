import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import './icons.sass'
@Component
export default class VsIconClose extends Vue {
  @Prop({ type: String, default: null }) public hover!: string | null

  render(h: any): VNode {
    const icon = h('i', {
      staticClass: 'vso-icon-close',
      class: [
        `vso-icon-hover-${this.hover}`
      ],
      ref: 'icon'
    })

    return icon
  }
}
