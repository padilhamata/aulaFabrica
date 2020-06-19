import { Empregado } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Empregado()).toBeTruthy();
  });
});
