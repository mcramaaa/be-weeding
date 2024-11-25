import { EntityHelper } from 'src/shared/utils/entity-helper';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from './comment.entity';
import { Users } from './user.entity';

@Entity()
export class Wedding extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() // Gunakan tipe data DATE jika hanya tanggal
  pathName: string;

  @Column({ type: 'boolean', default: false })
  ladiesFirst: boolean;

  @Column({ type: 'text' }) // Simpan URL gambar dalam string
  img: string;

  @Column() // Gunakan tipe data DATE jika hanya tanggal
  eventDate: string;

  @Column({ type: 'json' }) // Simpan objek `man` dalam bentuk JSON
  man: string;

  @Column({ type: 'json' }) // Simpan objek `woman` dalam bentuk JSON
  woman: string;

  @Column({ type: 'json', nullable: true }) // Simpan array `loveStory` dalam JSON
  loveStory?: string[];

  @Column({ type: 'json' }) // Simpan array `event` dalam JSON
  event: string[];

  @Column({ type: 'json' }) // Simpan array `gift` dalam JSON
  gift: string[];

  @Column({ type: 'json' }) // Simpan array `stuffGift` dalam JSON
  stuffGift: string[];

  @ManyToOne(() => Users, (users) => users.id)
  user: Users[];

  @OneToMany(() => Comment, (comment) => comment.id)
  comments: Comment[];
}
