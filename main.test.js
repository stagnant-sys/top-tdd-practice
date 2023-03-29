import { capitalize, reverse, calculator, caesarCipher, analyseArray } from "./main";

test('Capitalize one word', () => {
  expect(capitalize('bonjour')).toBe('Bonjour');
});

test('Capitalize a sentence', () => {
  expect(capitalize('salut, comment allez-vous ?')).toBe('Salut, comment allez-vous ?');
});

test('Reverse a word', () => {
  expect(reverse('Bonjour')).toBe('ruojnoB');
});

test('Reverse a sentence', () => {
  expect(reverse('Bonjour, comment allez-vous ?')).toBe('? suov-zella tnemmoc ,ruojnoB');
});

test('Addition', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Subtraction', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('Division', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test('Muliplication', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('Cipher: one word', () => {
  expect(caesarCipher('Bonjour', 5)).toBe('Gtsotzw');
});

test('Cipher: wrap after Z and z', () => {
  expect(caesarCipher('Yy', 5)).toBe('Dd');
});

test('Cipher: wrap before A', () => {
  expect(caesarCipher('Aa', -5)).toBe('Vv');
});

test('Cipher: sentence with punctuation', () => {
  expect(caesarCipher('Bonjour, comment allez-vous ?', 5)).toBe('Gtsotzw, htrrjsy fqqje-atzx ?');
});

test('Find average', () => {
  expect(analyseArray([1,2,3,4,5,6,7,8,9]).average).toBe(5);
});

test('Find min', () => {
  expect(analyseArray([1,2,3,4,5,6,7,8,9]).min).toBe(1);
});

test('Find max', () => {
  expect(analyseArray([1,2,3,4,5,6,7,8,9]).max).toBe(9);
});

test('Find length', () => {
  expect(analyseArray([1,2,3,4,5,6,7,8,9]).length).toBe(9);
});
