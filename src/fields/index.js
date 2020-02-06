import { VRow, VCol, VTextField } from 'vuetify/lib/components'
import {
  EmailField, PasswordField, SelectField, AutocompleteField,
  BooleanField, CheckBoxField, IntegerField, NumberField,
  RadioGroupField
} from '../components'

export default {
  row: VRow,
  col: VCol,

  text: VTextField,
  email: EmailField,
  password: PasswordField,
  int: IntegerField,
  number: NumberField,

  select: SelectField,
  autocomplete: AutocompleteField,

  bool: BooleanField,
  checkbox: CheckBoxField,
  radio: RadioGroupField
}
