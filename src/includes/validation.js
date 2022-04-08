import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate';
import {
  required, min, max, alpha_spaces as alphaSpaces, email
  , min_value as minVal, max_value as maxVal, confirmed, not_one_of as excluded
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('tos', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('email', email);
    defineRule('min_value', minVal);
    defineRule('max_value', maxVal);
    defineRule('passwords_mismatch', confirmed);
    defineRule('excluded', excluded);
    defineRule('county_excluded', excluded);

    configure({
      generateMessage: (ctx => {
        const messages = {
          required: `Поле ${ctx.field} обязательное`,
          min: `Поле ${ctx.field} слишком маленькое`,
          max: `Поле ${ctx.field} слишком длинное`,
          alpha_spaces: `Поле ${ctx.field} может содержать только буквенные символы`,
          email: `Поле ${ctx.field} должно быть действительный адрес электронной почты`,
          min_value: `Поле ${ctx.field} слишком маленькое`,
          max_value: `Поле ${ctx.field} слишком большое`,
          excluded: `Вам не разрешено использовать это значение для поля ${ctx.field}`,
          county_excluded: `Из-за ограничений мы не принимаем пользователей из этого места`,
          passwords_mismatch: `Пароль не подходит`,
          tos: `Вы должны принять Условия использования`,
        };

        return messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `Поле ${context.field} недействительно`;
      }),
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  }
};
