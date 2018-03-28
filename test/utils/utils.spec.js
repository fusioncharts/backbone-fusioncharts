import { expect } from 'chai';
import {
  isObject,
  isCallable,
  isSameObjectContent,
  isUndefined,
  deepCopyOf,
} from '../../src/utils/utils';

describe('isObject(value)', () => {
  it('should return true for object value', () => {
    expect(isObject({})).to.equal(true);
  });

  it('should return false for null value', () => {
    expect(isObject(null)).to.equal(false);
  });

  it('should return false for non-object values', () => {
    expect(isObject(undefined)).to.equal(false);
    expect(isObject(22)).to.equal(false);
    expect(isObject('string')).to.equal(false);
    expect(isObject(() => { })).to.equal(false);
    expect(isObject(true)).to.equal(false);
  });
});

describe('isCallable(value)', () => {
  it('should return true for function value', () => {
    expect(isCallable(() => { })).to.equal(true);
  });

  it('should return false for non-function values', () => {
    expect(isCallable(null)).to.equal(false);
    expect(isCallable(undefined)).to.equal(false);
    expect(isCallable({})).to.equal(false);
    expect(isCallable('string')).to.equal(false);
    expect(isCallable(true)).to.equal(false);
    expect(isCallable(33)).to.equal(false);
  });
});

describe('isSameObjectContent(obj1, obj2)', () => {
  it('should return true for two objects with same content of one deep', () => {
    expect(isSameObjectContent(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 2,
      },
    )).to.equal(true);
  });

  it('should return true for two objects with same content of multiple deeps', () => {
    expect(isSameObjectContent(
      {
        a: {
          c: 33,
          d: 77,
        },
        b: {
          e: 22,
        },
      },
      {
        a: {
          c: 33,
          d: 77,
        },
        b: {
          e: 22,
        },
      },
    )).to.equal(true);
  });

  it('should return false for two objects with different content', () => {
    expect(isSameObjectContent(
      {},
      {
        a: 44,
      },
    )).to.equal(false);

    expect(isSameObjectContent(
      {
        a: {
          c: 33,
          d: 77,
        },
        b: {
          e: 22,
        },
      },
      {
        a: {
          c: 33,
          d: 564,
        },
        b: {
          m: 255,
        },
      },
    )).to.equal(false);
  });

  expect(isSameObjectContent(
    {
      a: 2,
    },
    {
      b: 2,
    },
  )).to.equal(false);
});

describe('isUndefined(value)', () => {
  it('should return true for undefined value', () => {
    expect(isUndefined(undefined)).to.equal(true);
  });

  it('should return false for values other than undefined', () => {
    expect(isUndefined(78)).to.equal(false);
    expect(isUndefined('string')).to.equal(false);
    expect(isUndefined(null)).to.equal(false);
    expect(isUndefined({})).to.equal(false);
    expect(isUndefined(true)).to.equal(false);
    expect(isUndefined(() => { })).to.equal(false);
  });
});

describe('deepCopyOf(obj)', () => {
  it('should return different object instance with same content other than given object', () => {
    const obj = {
      a: 1,
      b: {
        c: 3,
        d: 44,
      },
    };
    const deepCopy = deepCopyOf(obj);
    expect(isSameObjectContent(obj, deepCopy) && obj !== deepCopy).to.equal(true);
  });
});
