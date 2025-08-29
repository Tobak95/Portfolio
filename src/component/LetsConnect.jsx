import React from "react";
import twitter from "../assets/twitter.png";
import linkDn from "../assets/linkDn.png";
import gitHorb from "../assets/gitHorb.png";
import instagram from "../assets/instagram.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactDetails } from "../../utils/formValidator";
import { ClipLoader } from "react-spinners";
import { axiosInstance } from "../../utils/axiosInstance";
import { toast } from "react-toastify";

const LetsConnect = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactDetails) });

  const sendEmail = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await axiosInstance.post("", data, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        setStatus("SUCCESS");
        reset();
         toast.success("Your Request Has Been Received");
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      setStatus("ERROR");
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      reset();
    }, 2000);
    console.log(data);
  };

  return (
    <div className="layout mt-20 ">
      <div className="flex flex-col lg:flex-row justify-between gap-10  mb-20 lg:mb-0">
        <div className="lg:w-[600px]">
          <div>
            <h1
              style={{ fontFamily: "Bebas Neue" }}
              className="text-[76px] text-white"
            >
              Let’s connect
            </h1>
          </div>
          <div className="w-[302px] ">
            <p style={{ fontFamily: "Manrope" }} className="text-[#C7C7C7]">
              Say hello to{" "}
              <span style={{ fontFamily: "Manrope" }} className="text-white">
                akinolatobiloba@gmail.com
              </span>{" "}
              For more info, here's my{" "}
              <span style={{ fontFamily: "Manrope" }} className="text-white">
                {" "}
                resume
              </span>
            </p>
          </div>

          <div className="w-[200px] flex justify-between mt-10 lg:mt-5">
            <img src={linkDn} alt="" />
            <img src={gitHorb} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>

        <div className="lg:w-[600px] bg-black  ">
          <form onSubmit={handleSubmit(sendEmail)} className="mt-20 lg:mt-0">
            <div className="mb-6">
              <label
                style={{ fontFamily: "Manrope" }}
                htmlFor="name"
                className="font-[500] text-[#C7C7C7] text-[16px] "
              >
                Name
              </label>
              <input
                style={{ fontFamily: "Manrope" }}
                type="text"
                id="name"
                name="name"
                className="bg-[#1A1A1A] border-gray-300 text-white mt-3 text-sm rounded-sm block w-full p-4"
                placeholder="john doe"
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

            <div className="mb-6">
              <label
                style={{ fontFamily: "Manrope" }}
                htmlFor="email"
                className="font-[500] text-[#C7C7C7] text-[16px] "
              >
                Email
              </label>
              <input
                style={{ fontFamily: "Manrope" }}
                type="email"
                id="email"
                name="email"
                className="bg-[#1A1A1A] border-gray-300 text-white mt-3 text-sm rounded-sm block w-full p-4"
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

            <div className="mb-6">
              <label
                style={{ fontFamily: "Manrope" }}
                htmlFor="subject"
                className="font-[500] text-[#C7C7C7] text-[16px] "
              >
                Subject
              </label>
              <input
                style={{ fontFamily: "Manrope" }}
                type="subject"
                name="subject"
                id="subject"
                className="bg-[#1A1A1A] border-gray-300 text-white mt-3 text-sm rounded-sm block w-full p-4"
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

            <div className="mb-6">
              <label
                style={{ fontFamily: "Manrope" }}
                htmlFor="message"
                className="font-[500] text-[#C7C7C7] text-[16px] "
              >
                Message
              </label>
              <textarea
                style={{ fontFamily: "Manrope" }}
                id="message"
                name="message"
                rows="6"
                className="bg-[#1A1A1A] border-gray-300 text-white mt-3 text-sm rounded-sm block w-full p-4"
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
              style={{ fontFamily: "Manrope" }}
              type="submit"
              className="text-black bg-[#D3E97A] focus:ring-4 focus:outline-none focus:ring-[#c7c7c7] font-[700] rounded-full text-[16px] w-[150px] h-[54px] text-center my-5"
            >
              {isSubmitting ? (
                <ClipLoader size={10} color="#0A0A0A" />
              ) : (
                "SUBMIT"
              )}
            </button>
            {status === "SUCCESS" && (
              <p
                style={{ fontFamily: "Manrope,sans-serif" }}
                className="text-[#D3E97A] mt-2"
              >
                Your message has been sent Successfully.
              </p>
            )}
            {status === "ERROR" && (
              <p
                style={{ fontFamily: "Manrope,sans-serif" }}
                className="text-red-400 mt-2"
              >
                Please Try Again Later.
              </p>
            )}
          </form>
          <div>
          </div>
        </div>
    
      </div>
            <p style={{ fontFamily: "Manrope" }} className="text-[#C7C7C7] my-5">
              © 2024 Akinola Tobiloba.
            </p>
    </div>
  );
};

export default LetsConnect;
