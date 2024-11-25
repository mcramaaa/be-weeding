import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateWeddingDto {
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  userId: number;

  @ApiProperty({ example: 'rista-akbar' })
  @IsNotEmpty()
  pathName: string;

  @ApiProperty({ example: true })
  @IsOptional()
  ladiesFirst: boolean;

  @ApiProperty()
  @IsOptional()
  img: string;

  @ApiProperty()
  @IsOptional()
  eventDate: string;

  @ApiProperty({
    example: {
      name: 'John',
      fullName: 'John Doe',
      age: 30,
      gender: 'Male',
      anak: 'First child',
      bapak: 'Mr. Doe',
      ibu: 'Mrs. Doe',
      img: 'https://example.com/john.jpg',
    },
  })
  @IsNotEmpty()
  man: string;

  @ApiProperty({
    example: {
      name: 'Jane',
      fullName: 'Jane Doe',
      age: 28,
      gender: 'Female',
      anak: 'Second child',
      bapak: 'Mr. Doe',
      ibu: 'Mrs. Doe',
      img: 'https://example.com/jane.jpg',
    },
  })
  @IsNotEmpty()
  woman: string;

  @ApiProperty({
    example: [
      { label: 'First Meeting', description: 'We first met at a coffee shop.' },
      { label: 'Proposal', description: 'He proposed on a beach at sunset.' },
    ],
    isArray: true,
    required: false,
  })
  @IsOptional()
  loveStory?: string[];

  @ApiProperty({
    example: [
      {
        tittle: 'Wedding Ceremony',
        description: 'The official wedding ceremony.',
        day: 'Saturday',
        date: '2024-12-25',
        time: '10:00 AM',
        placeName: 'The Grand Hall',
        address: '123 Wedding St, Cityville',
        locations: 'https://example.com/map',
      },
    ],
    isArray: true,
  })
  @IsNotEmpty()
  event: string[];

  @ApiProperty({
    example: [
      {
        name: 'Wedding Gift',
        img: 'https://example.com/gift.jpg',
        bankName: 'Bank ABC',
        accountNumber: '123456789',
      },
    ],
    isArray: true,
  })
  @IsNotEmpty()
  gift: string[];

  @ApiProperty({
    example: [
      {
        labelPlace: 'Home',
        phone: '1234567890',
        name: 'John Doe',
        address: '456 Gift Lane, Cityville',
        kecamatan: 'Central',
        kabupaten: 'Cityville',
        provinsi: 'Stateville',
        posCode: '12345',
        location: 'https://example.com/gift-location',
      },
    ],
    isArray: true,
  })
  @IsOptional()
  stuffGift: string[];
}
