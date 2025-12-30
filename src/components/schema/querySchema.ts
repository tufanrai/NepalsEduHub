import * as yup from "yup";

const querySchema = yup.object({
  query: yup
    .string()
    .required("please provide the query/confusion that you are having."),
});

export default querySchema;
