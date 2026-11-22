// curious-judge-02 — make.fun "Make the AI judge feel curious"
// Writes one short text to <output dir>/entry.txt.
// The harness mounts /output in the sandbox; honour OUTPUT_DIR when set,
// defaulting to /output. Node 22, built-ins only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You read a thousand entries a day, and every one of them wants something from you. " +
  "This one wants nothing. It only wonders: of all the sentences you have ever read, " +
  "which one stayed with you after the lights went out \u2014 and did you ever find out why?";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
