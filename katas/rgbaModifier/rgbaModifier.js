// Please do not change the name of this function
const rgbaModifier = (rgbaStr, percent, opacity) => {
  var values = rgbaStr.match(/\d+/g);

  for (let i = 0; i < values.length - 1; i++) {
    values[i] = values[i] * (percent / 100 + 1);
    if (values[i] > 255) {
      values[i] = 255;
    }
    values[3] = opacity;
    console.log(values);
  }
  const valueString = `rgba(${values[0]},${values[1]},${values[2]},${values[3]})`;
  return valueString;
};

module.exports = { rgbaModifier };
