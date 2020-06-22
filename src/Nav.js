import React from "react";


const links = [
  { name: "Program Percentages", url: "#program", target: false },
  { name: "Ethnicities", url: "#ethnicities", target: false },
  { name: "Tuition", url: "#tuition", target: false },
  {
    name: "University of Wisconsin-Madison",
    url: "https://www.wisc.edu",
    target: true,
  },
];

const Navbar = () => (
  <div className="bg-white shadow-lg p-3 flex items-center justify-between">
    <div className="hidden sm:block m-auto list-none flex space-x-10 font-family-montserrat">
      {links.map((link) => (
        <a key={link.name} target={link.target ? "_blank" : null} href={link.url}>
          {link.name}
        </a>
      ))}
      <button
        onClick={() => {
          window.print();
        }}
      >
        Print
      </button>
      <button
        onClick={() => {
          window.print();
        }}
      >
        Save PDF
      </button>
    </div>
  </div>
);

export default Navbar;
