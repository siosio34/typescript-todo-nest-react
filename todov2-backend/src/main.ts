import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';

import { ApplicationModule  } from './app.module';
import { ValidationPipe } from './validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule );
  app.use(helmet());
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(3000);
}
bootstrap();
