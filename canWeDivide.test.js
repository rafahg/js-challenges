const isDivisible = require('./canWeDivide');


 test('divides if is divisible', () => {
   expect(isDivisible(12,2,6)).toBe(true);
   expect(isDivisible(11,4,5)).toBe(false);
   expect(isDivisible(12,4,5)).toBe(false);
 });

