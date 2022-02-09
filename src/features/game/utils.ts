export const getItemCount = (base: number) =>
  Math.pow(Math.round((base + 0.5) / 2) + 1, 2);

export const getColor = () => Math.floor(Math.random() * 255);

export interface RGBColor {
	r: number;
	g: number;
	b: number;
}

export const createColor = (): RGBColor => ({
	r: getColor(),
	g: getColor(),
	b: getColor(),
});
