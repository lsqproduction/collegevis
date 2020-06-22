import React, { Component } from "react";
import Axios from "axios";
import Profile from "./Profile"
import Program from "./Program"
import Ethnicity from "./Ethnicity";
import Cost from "./Cost";


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "2018",
      school: null,
      isLoaded: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      year: event.target.value,
      program: this.state.school[`${event.target.value}`].academics
        .program_percentage,
      ethnicity: this.state.school[`${event.target.value}`].student.demographics
        .race_ethnicity
    });
  }

  async componentDidMount() {
    let { data } = await Axios.get(
      "https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=bkgXKZi02196XqYqxIqggDlyIfzOd76qGcW9clgn"
    );

     let costArr = { ...data.results[0] };

     let cost = []

     for (let key in costArr) {

       if (costArr[key].cost){
         cost.push({
           year: key,
           inState: costArr[key].cost.tuition.in_state,
           outState: costArr[key].cost.tuition.out_of_state,
         });
       }

     }
    cost.pop()


    this.setState({
      year: "2018",
      school: data.results[0],
      isLoaded: true,
      program: data.results[0]["2018"].academics.program_percentage,
      ethnicity: data.results[0]["2018"].student.demographics.race_ethnicity,
      cost,
    });

  }

  render() {


    return (
      <div>
        <Profile props={this.state} />
        <div>
          <label>Choose a year:</label>
          <select
            name="year"
            id="year"
            value={this.state.value}
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
        </div>

        <Ethnicity props={this.state.ethnicity}/>
        <Program props={this.state.program} />
        <Cost props={this.state.cost}/>
      </div>
    );
  }
}
