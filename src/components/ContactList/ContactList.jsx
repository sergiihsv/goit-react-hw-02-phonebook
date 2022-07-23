import propTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactListStyled';

export const ContactList = ({ filterContacts, onDelete }) => {
  return (
    <List>
      {filterContacts().map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          id={id}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  filterContacts: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
};
