import { NestFactory } from '@nestjs/core';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { AppModule } from './app.module';
import { initGlobals } from '@app/domain';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initGlobals({
    eventEmitter: app.get(EventEmitter2),
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
