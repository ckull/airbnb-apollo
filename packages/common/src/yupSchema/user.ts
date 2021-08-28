import * as yup from "yup"

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
  });


export default schema;