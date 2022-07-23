import propTypes from 'prop-types';
import { Item, DelButton } from './ContactItemStyled';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <Item>
      <span>{name}:</span>
      <span>{number}</span>
      <DelButton type="button" onClick={() => onDelete(id)}>
        Delete
      </DelButton>
    </Item>
  );
};

ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};
