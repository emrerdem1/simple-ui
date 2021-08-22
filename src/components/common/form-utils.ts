import { FormInstance } from 'antd';

export interface CountryItemSpec {
  id: string;
  name: string;
}

// Names given to Form.Item elements to access their key-value pairs.
// These are also assigned to the form elements as ID selector by antd.
export enum FormFields {
  TITLE = 'title',
  EMAIL = 'email',
  PASSWORD = 'password',
  NAME = 'name',
  PHONE = 'phone',
  COUNTRY = 'country',
  MESSAGE = 'message',
}

type InvalidEmail = 'invalidMail';

// The following values represent the translation keys of required fields.
// It can be accessed easily by the related form field name.
export const RequiredFieldsTranslationSpec: Record<
  FormFields | InvalidEmail,
  string
> = {
  [FormFields.NAME]: 'name',
  [FormFields.EMAIL]: 'email',
  [FormFields.PHONE]: 'phone',
  [FormFields.MESSAGE]: 'message',
  [FormFields.COUNTRY]: 'country',
  [FormFields.TITLE]: 'title',
  [FormFields.PASSWORD]: 'password',
  invalidMail: 'invalidMail',
};

/*
 * Get the translation of required messages by the field name.
 * E.g., login.requiredMessages.example -> 'Example text' in active language.
 */
export const getRequiredMessage = (fieldName: string): string =>
  `login.requiredMessages.${fieldName}`;

interface UpdateRequiredMessagesProps {
  fieldName: FormFields;
  formInstance: FormInstance;
  i18nHook: (key: string) => string;
  // Only email field has extra validator check.
  isInvalidFieldCheck?: boolean;
}
/*
 * Update the error message of the form instance by field name.
 */
export const updateRequiredMessages = ({
  fieldName,
  formInstance,
  i18nHook,
  isInvalidFieldCheck = false,
}: UpdateRequiredMessagesProps): void => {
  const translationKey = isInvalidFieldCheck
    ? RequiredFieldsTranslationSpec.invalidMail
    : RequiredFieldsTranslationSpec[fieldName];
  formInstance.setFields([
    {
      name: fieldName,
      errors: [i18nHook(getRequiredMessage(translationKey))],
    },
  ]);
};
