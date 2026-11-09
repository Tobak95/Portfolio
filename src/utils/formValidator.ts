import * as Yup from "yup";

// Rules for the contact form
export const contactDetails = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Please enter an email")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Please write a message"),
});

// TypeScript type created from the rules above
export type ContactDetails = Yup.InferType<typeof contactDetails>;
