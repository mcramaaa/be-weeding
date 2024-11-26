import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'mchrama' })
  @IsNotEmpty()
  emailUserName: string;

  @ApiProperty({ example: 'qweqweqwe' })
  @IsNotEmpty()
  password: string;
}
