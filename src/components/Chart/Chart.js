import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
const dataBarvalues = props.dataBar.map(dataBar => dataBar.value);
const totalMax = Math.max(...dataBarvalues);

  return (
    <div className="chart">
      {props.dataBar.map((dataBar) => (
        <ChartBar
          key={dataBar.label}
          value={dataBar.value}
          maxValue={totalMax}
          label={dataBar.label}
        />
      ))}
    </div>
  );
};

export default Chart;
