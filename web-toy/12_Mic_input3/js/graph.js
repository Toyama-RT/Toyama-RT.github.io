// Plotly繧剃ｽｿ縺｣縺ｦ繧ｰ繝ｩ繝輔ｒ謠上￥

const xArray = [];
const yArray = [];

function plot(xData, yData) {
  xArray.push(xData);
  yArray.push(yData);

  const trace = {
    x: xArray,
    y: yArray,
    type: 'scatter'
  };
  const data = [trace];
  const layout = {
    xaxis: {
      /* range: [0, 400],
       // title: 'x蛟､'*/
    },
    yaxis: {
      // range: [-1, 1],
      // title: 'distance / maxDistance) * 255'
    }
  };
  Plotly.newPlot('chart', data, layout, { displayModeBar: false });
}

const x2Array = [];
const y2Array = [];
function addPlot2(xData, yData) {
  x2Array.push(xData);
  y2Array.push(yData);
  Plotly.addTraces('chart', { x: x2Array, y: y2Array });
}

const x3Array = [];
const y3Array = [];
function addPlot3(xData, yData) {
  x3Array.push(xData);
  y3Array.push(yData);
  Plotly.addTraces('chart', { y: y3Array });
}
