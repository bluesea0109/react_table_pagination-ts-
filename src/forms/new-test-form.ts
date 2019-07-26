import * as Yup from "yup";

const newTestForm: IFormElement[] = [
  {
    type: "text",
    name: "first_name",
    label: "First Name",
    validation: Yup.string().required("First name is required")
    // initialValue: 'FOO'
  },
  {
    type: "date",
    name: "birthday",
    label: "Birthday",
    validation: Yup.string().required("Birthday is required")
    // initialValue: 'FOO'
  }
];

export { newTestForm };
