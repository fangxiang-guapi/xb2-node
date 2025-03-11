import { Request, Response, NextFunction } from 'express'; 
import { UserModel } from './user.model'; 
import * as userService from './user.service';
/** 
 * 创建用户 
 */ 
export const store = async ( 
    request: Request, 
    response: Response, 
    next: NextFunction, 
  ) => { 
    // 准备数据 
    const { name, password } = request.body; 
   
    // 创建用户 
    try { 
      const data = await userService.createUser({ name, password });
       // 验证用户名 

      response.status(201).send(data); 
    } catch (error) { 
      const user = await userService.getUserByName(name); 
if (user) return next(Error('USER_ALREADY_EXIST')); 
      next(); 
    } 
  }; 