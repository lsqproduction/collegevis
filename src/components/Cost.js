import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryTooltip,
  VictoryLegend,
  VictoryTheme,
  VictoryLabel
} from "victory";
export  default class Cost extends React.Component {




  render() {
    let cost = {...this.props.props}
    //filter out null values && create chart data
    let inState = []
    let outState = []
    Object.keys(cost).forEach((key)=>{

      // if(!cost[key].inState || !cost[key].outState){
      //   delete cost[key];
      // } else {

        inState.push({
          a: new Date(cost[key].year, 1, 1),
          b: cost[key].inState

        })

        outState.push({
          a: new Date(cost[key].year, 1, 1),
          b: cost[key].outState,
        });
      // }
    })


    return (
      <div>
        <VictoryChart
          width={600}
          height={470}
          scale={{ x: "time" }}
          theme={VictoryTheme.material}
        >
          <VictoryLegend
            x={100}
            y={10}
            title="Tuition Cost"
            centerTitle
            orientation="horizontal"
            gutter={20}
            colorScale={["tomato", "green"]}
            style={{ title: { fontSize: 20 } }}
            data={[{ name: "In State" }, { name: "Out State" }]}
          />
          <VictoryLine
            style={{
              data: { stroke: "tomato" },
            }}
            data={inState}
            x="a"
            y="b"
            interpolation="natural"
            labels={({ datum }) => datum.b}
            labelComponent={<VictoryLabel renderInPortal angle={45} dy={-20} />}
          />
          <VictoryLine
            style={{
              data: { stroke: "green" },
            }}
            data={outState}
            x="a"
            y="b"
            interpolation="natural"
            labels={({ datum }) => datum.b}
            labelComponent={<VictoryLabel renderInPortal angle={45} dx={-20} />}
            // labelComponent={<VictoryTooltip constrainToVisibleArea />}
          />
        </VictoryChart>
      </div>
    );
  }
}


