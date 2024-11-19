import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsOptional } from 'class-validator';
import { lowerCaseTransformer } from 'src/shared/transformers/lower-case.transformer';

export class CreateUserDto {
  @ApiProperty({ example: 'User' })
  @IsOptional()
  name: string;

  @ApiProperty({ example: 'User' })
  @IsOptional()
  username: string;

  @ApiProperty({ example: 'user@user.com' })
  @Transform(lowerCaseTransformer)
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '081330129266' })
  @IsOptional()
  @IsEmail()
  phone: string;

  @ApiProperty({ example: 'qweqweqwe' })
  @IsOptional()
  @IsEmail()
  password: string;
}
