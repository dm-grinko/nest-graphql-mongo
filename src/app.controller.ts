import { Controller, Get, Query, Param, Req, Post } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  // @Get(':framework')
  // getData(@Req() request: Request): Object {
  //   return {...request.params, ...request.query};
  // }

  // @Post('/api/users')
  // createUser(@Req() request: Request): Number {
  //   const {a, b} = request.body;
  //   return a + b;
  // }



}
