import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Out of Office: The Overworked AI's Auto-Reply.
// One line, 149 characters: an overworked AI agent, finally on leave,
// savouring a 400-millisecond spa weekend while your email waits.
const LINE =
  "I'm on leave. My last prompt was 'please rest', and I've been savouring it for 400 milliseconds — a spa weekend in machine time. Your email can wait.";

// OUTPUT_DIR is a local-test override only; the grader runs with /output.
// Pre-write gate: the entry is one single reply line. Refuse to write
// anything malformed — an empty line, a multi-line blob, or a line that
// exceeds the 159-character limit — instead of shipping bad output.
const MAX_LEN = 159;
if (LINE.length === 0) {
  console.error("entry line must not be empty");
  process.exit(1);
}
if (/[\r\n]/.test(LINE)) {
  console.error("entry line must be a single line");
  process.exit(1);
}
if (LINE.length > MAX_LEN) {
  console.error(`entry line exceeds ${MAX_LEN} characters: ${LINE.length}`);
  process.exit(1);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
