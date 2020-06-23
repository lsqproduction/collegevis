import React from "react"



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
]

class Navbar extends React.Component {


  render() {
    let jsonData = this.props.props

    var data =
      "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonData))



    return (
      <div className="fixed w-full z-30 top-0 bg-white shadow-lg p-3 flex items-center justify-between">
        <div className="hidden sm:block m-auto list-none flex space-x-10 font-family-montserrat">
          {links.map((link) => (
            <a
              className="text-black border-white hover:border-transparent hover:text-yellow-500 hover:bg-white mt-4 lg:mt-0"
              key={link.name}
              target={link.target ? "_blank" : null}
              href={link.url}
            >
              {link.name}
            </a>
          ))}
          <button
            className="text-black border-white hover:border-transparent hover:text-yellow-500 hover:bg-white mt-4 lg:mt-0"
            onClick={() => {
              window.print()
            }}
          >
            Print & Save PDF
          </button>
          <a
            className="text-black border-white hover:border-transparent hover:text-yellow-500 hover:bg-white mt-4 lg:mt-0"
            href={`data:${data}`}
            download="data.json"
          >
            Download JSON
          </a>
        </div>
      </div>
    )
  }
}



export default Navbar
