import { Router, type Request, type Response } from "express";

const router = Router();

router.get("/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from production-grade Express API!" });
});

export default router;