import propTypes from 'prop-types';
import { DelButton } from './ContactItemStyled';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li>
      <span>{name}:</span>
      <span>{number}</span>
      <DelButton type="button" onClick={() => onDelete(id)}>
        Delete
      </DelButton>
    </li>
  );
};

ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};
