import emailjs from "@emailjs/browser";
import { Slide, toast } from "react-toastify";

export const sendEmail = (e: React.FormEvent<HTMLFormElement>, clearForm: () => void) => {
    e.preventDefault();

    const form = e.currentTarget;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Message send", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Slide,
          });
          form.reset();
          clearForm();
        },
        (error) => {
          toast.error("Error sending message!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
          console.error("FAILED...", error);
        }
      );
  };