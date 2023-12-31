import * as express from "express";
import { Router } from "express";
import {
  login,
  register,
  resetPassword,
} from "../../../controller/Stateless/auth/auth.controller";
import {
  checkUserExistence,
  verifyUser,
} from "../../../controller/Stateless/auth/verifyUser.controller";
import { createResetSession } from "../../../controller/Stateless/auth/session.controller";

const auth: Router = express.Router();

auth
  .post("/register", register)
  .post("/authenticate", checkUserExistence) //Authenticate the user
  .post("/login", verifyUser, login) //first verify the user then log-in the user
  .get("/createResetSession", createResetSession) //Reset all the variables in the app.locals object
  .put("/resetPassword", verifyUser, resetPassword);

export default auth;
