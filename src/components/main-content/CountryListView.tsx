import { Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormFields } from '../common/form-utils';

interface CountryItemSpec {
  id: string;
  name: string;
}

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

/*
 * Allows searches by country names.
 * Use language specific case for Turkish letter "İ".
 * Reference: https://stackoverflow.com/a/48637971/12579543
 */
const searchByCountryName = (
  inputText: string,
  countryName: string | undefined,
): boolean => {
  if (!countryName) return false;

  return countryName
    .toLocaleLowerCase('tr-TR')
    .includes(inputText.toLocaleLowerCase('tr-TR'));
};

const CountryListView: React.FC = () => {
  const [searchInput, setSearchInput] = React.useState<string>('');
  const { t } = useTranslation();

  React.useEffect(() => {
    fixAutocomplete();
  }, [searchInput]);

  // TODO(emrerdem1): You should find a proper way to use i18 outside the components.
  // A kind of static list should not be defined within the component.
  const COUNTRY_LIST: CountryItemSpec[] = [
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
      name={FormFields.COUNTRY}
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
          searchByCountryName(input, option?.children)
        }
        onSearch={(value) => setSearchInput(value)}
        onFocus={fixAutocomplete}
      >
        {COUNTRY_LIST.map((country) => (
          <Select.Option key={country.id} value={country.id}>
            {country.name}
          </Select.Option>
        ))}
      </Select>
    </FormItem>
  );
};

export default CountryListView;
