import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { lowerCaseTransformer } from 'src/shared/transformers/lower-case.transformer';

export class CreateAuthUserDto {
  @ApiProperty({ example: 'User' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'User' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ example: 'user@user.com' })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '081330129266' })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({ example: 'qweqweqwe' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
