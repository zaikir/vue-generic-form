import { VRow, VCol, VTextField } from 'vuetify/lib/components'
import {
  EmailField, PasswordField, SelectField, AutocompleteField,
  BooleanField, CheckBoxField, IntegerField, NumberField,
  RadioGroupField, TextareaField, PhoneField
} from '../components'

export default {
  row: VRow,
  col: VCol,

  text: VTextField,
  textArea: TextareaField,
  email: EmailField,
  phone: PhoneField,
  password: PasswordField,
  int: IntegerField,
  number: NumberField,

  select: SelectField,
  autocomplete: AutocompleteField,

  bool: BooleanField,
  checkbox: CheckBoxField,
  radio: RadioGroupField
}
