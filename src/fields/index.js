import { VRow, VCol, VTextField } from 'vuetify/lib/components'
import { EmailField, PasswordField, SelectField, AutocompleteField, BooleanField, CheckBoxField } from '../components'

export default {
  row: VRow,
  col: VCol,

  text: VTextField,
  email: EmailField,
  password: PasswordField,
  select: SelectField,
  autocomplete: AutocompleteField,

  bool: BooleanField,
  checkbox: CheckBoxField
}
