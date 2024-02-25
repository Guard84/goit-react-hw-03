import css from "./Contact.module.css";
import { AiFillContacts } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  const handleDelete = () => { onDelete(id); };
  
  return (
    <>
      <li className={css.listItem}>
        <div className={css.iconContainer}>
          <AiFillContacts size={22}/>
          <AiFillPhone size={22}/>
        </div>
        <div className={css.textContainer}>
          <p className={css.text}>{name}</p>
          <p className={css.text}>{number}</p>
        </div>
        <button className={css.btn} onClick={handleDelete}>Delete</button>
      </li>
    </>
  );
};

export default Contact;

