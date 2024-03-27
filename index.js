#!/usr/bin/env node

import { count } from "./utils.js";
import fs from "fs";
import * as thing from "./folders";

const note = process.argv[2];
const newNote = {
  content: note,
  id: Date.now(),
};
thing.counter(3);
