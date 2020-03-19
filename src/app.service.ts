import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name?): string {
    console.log('name', name);
    return name ? `Hello ${name}!` : 'Hello World!';
  }

  getQueryParam(name?): string {
    console.log('getQueryParam', name);
    return name ? `Hello ${name}!` : 'Hello World!';
  }
}
