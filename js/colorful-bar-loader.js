const HUE_DEG = 24;
const COUNT = 360 / HUE_DEG;

d3.select('.loader')
  .selectAll('span')
  .data(d3.range(COUNT).map(d => d + 1))
  .enter()
  .append('span')
  .style('background-color', d => d % 2 !== 0 ? `hsl(${HUE_DEG}, 100%, 65%)` : 'black');

let animation = new TimelineMax({repeate: -1});
animation.staggerFrom('.loader span', 0.5, {scaleX: 0}, 0.4);