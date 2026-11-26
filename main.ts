// Fortune Cookie Funnies for Engineers — make.fun bounty
// Writes one fortune-cookie line (<=120 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "You will meet a tall, dark stranger in code review. It is your own commit from last year, with no message.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
