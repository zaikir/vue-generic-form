<script>
import { VAutocomplete } from 'vuetify/lib/components'

export default {
  functional: true,
  render (createElement, context) {
    return createElement(VAutocomplete, {
      ...context.data
    }, context.children)
  }
}
// <v-autocomplete
//   v-if="field.type === 'select' && (!field.mobile || !$vuetify.breakpoint[field.breakpoint || 'smAndDown'])"
//   v-model="editableItem[field.value]"
//   :rules="getRules(field)"
//   :required="conditionalFunction(field.required)"
//   :label="field.text"
//   :items="field.options({item: editableItem, ...context})"
//   :item-text="field.itemText"
//   :multiple="conditionalFunction(field.multiple)"
//   :item-value="field.itemValue"
//   :disabled="readonly || conditionalFunction(field.disabled)"
//   :outlined="field.outlined"
//   :prefix="conditionalFunction(field.prefix)"
//   :suffix="conditionalFunction(field.suffix)"
//   dense
//   @input="onFieldValueChanged(field, $event)"
// >
//   <template #label>
//     <slot name="label" :item="editableItem" :context="context" />
//   </template>
// </v-autocomplete>
</script>
