const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', ()=> {
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21', ()=> {
  expect(sum(20,1)).toBe(21);
});

// 2 + 5 เท่ากับ 7
test('2 + 5 เท่ากับ 7', ()=> {
  expect(sum(5,2)).toBe(7);
});

// 100 + 5 เท่ากับ 105
test('100 + 5 เท่ากับ 105', ()=> {
  expect(sum(100,5)).toBe(105);
});


// 9 + 6 เท่ากับ 15
test('9 + 6 เท่ากับ 15', ()=> {
  expect(sum(9,6)).toBe(15);
});


// 12 + 60 เท่ากับ 72
test('12 + 60 เท่ากับ 72', ()=> {
  expect(sum(12,60)).toBe(72);
});


