import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('cloud scripts are repeatable installs from the repository root', async () => {
  for (const name of ['setup-cloud', 'maintain-cloud']) {
    const source = await readFile(new URL(`./${name}.sh`, import.meta.url), 'utf8');
    assert.match(source, /set -euo pipefail/);
    assert.match(source, /npm ci/);
    assert.doesNotMatch(source, /npm install|npm run dev/);
  }
});
