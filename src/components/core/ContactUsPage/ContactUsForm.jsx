import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import CountryCode from "../../../data/countrycode.json";
import { apiConnector } from "../../../services/apiConnector";
import { contactusEndpoint } from "../../../services/apis";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    try {
      setLoading(true);
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );
      setLoading(false);
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form
      className="flex flex-col gap-8 bg-gradient-to-br from-blue-300 to-pure-greys-700 text-black p-8 rounded-xl shadow-2xl max-w-3xl mx-auto object-cover transition-all duration-300 hover:scale-105 hover:shadow-lg"
      onSubmit={handleSubmit(submitContactForm)}
    >
      <h2 className="text-2xl font-bold text-4xl text-center text-white">
        Get in Touch
      </h2>
      <p className="text-s text-center text-white">
        We’d love to hear from you! Please fill out the form below.
      </p>

      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="firstname" className="text-sm font-semibold text-white">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter your first name"
            className="bg-white border border-blue-300 text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="text-xs text-red-500">
              Please enter your first name.
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="lastname" className="text-sm font-semibold text-white">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter your last name"
            className="bg-white border border-blue-300 text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("lastname")}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-white">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
          className="bg-white border border-blue-300 text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-xs text-red-500">Please enter your email address.</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
  <label htmlFor="phonenumber" className="text-sm font-semibold text-white">
    Phone Number
  </label>
  <div className="flex gap-4">
    <select
      name="countrycode"
      id="countrycode"
      className="w-2/4 bg-white border border-blue-300 text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      {...register("countrycode", { required: true })}
    >
      {CountryCode.map((ele, i) => (
        <option key={i} value={ele.code}>
          {ele.code} - {ele.country}
        </option>
      ))}
    </select>
    <input
      type="number"
      name="phonenumber"
      id="phonenumber"
      placeholder="Enter Number"
      className="w-3/4 bg-white border border-blue-300 text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      {...register("phoneNo", {
        required: {
          value: true,
          message: "Please enter your phone number.",
        },
        maxLength: { value: 12, message: "Invalid phone number." },
        minLength: { value: 10, message: "Invalid phone number." },
      })}
    />
  </div>
  {errors.phoneNo && (
    <span className="text-xs text-red-500">{errors.phoneNo.message}</span>
  )}
</div>


      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-white">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows="6"
          placeholder="Write your message here..."
          className="bg-white border border-blue-300  text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="text-xs text-red-500">Please enter your message.</span>
        )}
      </div>

      <button
        disabled={loading}
        type="submit"
        className={`bg-blue-600 text-white py-3 px-6 rounded-lg font-bold text-sm shadow-lg transition-transform duration-200 
          ${!loading && "hover:bg-blue-700 hover:scale-95"} disabled:bg-gray-400`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactUsForm;
