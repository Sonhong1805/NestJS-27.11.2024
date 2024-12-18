import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  ValidateNested,
} from 'class-validator';

class AuthorDto {
  @IsNotEmpty({
    message: 'Tên của tác giả không để trống',
  })
  firstName: string;

  @IsNotEmpty({
    message: 'Họ của tác giả không để trống',
  })
  lastName: string;
}

export class CreateBookDto {
  @IsNotEmpty({
    message: 'Tên sách không được bỏ trống',
  })
  title: string;

  @IsObject({
    message: 'Tác giả phải là 1 đối tượng',
  })
  @ValidateNested({ each: true })
  @Type(() => AuthorDto)
  author: AuthorDto;

  @IsNotEmpty({
    message: 'Mô tả không được bỏ trống',
  })
  description: string;

  @IsNotEmpty({
    message: 'Năm xuất bản không được bỏ trống',
  })
  @IsNumber(
    {},
    {
      message: 'Năm xuất bản phải là số',
    },
  )
  publishedYear: number;
}
