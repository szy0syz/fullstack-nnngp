/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import helmet from 'helmet';
import fastifyCookie from '@fastify/cookie';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  const globalPrefix = 'graphql';
  const port = process.env.PORT || 3333;
  const isProduction = process.env.NODE_ENV === 'production';

  const developmentContentSecurityPolicy = {
    directives: {
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        'https://unpkg.com/',
      ],
    },
  };

  // @ts-ignore
  await app.register(fastifyCookie, { secret: process.env.COOKIE_SECRET });

  app.use(
    helmet({
      contentSecurityPolicy: isProduction
        ? undefined
        : developmentContentSecurityPolicy,
    })
  );

  app.enableCors({
    origin: true,
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     skipMissingProperties: true,
  //     whitelist: true,
  //     transform: true,
  //     transformOptions: { enableImplicitConversion: true },
  //   })
  // );

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     transform: true,
  //     exceptionFactory: (errors: ValidationError[]) => {
  //       const errorsMessages = errors.map((error) => {
  //         Object.values(error.constraints);
  //       });
  //       return new BadRequestException(errorsMessages.toString());
  //     },
  //     forbidUnknownValues: false,
  //   })
  // );

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(`🚀 Application is running on: http://localhost:${port}/graphiql`);
}

bootstrap();
