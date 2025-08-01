import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.enableCors({
    origin: process.env.FRONTEND_URL || '*',
    credentials: true,
  });

  app.useStaticAssets(join(__dirname, '..', 'client'));

  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.get('/', (_, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'index.html'));
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
}
void bootstrap();
