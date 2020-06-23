import React from "react";
import { render } from "@testing-library/react";


const links = [
  {
    name: "University of Wisconsin-Madison",
    url: "https://www.wisc.edu",
    target: true,
  },
  { name: "School Profile", url: "#profile", target: false },
  { name: "Program Percentages", url: "#program", target: false },
  { name: "Ethnicities", url: "#race", target: false },
  { name: "Tuition", url: "#tuition", target: false },
];

class Navbar extends React.Component {


  render() {
    let jsonData = {...this.props.props}

    var data =
      "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonData));

    console.log(data)

    var a = document.createElement("a");
    a.href = "data:" + data;
    a.download = "data.json";
    a.innerHTML = "download JSON";


    return (
      <div className="fixed w-full z-30 top-0 bg-white shadow-lg p-3 flex items-center justify-between">
        <div className="hidden sm:block m-auto list-none flex space-x-10 font-family-montserrat">
          {links.map((link) => (
            <a
              key={link.name}
              target={link.target ? "_blank" : null}
              href={link.url}
            >
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
          <a href={`data:${data}`} download="data.json">
            Download JSON
          </a>
        </div>
      </div>
    );
  }
}



export default Navbar;
