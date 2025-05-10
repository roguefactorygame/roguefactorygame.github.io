export const Color = (r, g, b, a) => {
  console.log(`rgba(${r * 255},${g * 255},${b * 255},${a})`);
};

const CRIT_COLOR = Color(1, 1, 1, 1);
const FIRE_COLOR = Color(1, 0.65, 0.35, 1);
const POISON_COLOR = Color(0.263, 1, 0.518, 1);
const ICE_COLOR = Color(0.247, 0.78, 1, 1);
const LIGHTNING_COLOR = Color(0.98, 0.86, 0.4, 1);
