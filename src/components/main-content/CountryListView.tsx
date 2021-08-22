import { Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  CountryItemSpec,
  FormFields,
  getRequiredMessage,
  RequiredFieldsTranslationSpec,
} from '../common/form-utils';

/*
 * Some browsers override Antd inputs' autoComplete="off" option.
 * It makes the search unusable, so use this workaround until Antd finds a solution.
 * Reference: https://github.com/ant-design/ant-design/issues/7659#issuecomment-580688874
 */
const fixAutocomplete = (): void => {
  document.querySelectorAll('.ant-select-selector input').forEach((e) => {
    e.setAttribute('autocomplete', 'stopAutocomplete');
  });
};

interface CountryListSpec {
  countries: CountryItemSpec[];
}

const CountryListView: React.FC<CountryListSpec> = ({ countries }) => {
  const [searchInput, setSearchInput] = React.useState<string>('');
  const { t } = useTranslation();

  React.useEffect(() => {
    fixAutocomplete();
  }, [searchInput]);

  return (
    <FormItem
      name={FormFields.COUNTRY}
      label={t('login.userCountry')}
      rules={[
        {
          required: true,
          message: t(
            getRequiredMessage(
              RequiredFieldsTranslationSpec[FormFields.COUNTRY],
            ),
          ),
        },
      ]}
    >
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder={t('login.placeholders.country')}
        optionFilterProp="children"
        filterOption={(input, option) =>
          // Allows searches by country names.
          option?.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0 ||
          // Allows searches by country codes.
          option?.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        onSearch={(value) => setSearchInput(value)}
        onFocus={fixAutocomplete}
      >
        {countries.map((country) => (
          <Select.Option key={country.id} value={country.id}>
            {country.name}
          </Select.Option>
        ))}
      </Select>
    </FormItem>
  );
};

export default CountryListView;
