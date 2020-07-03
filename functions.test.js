const functions = require('./functions');
const { exception } = require('console');

// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposited of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matched anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual
test('Should be Brad Traversy object', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Brad', lastName: 'Traversy' });
});

// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;

  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex 
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in userNames', () => {
  userNames = ['John', 'Karen', 'admin'];

  expect(userNames).toContain('admin');
});

// Working with async data

// Promise
// test('user fetched name shouls be Leanne Graham', () => {
//   expect.assertions(1);
//   return functions.fetchUser()
//     .then(data => {
//       expect(data.name).toEqual('Leanne Graham')
//     });
// });

// Async Await
test('user fetched name shouls be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});