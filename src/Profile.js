import React, { Component } from "react";
import Axios from "axios";

export default class Profile extends Component {
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
                   this.setState({ year: event.target.value });
                 }

                 async componentDidMount() {
                   let { data } = await Axios.get(
                     "https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=bkgXKZi02196XqYqxIqggDlyIfzOd76qGcW9clgn"
                   );

                   this.setState({
                     school: data.results[0],
                     isLoaded: true,
                   });
                 }

                 render() {
                   console.log("props", this.props.props)
                   let { year, school, isLoaded } = this.props.props;

                   if (!isLoaded) {
                     return <div>Loading...</div>;
                   } else {
                     console.log(school);
                     let url = school.school.school_url;


                     return (
                       <div>
                         <h1>Profile</h1>
                         <p>{school.school.name}</p>
                         {school.school.alias ? (
                           <p>{school.school.alias}</p>
                         ) : (
                           <p></p>
                         )}
                         <a href={`https://${url}`}>
                           {school.school.school_url}
                         </a>
                         <p>{school.school.city}</p>
                         <p>{school.school.state}</p>
                         <p>{school.school.zip}</p>
                         {school[`${year}`].student.size ? (
                           <p>
                             Total # of Students:{" "}
                             {school[`${year}`].student.size}
                           </p>
                         ) : (
                           <p>Total number of Students no available</p>
                         )}
                       </div>
                     );
                   }
                 }
               }
