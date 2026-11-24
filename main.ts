// make.fun entry writer
// Writes the one-line answer to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR)
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const answer = `The office printer just asked me for a performance review. I said: "You're late, you jam every Tuesday, and nobody knows what you do." It promoted itself.`;

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');

console.log(answer.length);
