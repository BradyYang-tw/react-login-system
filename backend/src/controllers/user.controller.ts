import {
  Route,
  Tags,
  Controller,
  Path,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Query,
  SuccessResponse,
} from "tsoa";
import { Request, Response } from "express";
import UserService from "../services/user.service";
import { UserConfig } from "../utilities/interface/user";

// @Route('/api/users')
// @Tags('User')
// export class UserController extends Controller {
//   /**
//      * 新增使用者
//      * @param requestBody
//      */
//   @SuccessResponse("201", "Created")
//   @Post()
//   public async add(@Body() requestBody: UserConfig): Promise<void> {
//     // this.setStatus(201); // set return status 201
//     // const { name, email } = req.body;
//     // const userData = { name, email };
//     // res.json(await UserService.add(userData));
//     console.log('requestBody', requestBody);
//     UserService.add(requestBody);
//     return;
//   }

// }

const service = new UserService();
@Route("users")
export class UserController extends Controller {
  @Post()
  public async add(@Body() requestBody:UserConfig) {
    this.setStatus(201); // set return status 201
    await service.add(requestBody);
    return;
  }
  @Get("{userId}")
  public async get(@Path() userId: number) {
    return service.get(userId);
  }
}
