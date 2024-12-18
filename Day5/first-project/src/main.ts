import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';

function formatValidationErrors(errors: ValidationError[]): string[] {
  const flattenErrors = (error: ValidationError, parentPath = ''): string[] => {
    const propertyPath = parentPath
      ? `${parentPath}.${error.property}`
      : error.property;

    if (error.children && error.children.length > 0) {
      return error.children.flatMap((childError) =>
        flattenErrors(childError, propertyPath),
      );
    }

    return Object.values(error.constraints || {}).map((msg) =>
      propertyPath.includes('.') ? msg : `${msg}`,
    );
  };

  return errors.flatMap((error) => flattenErrors(error));
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        const messages = formatValidationErrors(errors);
        return new BadRequestException(messages);
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
