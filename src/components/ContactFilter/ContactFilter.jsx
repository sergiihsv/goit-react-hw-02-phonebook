import propTypes from 'prop-types';
import { FilterBox, FilterInput } from './ContactFilterStyled';
import { FormLabel } from '../ContactForm/ContactFormStyled';

export const ContactFilter = ({ filter, onFilter }) => {
  return (
    <FilterBox>
      <FormLabel htmlFor="filter">Find contacts by name</FormLabel>
      <div>
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={onFilter}
        />
      </div>
    </FilterBox>
  );
};

ContactFilter.propTypes = {
  onFilter: propTypes.func,
  filter: propTypes.string,
};
