import { Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface CountryListSpec {
  id: string;
  name: string;
}

const fixAutocomplete = (): void => {
  document.querySelectorAll('.ant-select-selector input').forEach((e) => {
    e.setAttribute('autocomplete', 'stopAutocomplete');
  });
};

const CountryListView: React.FC = () => {
  const [searchInput, setSearchInput] = React.useState<string>('');
  const { t } = useTranslation();

  // Some browsers override Antd inputs' autoComplete="off" option.
  // It makes the search unusable, so use this workaround until Antd finds a solution.
  // Reference: https://github.com/ant-design/ant-design/issues/7659#issuecomment-580688874
  React.useEffect(() => {
    fixAutocomplete();
  }, [searchInput]);

  const COUNTRY_LIST: CountryListSpec[] = [
    { id: 'TR', name: t('countryList.tr') },
    { id: 'US', name: t('countryList.us') },
    { id: 'GB', name: t('countryList.gb') },
    { id: 'DE', name: t('countryList.de') },
    { id: 'SE', name: t('countryList.se') },
    { id: 'KE', name: t('countryList.ke') },
    { id: 'BR', name: t('countryList.br') },
    { id: 'ZW', name: t('countryList.zw') },
  ];

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
        {COUNTRY_LIST.map((country) => (
          <Select.Option key={country.id} value={country.name}>
            {country.name}
          </Select.Option>
        ))}
      </Select>
    </FormItem>
  );
};

export default CountryListView;
