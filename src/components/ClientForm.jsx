import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function ClientForm() {
  const form = useRef();

  const handleForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2dfeaqz",
        "template_ftwix38",
        form.current,
        "-3WdRGPsYejHm-MGE"
      )
      .then(() => {
        console.log("Malumot yuborldi");
      })
      .catch((err) => {
        console.log(err);

        console.log("Malumot yuborilmadi");
      });
  };

  return (
    <React.Fragment>
      <div className="container mx-auto">
        <form
          className="bg-blue-400 p-[25px] w-[60%] mx-auto"
          ref={form}
          onSubmit={(e) => handleForm(e)}
        >
          <label>
            Ism:
            <input className="border-2 w-full" type="text" name="user-name" />
          </label>
          <label>
            phone:
            <input
              className="border-2 w-full"
              type="number"
              name="user-phone"
            />
          </label>
          <label>
            email:
            <input className="border-2 w-full" type="email" name="user-email" />
          </label>
          <button
            type={"submit"}
            className="border-2 bg-green-400 rounded-[8px] p-[8px] mx-auto block"
          >
            Yuborish
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
