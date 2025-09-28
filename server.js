import express from "express";
import cors from "cors";
import { readFile, writeFile } from "fs/promises";

const app = express();
app.use(cors({ origin: "https://dubiefe.github.io" }));
app.use(express.json());

const DATA_FILE = "./data.json";

app.get("/api/data", async (req, res) => {
  const data = await readFile(DATA_FILE, "utf-8");
  res.json(JSON.parse(data));
});

app.post("/api/save", async (req, res) => {
  await writeFile(DATA_FILE, JSON.stringify(req.body, null, 2));
  res.json({ success: true });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});