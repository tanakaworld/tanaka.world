import { advanceTo, clear } from 'jest-date-mock';
import { getAgeLocal } from '~/utils/date';

describe('getAgeLocal', () => {
  // mock date as 2019/08/01
  beforeEach(() => {
    advanceTo(new Date(2019, 7, 1, 0, 0, 0));
  });
  afterEach(() => {
    clear();
  });

  const assert = (birthdayStr: string, age: number) => {
    test(`${birthdayStr} is ${age} years old`, () => {
      expect(getAgeLocal(birthdayStr)).toBe(age);
    });
  };

  // future
  assert('2020-08-03', -2);
  assert('2020-08-02', -2);

  assert('2020-08-01', -1);
  assert('2020-07-31', -1);
  assert('2019-08-03', -1);
  assert('2019-08-02', -1);

  // past
  assert('2019-08-01', 0); // today
  assert('2019-07-31', 0);

  assert('2018-08-03', 0);
  assert('2018-08-02', 0);
  assert('2018-08-01', 1);
  assert('2018-07-31', 1);

  assert('2017-08-03', 1);
  assert('2017-08-02', 1);
  assert('2017-08-01', 2);
  assert('2017-07-31', 2);

  assert('1899-08-03', 119);
  assert('1899-08-02', 119);
  assert('1899-08-01', 120);
  assert('1899-07-31', 120);

  assert('1898-08-03', 120);
  assert('1898-08-02', 120);
  assert('1898-08-01', 121);
  assert('1898-07-31', 121);

  test('throws exception if the date format is unexpected', () => {
    // year is invalid
    expect(() => getAgeLocal('3000-08-01')).toThrowError();
    // month is invalid
    expect(() => getAgeLocal('2019-8-01')).toThrowError();
    expect(() => getAgeLocal('2019-13-01')).toThrowError();
    // date is invalid
    expect(() => getAgeLocal('2019-08-1')).toThrowError();
    expect(() => getAgeLocal('2019-08-32')).toThrowError();
    // others
    expect(() => getAgeLocal('')).toThrowError();
    expect(() => getAgeLocal('1-1-1')).toThrowError();
    expect(() => getAgeLocal('A')).toThrowError();
  });
});
