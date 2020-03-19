import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import config from './environments/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.port);
  Logger.log(`🚀 Server running on http://localhost:${config.port}`, 'Bootstrap');
}
bootstrap();
