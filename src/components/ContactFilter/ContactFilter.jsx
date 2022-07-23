import { Component } from 'react';
import propTypes from 'prop-types';
import { FilterBox, FilterInput } from './ContactFilterStyled';
import { FormLabel } from '../ContactForm/ContactFormStyled';

export class ContactFilter extends Component {
  handleChange = ({ target: { value } }) => {
    this.props.onChange(value);
  };

  render() {
    return (
      <FilterBox>
        <FormLabel htmlFor="filter">Find contacts by name</FormLabel>
        <div>
          <FilterInput
            name="filter"
            type="filter"
            onChange={this.handleChange}
          />
        </div>
      </FilterBox>
    );
  }
}

ContactFilter.propTypes = {
  onChange: propTypes.func.isRequired,
};
