import { Request, Response, NextFunction } from 'express'; 
/** 
* 输出请求地址 
*/ 
export const requestUrl = ( 
request: Request, 
response: Response, 
next: NextFunction, 
) => { 
console.log(request.url); 
next(); 


};
/** 
* 默认异常处理器 
*/ 
export const defaultErrorHandler = ( 
  error: any, 
  request: Request, 
  response: Response, 
  next: NextFunction, 
  ) => { 
  if (error.message) { 
  console.log('�', error.message);
  }
  // 省略其它代码 ...
  }