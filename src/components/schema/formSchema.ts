import * as yup from "yup";

const contactSchema = yup.object({
  name: yup.string().required("please enter your full name"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("please enter your email"),
  subject: yup.string().required("please write a subject"),
  message: yup.string().required("please explain/write about your query"),
});

export default contactSchema;
