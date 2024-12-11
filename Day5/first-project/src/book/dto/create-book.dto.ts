import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({
    message: 'Tên sách không được bỏ trống',
  })
  title: string;

  @IsNotEmpty({
    message: 'Tên tác giả không được bỏ trống',
  })
  author: string;

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
