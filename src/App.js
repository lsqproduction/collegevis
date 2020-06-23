import React from 'react'
import Axios from "axios"
import './App.css'
import Profile from "./components/Profile"
import Program from "./components/Program"
import Ethnicity from "./components/Ethnicity"
import Cost from "./components/Cost"
import Nav from './components/Nav'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      year: "2018",
      school: null,
      isLoaded: false,
    }
     this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      year: event.target.value,
      program: this.state.school[`${event.target.value}`].academics
        .program_percentage,
      ethnicity: this.state.school[`${event.target.value}`].student.demographics
        .race_ethnicity,
      numStudents: this.state.school[`${event.target.value}`].student.size,
    });
  }

   async componentDidMount() {
    let { data } = await Axios.get(
      "https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=bkgXKZi02196XqYqxIqggDlyIfzOd76qGcW9clgn"
    )


     let costArr = { ...data.results[0] }
     let cost = []
     for (let key in costArr) {

       if (costArr[key].cost){
         cost.push({
           year: key,
           inState: costArr[key].cost.tuition.in_state,
           outState: costArr[key].cost.tuition.out_of_state,
         })
       }

     }
    cost.pop()

    let profile = {
      name: data.results[0].school.name,
      url: data.results[0].school.school_url,
      city: data.results[0].school.city,
      state: data.results[0].school.state,
      zip: data.results[0].school.zip,
    };

    this.setState({
      year: "2018",
      school: data.results[0],
      isLoaded: true,
      program: data.results[0]["2018"].academics.program_percentage,
      ethnicity: data.results[0]["2018"].student.demographics.race_ethnicity,
      cost,
      profile,
      numStudents: data.results[0]["2018"].student.size
    });
  }

  render() {

    const { profile,numStudents, program, ethnicity,cost} = this.state

    let jsonData = {profile, numStudents, program, ethnicity,cost}

    return (
      <div className="App max-w-full">
        <Nav
          id="nav"
          className="fixed w-full z-30 top-0 bg-white shadow-lg p-3 flex items-center justify-between"
          props={jsonData}
        />

        <section
          id="profile"
          className=" constainer mx-auto w-full bg-yellow-500 p-10 flex flex-col m-auto text-center lg:p-32 space-y-4"
        >
          <div>
            <Profile props={this.state} />
          </div>
          {/* <div className="w-full sm:w-1/2 flex items-center flex-col space-y-8 my-auto bg-yellow-500"> */}
          <div>
            <label>Choose a year:</label>
            <select
              name="year"
              id="year"
              value={this.state.year}
              onChange={this.handleChange}
            >
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
            </select>
            {/* </div> */}
          </div>
        </section>

        <section id="program" className="flex">
          <div className="flex w-10/12 p-20 pr-0">
            <div className="w-1/2 mt-10"></div>
            <Program props={this.state.program} />
          </div>
        </section>

        <section id="race" className="bg-yellow-500 flex">
          <div className="flex w-10/12 p-20 pr-0">
            <div className="w-1/2 mt-10"></div>
            <Ethnicity props={this.state.ethnicity} />
          </div>
        </section>

        <section id="tuition" className="flex items-center flex">

            <div className="w-1/3 mt-10"></div>
            <Cost props={this.state.cost} />

        </section>
      </div>
    );
  }
}


export default App
