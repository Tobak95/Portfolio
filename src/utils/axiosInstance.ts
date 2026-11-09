import axios from "axios";

// Contact form messages are sent to Formspree, which forwards them to my email
export const axiosInstance = axios.create({
  baseURL: "https://formspree.io/f/mbladvdb",
});
