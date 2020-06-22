import React, { Component } from "react";


export default class Profile extends Component {



                 render() {

                   let { year, school, isLoaded } = this.props.props;

                   if (!isLoaded) {
                     return <div>Loading...</div>;
                   } else {

                     let url = school.school.school_url;


                     return (
                       <div>
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
