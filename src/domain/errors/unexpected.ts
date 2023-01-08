export class Unexpected extends Error {
  constructor() {
    super('Something went wrong. Try again later.');
    this.name = 'Unexpected';
  }
}
