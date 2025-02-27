import { Request, Response } from "express";

const express = require("express");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("users");
});

router.post("/", (req: Request, res: Response) => {
  const data = req.body;

  if (!data.name) {
    return res.status(400).send({ message: "error: name is required" });
  }

  res.send({ message: "post user data:", data });
});

module.exports = router;
