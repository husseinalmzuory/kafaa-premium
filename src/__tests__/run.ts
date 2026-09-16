import { runTests } from './plans.test';

console.log('=== Running Kafaa Premium Tests ===\n');
const results = runTests();
let passedCount = 0;
let failedCount = 0;

for (const r of results) {
  if (r.passed) {
    passedCount++;
    console.log(`  ✓ PASS: ${r.name}`);
  } else {
    failedCount++;
    console.error(`  ✗ FAIL: ${r.name}`);
    console.error(`    Error: ${r.error}`);
  }
}

console.log(`\nResults: ${passedCount} passed, ${failedCount} failed (${results.length} total)`);

if (failedCount > 0) {
  process.exit(1);
} else {
  console.log('All tests passed successfully!\n');
}
