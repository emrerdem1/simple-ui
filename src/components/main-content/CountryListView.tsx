import { Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import React from 'react';
import { COUNTRY_LIST } from '../common/constants';

const fixAutocomplete = (): void => {
  document.querySelectorAll('.ant-select-selector input').forEach((e) => {
    e.setAttribute('autocomplete', 'stopAutocomplete');
  });
};

const CountryListView: React.FC = () => {
  const [searchInput, setSearchInput] = React.useState<string>('');

  // Some browsers override Antd inputs' autoComplete="off" option.
  // It makes the search unusable, so use this workaround until Antd finds a solution.
  // Reference: https://github.com/ant-design/ant-design/issues/7659#issuecomment-580688874
  React.useEffect(() => {
    fixAutocomplete();
  }, [searchInput]);

  return (
    <FormItem
      name="userCountry"
      label="Your Country"
      rules={[
        {
          required: true,
          message: 'Please select a country.',
        },
      ]}
    >
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select your country"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option?.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
