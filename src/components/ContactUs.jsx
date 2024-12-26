import React from "react";

const contact = {
  address: "Los Angeles, California",
  phone: "+1 (562) 837 6951",
  email: "samratmalisetti@gmail.com",
};

export const ContactUs = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl"> Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{contact.address}</p>
        <p className="my-4">{contact.phone}</p>
        <a href="#" className="border-b">
          {contact.email}
        </a>
      </div>
    </div>
  );
};
