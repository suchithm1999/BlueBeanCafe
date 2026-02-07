import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Configure CORS as needed for production
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
