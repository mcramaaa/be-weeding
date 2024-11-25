import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCommentDto {
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

  @ApiProperty({ example: '' })
  @IsNotEmpty()
  weedingPathName: string;

  @ApiProperty({
    example: [
      {
        name: 'Jane Doe',
        userProfile: 'https://ui-avatars.com/api/name=Jane&background=random',
        content: 'This is a reply',
        createdAt: '2024-11-25T14:05:00.000Z',
      },
    ],
  })
  @IsOptional()
  replies: {
    name: string;
    userProfile: string;
    content: string;
    createdAt: Date;
  }[];
}
