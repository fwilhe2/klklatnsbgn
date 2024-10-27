import assert from 'node:assert';
import { test } from 'node:test';
import buildSpreadsheet from './index.js';

test('synchronous passing test', (t) => {
    assert.equal(buildSpreadsheet({}), '')
});