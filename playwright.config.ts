import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

// Read from default ".env" file.
dotenv.config();

// Alternatively, read from "../my.env" file.
dotenv.config({ path: path.resolve(__dirname, "..", "my.env") });

export default defineConfig({
  use: {},
});
