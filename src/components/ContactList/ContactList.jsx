import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ filterContacts, onDelete }) => {
  return (
    <ul>
      {filterContacts().map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          id={id}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
