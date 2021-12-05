import { FormInstance } from 'antd';

// Names given to Form.Item elements to access their key-value pairs.
// These are also assigned to the form elements as ID selector by Antd.
export enum FormFields {
  NAME = 'name',
  PHONE = 'phone',
  TITLE = 'title',
  EMAIL = 'email',
  COUNTRY = 'country',
  MESSAGE = 'message',
  PASSWORD = 'password',
}

// Represents the translation keys of the form fields.
enum FieldErrorKeys {
  // Field cannot be left empty.
  REQUIRED = 'requiredMessages',
  // Given value is not valid for the input type.
  INVALID = 'invalidMessages',
}

interface LocalizationKeyProps {
  fieldValue: string;
  fieldName: string;
  parentTranslationKey: string;
}
/*
 * Get the translation of required messages by the field name.
 * E.g., login.requiredMessages.example -> 'Example error text' in active language.
 */
const getLocalizationKey = ({
  fieldValue,
  fieldName,
  parentTranslationKey,
}: LocalizationKeyProps): string => {
  const errorKey = fieldValue
    ? FieldErrorKeys.INVALID
    : FieldErrorKeys.REQUIRED;
  return `${parentTranslationKey}.${errorKey}.${fieldName}`;
};

interface UpdateFieldErrorProps {
  fieldName: FormFields;
  formInstance: FormInstance;
  parentTranslationKey: string;
  i18nHook: (key: string) => string;
}
/*
 * Update the error message of the form instance by field name.
 */
export const updateFieldError = ({
  fieldName,
  formInstance,
  i18nHook,
  parentTranslationKey,
}: UpdateFieldErrorProps): void => {
  // Keep the original error if form field is not included in type list.
  // TODO: You might consider informing the team via Slack message.
  if (!Object.values(FormFields).includes(fieldName)) {
    return;
  }

  const fieldValue = formInstance.getFieldValue(fieldName);
  const translatedErrorMessage = i18nHook(
    getLocalizationKey({
      fieldValue,
      fieldName,
      parentTranslationKey,
    }),
  );
  formInstance.setFields([
    {
      name: fieldName,
      errors: [translatedErrorMessage],
    },
  ]);
};

interface LocalizeFormProps {
  formInstance: FormInstance;
  i18nHook: (key: string) => string;
  parentTranslationKey: string;
}
// rc-form-field does not update required field messages by default
// when the language is changed. Needs to check the errors and update them manually.
export const localizeFormErrors = ({
  formInstance,
  i18nHook,
  parentTranslationKey,
}: LocalizeFormProps): void => {
  const errorFields = formInstance
    .getFieldsError()
    .filter((field) => field.errors.length);
  // No error found to translate.
  if (!errorFields.length) return;

  errorFields.forEach((field) =>
    updateFieldError({
      fieldName: field.name[0] as FormFields,
      formInstance,
      i18nHook,
      parentTranslationKey,
    }),
  );
};
