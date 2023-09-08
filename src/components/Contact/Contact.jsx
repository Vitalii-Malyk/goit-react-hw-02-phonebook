const Contact = ({ contact }) => {
  return (
    <li className="contact-item">
      <h3>{contact.name}</h3>
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        // onClick={() => handleDelete()}
      ></button>
    </li>
  );
};

export default Contact;
