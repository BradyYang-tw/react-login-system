// import {
//     Route,
//     Tags,
//     Controller,
//     Path,
//     Body,
//     Get,
//     Post,
//     Put,
//     Delete,
//     SuccessResponse,
//   } from 'tsoa';
import { Request, Response } from 'express';
import UserService from '../services/user.service';
import {UserConfig} from '../utilities/interface/user';

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
export default class UserController {
  public async add(req: Request, res: Response) {
    console.log(req.params);
    const { Username, Password } = req.body;
    const userData = { Username, Password };
    console.log('controller', userData);
 
    res.json(await service.add(userData));
  }

  public async get(req: Request, res: Response) {
    res.json(await service.get(1));
  }
}