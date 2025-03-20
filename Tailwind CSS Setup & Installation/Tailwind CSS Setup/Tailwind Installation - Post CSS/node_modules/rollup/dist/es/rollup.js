/*
  @license
	Rollup.js v4.9.1
	Sun, 17 Dec 2023 06:25:43 GMT - commit d56ac63dc0452820272a0d7536340277f7db68bf

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
export { version as VERSION, defineConfig, rollup, watch } from './shared/node-entry.js';
import './shared/parseAst.js';
import '../native.js';
import 'node:path';
import 'path';
import 'node:process';
import 'node:perf_hooks';
import 'node:fs/promises';
import 'tty';
