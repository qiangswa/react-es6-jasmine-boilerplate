// node
import path from 'path';
// vendors
import React from 'react';
// project
import APP from 'App';

import logging from 'logwraper';

declare var jasmine;
declare var fixture

describe('Testing', () => {
  beforeAll(() => {
      jasmine.addMatchers({
        toBeDivisibleByTwo: function() {
          return {
                compare: function (actual, expected) {
                    return {
                        pass: (actual % 2) === 0
                    };
                }
            };
         }
      })

      fixture.setBase('tests/fixtures');
  });
  it('node import should work', () => {
    expect(path).not.toBe(null);
  });
  it('vendors import should work', () => {
    expect(React).not.toBe(null);
  });
  it('local import should exist', () => {
    expect(APP).not.toBe(null);
  });
  it('should be 2', () => {
    let sum = 1 + 1;
    expect(2).toBeDivisibleByTwo();
  });
  it('should load the json fixture',()=>{
    const result = fixture.load('test.json');
    expect(result).not.toBeNull();
  })

  it('should log the message',()=>{
    expect(logging).not.toBeNull();
    logging.info("hello logging");
  })
});
