'use strict';

const SW = require('../lib/main');
const assert = require('assert');

describe('Player', () => {
  it('instantiates', () => {
    const player = new SW.Player({
      accessToken: 'ACCESS_TOKEN'
    });

    assert(player);
    assert(player instanceof SW.Player);
  });
});
