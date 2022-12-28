import chroma from 'chroma-js';

export const GetColorGradient = (color) => {
  const scale = chroma.scale([chroma(color).brighten(2), color, chroma(color).darken(2)]);
  return scale.colors(10);
};