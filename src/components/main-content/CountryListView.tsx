import { Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CountryListSpec } from './ContactView';

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

const CountryListView: React.FC<CountryListSpec> = (props) => {
  const [searchInput, setSearchInput] = React.useState<string>('');
  const { t } = useTranslation();

  React.useEffect(() => {
    fixAutocomplete();
  }, [searchInput]);

  return (
    <FormItem
      name="userCountry"
      label={t('login.userCountry')}
      rules={[
        {
          required: true,
          message: t('login.requiredMessages.country'),
        },
      ]}
    >
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder={t('login.placeholders.country')}
        optionFilterProp="children"
        filterOption={(input, option) =>
          option?.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        onSearch={(value) => setSearchInput(value)}
        onFocus={fixAutocomplete}
      >
        {props.countries.map((country) => (
          <Select.Option key={country.id} value={country.id}>
            {country.name}
          </Select.Option>
        ))}
      </Select>
    </FormItem>
  );
};

export default CountryListView;
