import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

// Check the consumer, including the intentional negative type assertion, against the installed package.
execFileSync(process.execPath, ['node_modules/typescript/bin/tsc', '--noEmit', '--strict', '--skipLibCheck', '--module', 'NodeNext', '--target', 'ES2022', 'src/consumer.ts'], { stdio: 'inherit' });
const output = execFileSync(process.execPath, ['src/consumer.ts'], { encoding: 'utf8' });
const result = JSON.parse(output);
assert.deepEqual(result, {"externalUserId": "fixture-user", "roles": ["reader"]});
console.log(result);
