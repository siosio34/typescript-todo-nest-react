import { NestFactory } from '@nestjs/core';
import { ApplicationModule  } from './app.module';
import { ValidationPipe } from './validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule );
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(3000);
}
bootstrap();
