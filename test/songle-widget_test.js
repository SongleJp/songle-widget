'use strict';

import SW from '../lib/main';
import assert from 'power-assert';

describe('Player', () => {
  it('instantiates', () => {
    const player = new SW.Player({
      accessToken: 'ACCESS_TOKEN'
    });

    assert(player);
    assert(player instanceof SW.Player);
  });
});
