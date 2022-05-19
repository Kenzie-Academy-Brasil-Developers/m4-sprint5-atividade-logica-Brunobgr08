import { Router } from "express";
import userCreateController from "./controllers/user/userCreate.controller";
import userListController from "./controllers/user/userList.controller";
import userRetrieveController from "./controllers/user/userRetrieve.controller";
import userDeleteController from "./controllers/user/userDelete.controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users", userListController);
routes.get("/users/:id", userRetrieveController);
routes.delete("/users/:id", userDeleteController);

export default routes;
