import {Router} from "express"
import {isAuthorized} from "../services/auth.service";

const router = new Router();

const response = {
  isAuthorized: false
};

router.get("/auth", (req, res) => {
  res.json(response);
});

router.post("/login", (req, res) => {
  response.isAuthorized = isAuthorized(req.body);
  res.json(response);
});

router.post("/logout", (req, res) => {
  response.isAuthorized = false;
  res.json(response);
});


export default router;
