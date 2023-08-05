import express from "express";
import "reflect-metadata";
import userRouter from "./features/user/user.router";

const app = express();
const port = 3000;

// Add any necessary middleware here
app.use(express.json());

// Configure routes
app.use("/", userRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express with TypeScript!");
});

app.listen(port, () => {
  console.log(
    `Server is running on http://localhost:${port}`,
  );
});
