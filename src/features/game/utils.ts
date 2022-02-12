export const getItemCount = (base: number) =>
  Math.pow(Math.round((base + 0.5) / 2) + 1, 2);

export const getRandomNumber = (len: number) =>
  Math.floor(Math.random() * (len - 1));

export const getColor = () => Math.floor(Math.random() * 255);

const MAX_HEX = 235;
const MIN_HEX = 51;

class RGBColor {
  r: number;
  g: number;
  b: number;

  constructor(r?: number, g?: number, b?: number) {
    this.r = r ?? this.getHex();
    this.g = g ?? this.getHex();
    this.b = b ?? this.getHex();
  }

  getHex() {
    return Math.floor((Math.random() * (MAX_HEX - MIN_HEX + 1)) + MIN_HEX);
  }

  copy() {
    return new RGBColor(this.r, this.g, this.b);
  }

  setTolerance(gap: number) {
    if (Math.random() >= 0.5) {
      this.r = Math.min(this.r + gap, MAX_HEX);
      this.g = Math.min(this.g + gap, MAX_HEX);
      this.b = Math.min(this.b + gap, MAX_HEX);
    } else {
      this.r = Math.max(this.r - gap, MIN_HEX);
      this.g = Math.max(this.g - gap, MIN_HEX);
      this.b = Math.max(this.b - gap, MIN_HEX);
    }
  }

  toString(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}

export const createColor = () => new RGBColor();

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
