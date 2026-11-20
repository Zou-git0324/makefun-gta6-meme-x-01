import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Entry program for the make.fun gta6-meme-x-01 bounty.
// The meme itself lives in the X post; this program only hands
// the post file to the grader by copying POST.json to /output.
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
console.log("POST.json copied to", outDir);
