import fs from "fs"
import { parsedMd, parseMd } from "./utils"
export const readMd = (filePath: string): parsedMd => parseMd(fs.readFileSync(filePath, "utf-8"))