export const getItemCount = (base: number) =>
  Math.pow(Math.round((base + 0.5) / 2) + 1, 2);

export const getColor = () => Math.floor(Math.random() * 255);

export const getRandomNumber = (len: number) =>
  Math.floor(Math.random() * (len - 1));

class RGBColor {
  r: number;
  g: number;
  b: number;

  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  copy() {
    return new RGBColor(this.r, this.g, this.b);
  }

  setTolerance(gap: number) {
    if (Math.random() >= 0.5) {
      this.r = Math.min(this.r + gap, 255);
      this.g = Math.min(this.g + gap, 255);
      this.b = Math.min(this.b + gap, 255);
    } else {
      this.r = Math.max(this.r - gap, 0);
      this.g = Math.max(this.g - gap, 0);
      this.b = Math.max(this.b - gap, 0);
    }
  }

  toString(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}

export const createColor = (): RGBColor => {
  const color = new RGBColor(
    getColor(),
    getColor(),
    getColor(),
  );

  return color;
};

export const createGameColors = (gap: number): {
  base: RGBColor;
  answer: RGBColor;
} => {
  const base = createColor();
  const answer = base.copy();
  answer.setTolerance(gap);

  return { base, answer };
};

export const produce = <S>(state: S, newState: Partial<S>): S =>
  ({ ...state, ...newState });
