import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { lowerCaseTransformer } from 'src/shared/transformers/lower-case.transformer';

export class CreateUserDto {
  @ApiProperty({ example: 'User' })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ example: 'User' })
  @IsOptional()
  @IsString()
  username: string;

  @ApiProperty({ example: 'user@user.com' })
  @Transform(lowerCaseTransformer)
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '081330129266' })
  @IsOptional()
  @IsString()
  phone: string;

  @ApiProperty({ example: 'qweqweqwe' })
  @IsOptional()
  @IsString()
  password: string;
}
