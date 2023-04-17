// BEGIN
export default make = (numer, denom) => ({
  numer,
  denom,
  setNumer(value) {
    this.numer = value;
  },
  setDenom(value) {
    this.denom = value;
  },
  getNumer() {
    return this.numer;
  },
  getDenom() {
    return this.denom;
  },
  toString() {
    return `${this.numer}/${this.denom}`;
  },
  add(rational) {
    const newNumer = rational.getNumer() * this.denom + rational.getDenom() * this.numer;
    const newDenom = rational.getDenom() * this.denom;
    return make(newNumer, newDenom);
  },
});
// END
