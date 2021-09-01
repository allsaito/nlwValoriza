import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController"
import {ensureAdmin} from "./middlewares/ensureAdmin"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticate";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserComplimentsSendController = new ListUserSendComplimentsController()
const listUserComplimentsReceiveController = new ListUserReceiveComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

router.post("/users", createUserController.handle)
router.post("/tags", ensureAuthenticated, ensureAdmin , createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAuthenticated ,createComplimentController.handle)

router.get("/users/compliments/send", ensureAuthenticated, listUserComplimentsSendController.handle)
router.get("/users/compliments/receive", ensureAuthenticated , listUserComplimentsReceiveController.handle)
router.get("/tags", ensureAuthenticated , listTagsController.handle )
router.get("/users", ensureAuthenticated, listUsersController.handle)


export {router}