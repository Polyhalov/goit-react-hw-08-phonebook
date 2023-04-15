import { useDispatch } from "react-redux";
import css from './ContactListItem.module.css'
import { deleteContact } from "components/Redux/contacts/operations";




export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteButton = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <li className={css.contactListItem}>
      <p>
        {name}: {number}
      </p>
      <button type="button" className={css.contactListItemBtn} onClick={() => handleDeleteButton(id)}>
              Delete
      </button>
    </li>
  );
};