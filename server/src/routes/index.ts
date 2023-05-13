import { Request, Response, Router } from "express";
import { login, signup } from "../controllers/authentication";

const router: Router = Router();

router.post("/api/login", login);
router.post("/api/signup", signup);


export default router;
