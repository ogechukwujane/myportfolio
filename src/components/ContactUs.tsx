"use client";

import { useFormik } from "formik";
import React, { useState } from "react";
import CustomField from "./CustomField";
import { ContactFormSchema } from "@/lib/schema";
import { toast } from "react-toastify";
import { AnimateY } from "./animation-components/animateY";
import { motion } from "framer-motion";
import { txtAnim } from "./animation-components/global";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async () => {
    setIsLoading(true);
    const response = await fetch("https://formspree.io/f/mldejrjb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message,
      }),
    });

    setIsLoading(false);

    if (response.status === 200) {
      toast.success("Message sent successfully");
      handleReset("");
    } else {
      toast.error("Unable to submit form. Pls, make sure your email is valid.");
    }
  };

  const { handleSubmit, handleReset, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: ContactFormSchema,
      onSubmit,
    });

  return (
    <div className="pattern pb-[80px]" id="contact">
      <div className="container pt-[80px]">
        <AnimateY initial="hidden" animate="visible">
          <motion.h2 className="section_header">contact</motion.h2>
          <motion.p className="txt sub_title mt-[20px]" variants={txtAnim}>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </motion.p>
        </AnimateY>
        <AnimateY initial="hidden" animate="visible" varient={txtAnim}>
          <form
            onSubmit={handleSubmit}
            className="max-w-[800px] mx-auto bg-white shadow rounded-md p-[30px] space-y-[15px] mt-[40px] max-[500px]:p-[20px]"
          >
            <CustomField
              label="Name"
              placeholder="Enter your name"
              value={values.name}
              handleChange={handleChange("name")}
              touched={touched.name}
              error={errors.name}
              type={"text"}
            />

            <CustomField
              label="Email"
              placeholder="Enter your email"
              value={values.email}
              handleChange={handleChange("email")}
              touched={touched.email}
              error={errors.email}
              type={"text"}
            />

            <CustomField
              label="Message"
              placeholder="Enter your message"
              value={values.message}
              handleChange={handleChange("message")}
              touched={touched.message}
              error={errors.message}
              type={"textArea"}
            />

            <div className="flex justify-end pt-[20px]">
              <button className="btn" type="submit" disabled={isLoading}>
                {isLoading ? "Sending ..." : "Submit"}
              </button>
            </div>
          </form>
        </AnimateY>
      </div>
    </div>
  );
};

export default ContactUs;
