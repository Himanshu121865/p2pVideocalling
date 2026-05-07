import express from "express";
import type { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.post("/users", (req: Request, res: Response) => {
  console.log(req.body);

  res.json({
    message: "user created",
    recived: req.body,
  });
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
