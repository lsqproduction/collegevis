import React, { Component } from "react";
import Profile from "./Profile"
import Program from "./Program"
import { VictoryPie, VictoryTheme, VictoryChart, VictoryBar} from "victory";



export default class Dashboard extends Component {


  async componentDidMount() {
    console.log('something')
  }

  render() {

    return (
      <div>
        <Profile />

        {/* <VictoryPie
          // theme={VictoryTheme.material}
          colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
          data={[
            { x: "Cats", y: 35 },
            { x: "Dogs", y: 40 },
            { x: "Birds", y: 55 },
            { x: "Bug", y: 10 },
          ]}
          innerRadius={30}
        /> */}
        <Program />

      </div>
    );
  }
}
