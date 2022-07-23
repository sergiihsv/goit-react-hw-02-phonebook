import { Component } from 'react';
import propTypes from 'prop-types';

export class ContactFilter extends Component {
  handleChange = ({ target: { value } }) => {
    this.props.onChange(value);
  };

  render() {
    return (
      <div>
        <label htmlFor="filter">Find contacts by name</label>
        <div>
          <input name="filter" type="filter" onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

ContactFilter.propTypes = {
  onChange: propTypes.func.isRequired,
};
