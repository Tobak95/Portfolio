import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { contactDetails, type ContactDetails } from "../utils/formValidator";
import { axiosInstance } from "../utils/axiosInstance";
import Button from "./Button";
import { ArrowIcon } from "./Icons";

const inputStyle =
  "w-full rounded-2xl border-[1.5px] border-line bg-ink px-4 py-3.5 text-[15px] text-cream placeholder:text-muted/60 transition focus:border-lime focus:outline-none focus:ring-4 focus:ring-lime/10";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactDetails>({ resolver: yupResolver(contactDetails) });

  // Send the message to Formspree
  const sendEmail = async (data: ContactDetails) => {
    setIsSubmitting(true);
    try {
      await axiosInstance.post("", data, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Thanks! Your message has been sent. I'll reply soon.");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Your message didn't send. Please try again, or message me on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(sendEmail)} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id="name" error={errors.name?.message}>
          <input id="name" placeholder="Ada Obi" autoComplete="name" className={inputStyle} {...register("name")} />
        </Field>

        <Field label="Email" id="email" error={errors.email?.message}>
          <input id="email" type="email" placeholder="ada@company.com" autoComplete="email" className={inputStyle} {...register("email")} />
        </Field>
      </div>

      <Field label="Subject" id="subject" error={errors.subject?.message}>
        <input id="subject" placeholder="New website for my business" className={inputStyle} {...register("subject")} />
      </Field>

      <Field label="Message" id="message" error={errors.message?.message}>
        <textarea id="message" rows={6} placeholder="Tell me about your project..." className={`${inputStyle} resize-y`} {...register("message")} />
      </Field>

      <div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              Sending <ClipLoader size={14} color="#0B0B0B" />
            </>
          ) : (
            <>
              Send message <ArrowIcon />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

// Label + input + error message
type FieldProps = {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
};

const Field = ({ label, id, error, children }: FieldProps) => {
  return (
    <div className="grid min-w-0 gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-muted">
        {label}
      </label>
      {children}
      {error && <p className="text-sm text-coral">{error}</p>}
    </div>
  );
};

export default ContactForm;
