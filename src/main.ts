import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'
import { SnacksModule } from './snacks/snacks.module';



async function bootstrap() {
  const app = await NestFactory.create(SnacksModule);
   app.useGlobalPipes(
    new ValidationPipe()
  )
  await app.listen(3000);
}
bootstrap();
