import React, { Component } from "react";
import Axios from "axios";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school : null,
      isLoaded: false
    }
  }

  async componentDidMount() {
    let { data } = await Axios.get(
      "https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=bkgXKZi02196XqYqxIqggDlyIfzOd76qGcW9clgn"
    );

    this.setState({
      school: data.results[0],
      isLoaded: true
    })
  }

  render() {
    let { school, isLoaded } = this.state
    if(!isLoaded){
      return <div>Loading...</div>
    }else{
      console.log(school['2018'])

      return (
        <div>
          <p>school profile</p>
          <p>{school.school.name}</p>
          {school.school.alias ? <p>{school.school.alias}</p> : <p></p>}
          <p>{school.school.school_url}</p>
          <p>{school.school.city}</p>
          <p>{school.school.state}</p>
          <p>{school.school.zip}</p>
          <p>Total # of Students: {school["2018"].student.size}</p>
        </div>
      );
    }
  }
}
