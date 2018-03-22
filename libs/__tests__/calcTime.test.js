import calcDistance from '../calcDistance';
import calcTime from '../calcTime';

describe('#calcTime(Distance: float, Speed: integer)', () => {
  describe('[Real World]', () => {
    let subject;
    beforeEach(() => {
      const castle = { x: 111, y: 1065 };
      subject = (endPoint, speed, stationing) => (
        calcTime(calcDistance(castle, endPoint), speed, stationing)
      );
    });

    it('To Dispatch troops', () => {
      expect(subject({ x: 111, y: 1066 }, 142.74))
        .toBe(25);
      expect(subject({ x: 111, y: 1066 }, 72.45))
        .toBe(49);
      expect(subject({ x: 112, y: 1066 }, 142.74))
        .toBe(35);
      expect(subject({ x: 112, y: 1066 }, 72.45))
        .toBe((1 * 60) + 10);
      expect(subject({ x: 118, y: 1064 }, 142.74))
        .toBe((2 * 60) + 58);
      expect(subject({ x: 118, y: 1064 }, 72.45))
        .toBe((5 * 60) + 51);
      expect(subject({ x: 83, y: 1193 }, 142.74))
        .toBe((55 * 60) + 4);
      expect(subject({ x: 83, y: 1193 }, 72.45))
        .toBe((1 * 60 * 60) + (48 * 60) + 30);
    });

    it('To Station', () => {
      expect(subject({ x: 585, y: 937 }, 142.74, true))
        .toBe((1 * 60 * 60) + (8 * 60) + 47);
      expect(subject({ x: 585, y: 937 }, 72.45, true))
        .toBe((2 * 60 * 60) + (15 * 60) + 32);
      expect(subject({ x: 249, y: 1150 }, 142.74, true))
        .toBe((22 * 60) + 42);
      expect(subject({ x: 249, y: 1150 }, 72.45, true))
        .toBe((44 * 60) + 44);
      expect(subject({ x: 209, y: 1335 }, 142.74, true))
        .toBe((40 * 60) + 14);
      expect(subject({ x: 209, y: 1335 }, 72.45, true))
        .toBe((1 * 60 * 60) + (19 * 60) + 17);
    });
  });
});
