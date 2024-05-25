import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const MailBox = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b0a8jvl",
        "template_ja1euw5",
        form.current,
        "nTMf32BQU4vzHwKKf"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <h1 className="text-center text-3xl  font-medium pb-10">Send Message</h1>
      <div
        id="contact"
        className="shadow-2xl p-10 border-2 rounded-2xl border-[#53fde9] relative py-12 mx-auto container"
      >
        <div className="grid md:grid-cols-12 items-center ">
          <div className="md:col-span-6">
            <img
              className="w-3/4"
              src="https://i.ibb.co/McqLNL3/gif.gif"
              alt=""
            />
          </div>

          {/* right div  */}
          <div className="md:col-span-6 md:px-0 px-6">
            <form className="mx-auto " ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-[#ABB2BF]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="block w-full px-4 py-2 border text-[#282C33] border-gray-300 focus:outline-none focus:ring-[#53fde9] focus:border-[#53fde9] sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block  mb-2 text-sm font-medium text-[#ABB2BF]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="block w-full px-4 py-2 border text-[#282C33] border-gray-300  focus:outline-none focus:[#53fde9] focus:border-[#53fde9] sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-[#ABB2BF]"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="user_phone"
                  className="block w-full px-4 py-2 border text-[#282C33] border-gray-300  focus:outline-none focus:ring-[#53fde9] focus:border-[#53fde9]  sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-[#ABB2BF]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full px-4 py-2 text-[#282C33] border border-gray-300 focus:outline-none focus:ring-[#53fde9] focus:border-[#53fde9]  sm:text-sm"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-none border border-[#53fde9] px-3 py-2 mr-6 hover:border-b-4 duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailBox;
