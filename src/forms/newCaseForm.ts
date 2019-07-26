import * as Yup from "yup";

const newCaseForm: IFormElement[] = [
  {
    type: "text",
    name: "case_name",
    label: "Case Name",
    validation: Yup.string().required("Case name is required")
    // initialValue: 'FOO'
  },
  {
    type: "date",
    name: "case_date",
    label: "Case Date",
    validation: Yup.string().required("Case date is required")
    // initialValue: 'FOO'
  },
  {
    type: "text",
    name: "description",
    label: "Case Description",
    validation: Yup.string().required("Case description is required")
    // initialValue: 'FOO'
  }
];

export { newCaseForm };
