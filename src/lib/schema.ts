import * as Yup from "yup";

export const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().min(2, "Too Short!").required("Required"),
});
