<script>
import { VDatePicker, VMenu, VTextField } from 'vuetify/lib/components'

export default {
  functional: true,
  render (createElement, context) {
    const createTextField = on => createElement(VTextField, {
      props: {
        ...context.data.props
      },
      attrs: {
        max: '9999-12-31',
        maxlength: '4'
      },
      class: {
        ...context.data.class,
        'gf-date-field': true
      },
      on
    })

    if (!context.parent.$vuetify.breakpoint.xsOnly) {
      return createElement(VMenu, {
        props: {
          closeOnContentClick: false,
          transition: 'scale-transition',
          offsetY: true,
          minWidth: '290px',
          maxWidth: '290px',
          dense: true,
          ...context.data.props.menuProps || {}
        },
        scopedSlots: {
          activator: ({ on }) => createTextField({
            ...on,
            ...context.data.on
          })
        }
      }, [
        !context.parent.$vuetify.breakpoint.xsOnly && createElement(VDatePicker, {
          props: {
            noTitle: true,
            firstDayOfWeek: 1,
            dense: true,
            value: context.data.props.value,
            ...context.data.props.datePickerProps || {}
          },
          on: {
            input (val) {
              context.data.on.input && context.data.on.input(val)
            },
            change (val) {
              context.data.on.change && context.data.on.change(val)
            }
          }
        })
      ])
    } else {
      return createTextField(context.data.on)
    }
  }
}
</script>
<style>
.gf-date-field input[type="date"]::-webkit-inner-spin-button,
.gf-date-field input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}
</style>
