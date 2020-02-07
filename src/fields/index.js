import { VRow, VCol, VTextField } from 'vuetify/lib/components'
import {
  EmailField, PasswordField, SelectField, AutocompleteField,
  SwitchField, CheckBoxField, IntegerField, NumberField,
  RadioGroupField, TextareaField, PhoneField, DateField,
  DateTimeField
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

  date: DateField,
  datetime: DateTimeField,

  select: SelectField,
  autocomplete: AutocompleteField,

  switch: SwitchField,
  bool: CheckBoxField,
  radio: RadioGroupField
}
