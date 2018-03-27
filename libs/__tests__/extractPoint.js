import extractPoint from '../extractPoint';

describe('extractPoint(string: input)', () => {
  const rows = [1, 12, 123, 1234];
  const cols = [2, 23, 234, 2345];
  const eachSubject = callback => (
    rows.forEach(row => cols.forEach(col => callback(row, col)))
  );

  describe('returning Point: { x: number, y: number }', () => {
    it('minimum case: `number,number` or with space `, `', () => {
      eachSubject((row, col) => {
        expect(extractPoint(`${row},${col}`)).toEqual({ x: row, y: col });
        expect(extractPoint(`${row}, ${col}`)).toEqual({ x: row, y: col });
      });
    });

    it('with parans: `(number,number)` or with space `, `', () => {
      eachSubject((row, col) => {
        expect(extractPoint(`(${row},${col})`)).toEqual({ x: row, y: col });
        expect(extractPoint(`(${row}, ${col})`)).toEqual({ x: row, y: col });
      });
    });
  });

  describe('returning null when unsupported format', () => {
    it('only left-side value: `number,` or with space `, ` or parans', () => {
      eachSubject((row) => {
        expect(extractPoint(`${row},`)).toBeNull();
        expect(extractPoint(`${row}, `)).toBeNull();
        expect(extractPoint(`(${row},)`)).toBeNull();
        expect(extractPoint(`(${row}, )`)).toBeNull();
      });
    });

    it('only right-side value: `,number` or with space `, ` or parans', () => {
      eachSubject((_, col) => {
        expect(extractPoint(`,${col}`)).toBeNull();
        expect(extractPoint(`, ${col}`)).toBeNull();
        expect(extractPoint(`(,${col})`)).toBeNull();
        expect(extractPoint(`(, ${col})`)).toBeNull();
      });
    });

    it('throw error when no args', () => {
      expect(() => { extractPoint(); }).toThrow();
    });

    it('no value', () => { expect(extractPoint('')).toBeNull(); });

    it('no comma', () => { expect(extractPoint('111')).toBeNull(); });

    it('only comma', () => {
      expect(extractPoint(',')).toBeNull();
      expect(extractPoint(', ')).toBeNull();
      expect(extractPoint(' ,')).toBeNull();
      expect(extractPoint(' , ')).toBeNull();
    });

    it('parans not closed', () => {
      expect(extractPoint('(1,2')).toBeNull();
      expect(extractPoint('1,2)')).toBeNull();
    });
  });
});
