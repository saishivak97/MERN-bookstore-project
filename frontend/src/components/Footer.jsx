import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "All Books",
      link: "/all-books",
    },
  ];
  return (
    <div className="bg-violet-800  px-12 py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-white">BookStore</h2>
        <div className="flex flex-col md:flex-row">
          {links.map((items, i) => (
            <Link
              to={items.link}
              key={i}
              className="ms-4 text-white hover:text-zinc-100"
            >
              {items.title}{" "}
            </Link>
          ))}
        </div>
      </div>
      <FaLinkedin />

      <hr className="my-4" />
      <p className="text-center p-0 text-white">
        © 2024 BookStore. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
