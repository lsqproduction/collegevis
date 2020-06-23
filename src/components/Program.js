import React from "react"
import { VictoryPie, VictoryTooltip, VictoryLegend} from "victory"


export default class Program extends React.Component {


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
    let programs = {...this.props.props}
    //filter out null values
    Object.keys(programs).forEach((key) => {
      if (!programs[key]) delete programs[key]
    })


    //Data for the donut chart
    let data = []
    for(let key in programs){
      data.push({
        x: key,
        y: programs[key],
        label: key +": "+ programs[key]})
    }

    let legendData = []
    for(let key in programs){
      legendData.push({name:key})
    }


    return (
      <div>
        <svg width={800} height={400}>
          <VictoryLegend
            standalone={false}
            itemsPerRow={10}
            colorScale={colors}
            x={20}
            y={40}
            gutter={20}
            title="Programs"
            centerTitle
            style={{ title: { fontSize: 30 } }}
            data={legendData}
          />
        </svg>

        <VictoryPie
          padding={5}
          colorScale={colors}
          innerRadius={100}
          data={data}
          labelRadius={130}
          labelComponent={<VictoryTooltip  constrainToVisibleArea />}
        />
      </div>
    )
  }
}

