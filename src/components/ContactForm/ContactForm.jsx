
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactForm = ({ onSubmit }) => {
  const initialValues = {
    name: "",
    number: ""
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number must be at most 50 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const contact = {
      id: nanoid(),
      name: values.name,
      number: values.number
    };

    onSubmit(contact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      <Form>
        <div>
          <label htmlFor='name'>Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor='number'>Number</label>
          <Field type="text" id="number" name="number" />
          <ErrorMessage name="number" component="div" className="error" />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm;
