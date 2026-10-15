// Shared Vega-Lite theme so every chart uses the same fonts and colours.
// Passed to vegaEmbed as `config` in index.html.
const THEME = {
  background: "#ffffff",
  font: "Work Sans",
  padding: 4,
  title: {
    font: "Fraunces",
    fontSize: 20,
    fontWeight: 600,
    color: "#1d2a30",
    anchor: "start",
    offset: 14,
    subtitleFont: "Work Sans",
    subtitleFontSize: 13,
    subtitleColor: "#5b6770",
    subtitlePadding: 6,
    subtitleLineHeight: 18
  },
  axis: {
    labelFont: "Work Sans",
    labelFontSize: 12,
    labelColor: "#3b4950",
    titleFont: "Work Sans",
    titleFontSize: 12,
    titleFontWeight: 500,
    titleColor: "#5b6770",
    gridColor: "#ece6dc",
    domainColor: "#cfc6b8",
    tickColor: "#cfc6b8"
  },
  legend: {
    labelFont: "Work Sans",
    labelFontSize: 12,
    labelColor: "#3b4950",
    titleFont: "Work Sans",
    titleFontSize: 12,
    titleFontWeight: 600,
    titleColor: "#1d2a30"
  },
  header: {
    labelFont: "Fraunces",
    labelFontSize: 15,
    labelColor: "#1d2a30"
  },
  text: {font: "Work Sans"},
  view: {stroke: null}
};
