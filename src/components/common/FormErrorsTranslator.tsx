import React, { useEffect } from 'react';
import { FormInstance } from 'antd';
import { FormFields, updateFieldError } from './form-utils';
import { useTranslation } from 'react-i18next';
import { language } from 'src/redux/reducer';
import { useAppSelector } from 'src/redux/hooks';

interface FormErrorsTranslatorProps {
  formInstance: FormInstance;
  parentTranslationKey: string;
}

const FormErrorsTranslator: React.FC<FormErrorsTranslatorProps> = ({
  formInstance,
  parentTranslationKey,
}) => {
  const { t } = useTranslation();
  const { userLanguage } = useAppSelector(language);

  useEffect(() => {
    const errorFields = formInstance
      .getFieldsError()
      .filter((field) => field.errors.length);
    // No error found to translate.
    if (!errorFields.length) return;

    errorFields.forEach((field) =>
      updateFieldError({
        formInstance,
        parentTranslationKey,
        i18nHook: t,
        fieldName: field.name[0] as FormFields,
      }),
    );
  }, [userLanguage]);

  return null;
};

export default FormErrorsTranslator;
