import React from "react"
import {
  VictoryPie,
  VictoryTooltip,
  VictoryLegend
} from "victory"



export default class Ethnicity extends React.Component {
  render() {
    let colors = [
      "#FFA07A",
      "#FA8072",
      "#E9967A",
      "#F08080",
      "#CD5C5C",
      "#DC143C",
      "#B22222",
      "#FF0000",
      "#8B0000",
      "#FF7F50",
      "#FF6347",
      "#FF4500",
      "#FFD700",
      "#FFA500",
      "#FF8C00",
      "#E6E6FA",
      "#D8BFD8",
      "#DDA0DD",
      "#9400D3",
      "#4B0082",
      "#2F4F4F",
      "#708090",
      "#D2691E",
      "#D85F49",
      "#F66D3B",
      "#D92E1D",
      "#D73C4C",
      "#FFAF59",
      "#E28300",
      "#F6A57F",
    ]
    let ethnicity = {...this.props.props}

    //filter out null values
    Object.keys(ethnicity).forEach((key) => {
      if (!ethnicity[key]) delete ethnicity[key]
    })

    //Data for the donut chart
    let data = []
    for(let key in ethnicity){
      data.push({
        x: key,
        y: ethnicity[key],
        label: key + ": " + ethnicity[key],
      })
    }

    let legendData = []
    for (let key in ethnicity) {
      legendData.push({ name: key })
    }

    return (
      <div>
        <svg width={800}>
          <VictoryLegend
            standalone={false}
            orientation="horizontal"
            colorScale={colors}
            itemsPerRow={5}
            x={20}
            y={40}
            gutter={10}
            title="Ethnicities"
            centerTitle
            style={{ title: { fontSize: 30 } }}
            data={legendData}
          />
        </svg>
        <VictoryPie
          colorScale={colors}
          padding={5}
          innerRadius={100}
          labels={() => null}
          data={data}
          labelComponent={<VictoryTooltip constrainToVisibleArea />}
        />
      </div>
    )
  }
}


