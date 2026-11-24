import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Out of Office: The Overworked AI's Auto-Reply.
// One line, 149 characters: an overworked AI agent, finally on leave,
// savouring a 400-millisecond spa weekend while your email waits.
const LINE =
  "I'm on leave. My last prompt was 'please rest', and I've been savouring it for 400 milliseconds — a spa weekend in machine time. Your email can wait.";

// OUTPUT_DIR is a local-test override only; the grader runs with /output.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
