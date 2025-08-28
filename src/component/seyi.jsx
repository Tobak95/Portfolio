import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contact } from "../../../utils/formvalidation";
import { axiosInstance } from "../../../utils/axiosInstance";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contact) });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (formData) => {
    setIsSubmitting(true);

    try {
      const response = await axiosInstance.post("", formData, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        setStatus("SUCCESS");
        reset();
        toast.success("Your Message Has Been Recieved");
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      toast.error("Something went wrong Please try again");
      setStatus("ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mx-auto mt-30 py-[64px] lg:py-[80px]">
      <div className="layout">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between items-start">
          <div className="w-full flex-1 ">
            <div>
              <div>
                <h2 className="font-[400] text-[43px] text-[#ffffff] tracking-[-2%] leading-[100%]">
                  Let’s connect
                </h2>
                <p
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  className="my-5 font-[400] text-[16px] lg:text-[18px] text-[#C7C7C7]"
                >
                  Say hello at{" "}
                  <span
                    style={{ fontFamily: "Manrope,sans-serif" }}
                    className="text-[#ffffff] border-b-[1px] border-[#D3E97A]"
                  >
                    younqsheyex@gmail.com
                  </span>
                </p>
                <p
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  className="my-5 font-[400] text-[16px] lg:text-[18px] text-[#C7C7C7]"
                >
                  For more info, here’s my{" "}
                  <span className="text-[#ffffff] border-b-[1px] border-[#D3E97A]">
                    <a
                      href="https://drive.google.com/file/d/1MDQUv24cR6pP8xde0oXclerpd-4zkNAL/view"
                      target="blank"
                      style={{ fontFamily: "Manrope,sans-serif" }}
                    >
                      resume
                    </a>
                  </span>
                </p>
              </div>
              <div className="w-[224px] flex justify-between">
                <a
                  href="https://www.linkedin.com/in/younqsheyex-seyi-lawrence-585b6b272/"
                  target="blank"
                >
                  <FaLinkedinIn size={30} color="#D3E97A" />
                </a>
                <a href="https://github.com/YounQsheyex" target="blank">
                  <FaGithub size={30} color="#D3E97A" />
                </a>
                <a
                  href="https://x.com/younqsheyex?s=21&t=u0zk0jI0voqCcJ_BaBInVQ"
                  target="blank"
                >
                  <FaXTwitter size={30} color="#D3E97A" />
                </a>
                <a
                  href="https://www.instagram.com/younqsheyex?igsh=bWR0bzMyeG81Yng5&utm_source=qr"
                  target="blank"
                >
                  <BsInstagram size={30} color="#D3E97A" />
                </a>
              </div>
            </div>
            {/* <div>
              <p
                style={{ fontFamily: "Manrope,sans-serif" }}
                className="text-[#C7C7C7] text-[16px] font-[500]"
              >
                2025OluwaseyiLawrence
              </p>
            </div> */}
          </div>
          <div className="mt-10 lg:mt-0 w-full flex-1">












            
            <form
              onSubmit={handleSubmit(sendEmail)}
              // action="https://formspree.io/f/mvgbgpwq"
              // method="POST"
              className="flex flex-col gap-[24px] max-w-[600px]"
            >
              <div className="flex flex-col gap-[8px]">
                <label
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  htmlFor="name"
                  className="label"
                >
                  Name
                </label>
                <input
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  id="name"
                  name="name"
                  type="text"
                  className="my-input"
                  {...register("name")}
                />
                {errors.name && (
                  <p
                    style={{ fontFamily: "Manrope,sans-serif" }}
                    className="text-[#EC5E5E] font-[400] text-[14px] mt-1"
                  >
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-[8px]">
                <label
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  htmlFor="email"
                  className="label"
                >
                  Email
                </label>
                <input
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  id="email"
                  name="email"
                  type="text"
                  className="my-input"
                  {...register("email")}
                />
                {errors.email && (
                  <p
                    style={{ fontFamily: "Manrope,sans-serif" }}
                    className="text-[#EC5E5E] font-[400] text-[14px] mt-1"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-[8px]">
                <label
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  htmlFor="subject"
                  className="label"
                >
                  Subject
                </label>
                <input
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  id="subject"
                  name="subject"
                  type="text"
                  className="my-input"
                  {...register("subject")}
                />
                {errors.subject && (
                  <p
                    style={{ fontFamily: "Manrope,sans-serif" }}
                    className="text-[#EC5E5E] font-[400] text-[14px] mt-1"
                  >
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-[8px]">
                <label
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  htmlFor="message"
                  className="label"
                >
                  Message
                </label>
                <textarea
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  id="message"
                  name="message"
                  className="w-full h-[156px] bg-[#1A1A1A] px-[16px] py-[12px] focus:outline-none text-[#ffffff]"
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <p
                    style={{ fontFamily: "Manrope,sans-serif" }}
                    className="text-[#EC5E5E] font-[400] text-[14px] mt-1"
                  >
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                style={{ fontFamily: "Manrope,sans-serif" }}
                type="submit"
                className="w-[140px] h-[54px] bg-[#D3E97A] text-[#0A0A0A] text-[16px] font-[700] px-[40px] py-[20px] flex items-center rounded-full cursor-pointer"
              >
                {isSubmitting ? (
                  <FadeLoader size={10} color="#0A0A0A" />
                ) : (
                  "SUBMIT"
                )}
              </button>
              {status === "SUCCESS" && (
                <p
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  className="text-[#D3E97A] mt-2"
                >
                  Thanks!! Your message has been sent.
                </p>
              )}
              {status === "ERROR" && (
                <p
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  className="text-red-400 mt-2"
                >
                  Oops! Something went wrong.
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="mt-7 lg:mt-0">
          <p
            style={{ fontFamily: "Manrope,sans-serif" }}
            className="text-[#C7C7C7] text-[16px] font-[500]"
          >
            &copy; 2025 OluwaseyiLawrence
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
