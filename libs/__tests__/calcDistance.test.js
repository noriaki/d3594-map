import calcDistance, { displayDistance } from '../calcDistance';

const subject = (...args) => displayDistance(calcDistance(...args));

describe('#calcDistance(Point, Point)', () => {
  const o = { x: 0, y: 0 };
  it('Point = { x: integer, y: integer }', () => {
    expect(subject(o, { x: 0, y: 0 })).toBe(0);
    expect(subject(o, { x: 1, y: 0 })).toBe(1);
    expect(subject(o, { x: 0, y: 1 })).toBe(1);
    expect(subject(o, { x: 3, y: 4 })).toBe(5);
  });

  it('calculated to 1st decimel place', () => {
    expect(subject(o, { x: 1, y: 1 })).toBe(1.5); // sqrt(2) = 1.414...
    expect(subject(o, { x: 2, y: 2 })).toBe(2.9); // sqrt(8) = 2.828...
    expect(subject(o, { x: 1, y: 3 })).toBe(3.2); // sqrt(10) = 3.162...
    expect(subject(o, { x: 2, y: 3 })).toBe(3.7); // sqrt(13) = 3.605...
  });

  describe('[Real World]', () => {
    let castle;
    beforeEach(() => {
      castle = { x: 111, y: 1065 };
    });

    it('To Dispatch troops', () => {
      expect(subject(castle, { x: 111, y: 1066 })).toBe(1.0);
      expect(subject(castle, { x: 112, y: 1066 })).toBe(1.5);
      expect(subject(castle, { x: 118, y: 1064 })).toBe(7.1);
      expect(subject(castle, { x: 83, y: 1193 })).toBe(131.1);
    });

    it('To Station', () => {
      expect(subject(castle, { x: 585, y: 937 })).toBe(491.0);
      expect(subject(castle, { x: 249, y: 1150 })).toBe(162.1);
      expect(subject(castle, { x: 209, y: 1335 })).toBe(287.3);
    });
  });
});
