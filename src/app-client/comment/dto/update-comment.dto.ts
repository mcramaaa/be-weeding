import { ApiProperty } from '@nestjs/swagger';
// import { CreateCommentDto } from './create-comment.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateCommentDto {
  @ApiProperty({ example: 'Paidi' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'https://ui-avatars.com/api/name=Lily&background=random',
  })
  @IsNotEmpty()
  userProfile: string;

  @ApiProperty({ example: 'Tes komen 1234🙏🏻🫶🏻' })
  @IsNotEmpty()
  content: string;
}
