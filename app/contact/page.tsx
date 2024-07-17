"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image
        src={"/images/test.png"}
        alt="Background"
        fill
        priority
        className="opacity-70 object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="z-30  flex flex-col gap-10">
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="tracking-wider text-center text-2xl sm:text-4xl md:text-6xl my-10 text-white "
        >
          CONTACT
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
          <motion.div
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            <p className="text-white opacity-70 text-[17px]">Get in Touch.</p>
            <h1 className="mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] text-white text-[27px] md:text-[30px] lg:text-[38px] xl:text-[45px]">
              Let&apos;s make <span className="text-[#156755]">Something</span>{" "}
              brilliant!
            </h1>
            <p className="text-white text-[15px] mt-[1rem] opacity-75">
              Eleifend aptent volutpat malesuada hendrerit tempor aenean
              placerat condimentum nullam velit commodo ullamcorper proin
              bibendum parturient tortor vivamus porttitor congue vestibulum
              egestas sapien dui auctor penatibus semper mollis lectus laoreet
              suspendisse nec inceptos vitae tristique interdum maecenas
              vulputate phasellus urna dolor habitasse sed nostra non diam
              euismod netus faucibus magnis
            </p>
            <a
              href="tel:+972527533703"
              className="block mt-[2rem] mb-[2rem] text-sm text-white  w-fit"
            >
              +972 54 880 8440
            </a>
          </motion.div>
          <motion.div
            initial={{ x: 0, y: 200, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/5e53288da9af531f27ea4abe61462f68"
              method="POST"
              className="border p-3 flex flex-col gap-5"
            >
              <div className="flex flex-col">
                <input
                  className="py-[0.7rem] text-white px-4 bg-transparent outline-none focus:border-b-white focus:border-b"
                  type="text"
                  placeholder="NAME"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                    minLength: 2,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500">
                    {errors.name.type === "required" &&
                      "Don't forget to submit your name!"}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 characters."}
                    {errors.name.type === "minLength" &&
                      "Min length is 2 characters."}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  className="py-[0.7rem] text-white px-4 bg-transparent outline-none focus:border-b-white focus:border-b"
                  type="email"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500">
                    {errors.email.type === "required" &&
                      "A valid email address is required."}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  {...register("subject")}
                  placeholder="SUBJECT"
                  className="py-[0.7rem]  w-full text-white px-4 bg-transparent outline-none focus:border-b-white focus:border-b"
                />
              </div>
              <div className="flex flex-col">
                <textarea
                  className="bg-transparent py-[0.7rem] mb-[1.5rem] w-full text-white px-4 outline-none focus:border-b-white focus:border-b"
                  placeholder="MESSAGE"
                  rows={4}
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                    minLength: 10,
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-red-500">
                    {errors.message.type === "required" &&
                      "Make sure to add a detialed message!"}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 characters."}
                    {errors.message.type === "minLength" &&
                      "Min length is 10 characters."}
                  </p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-black bg-white hover:bg-gray-200 px-4"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
