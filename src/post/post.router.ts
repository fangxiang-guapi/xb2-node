import express from 'express';
import { requestUrl } from '../app/app.middleware'; 
import * as postController from './post.controller'; 
const router = express.Router(); 
/** 
* 内容列表 
*/ 
router.get('/posts', requestUrl, postController.index);
/** 
* 导出路由 
*/ 
export default router; 
/** 
* 创建内容 
*/ 
router.post('/posts', postController.store); 
/** 
* 更新内容 
*/ 
router.patch('/posts/:postId', postController.update);
/** 
* 删除内容 
*/ 
router.delete('/posts/:postId', postController.destroy); 