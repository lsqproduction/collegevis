import React from "react";
import { VictoryChart,  VictoryLine } from "victory";
export  default class Cost extends React.Component {




  render() {
    let cost = {...this.props.props}
    //filter out null values && create chart data
    let inState = []
    let outState = []
    Object.keys(cost).forEach((key)=>{

      if(!cost[key].inState || !cost[key].outState){
        delete cost[key];
      } else {

        inState.push({
          a: new Date(cost[key].year, 1, 1),
          b: cost[key].inState })

        outState.push({
          a: new Date(cost[key].year, 1, 1),
          b: cost[key].outState,
        });
      }
    })


    return (
      <div>

        <VictoryChart width={600} height={470} scale={{ x: "time"}}>
          <VictoryLine
            style={{
              data: { stroke: "tomato" },
            }}
            data={inState}
            x="a"
            y="b"
          />
          <VictoryLine
            style={{
              data: { stroke: "green" },
            }}
            data={outState}
            x="a"
            y="b"
          />
        </VictoryChart>
      </div>
    );
  }
}


