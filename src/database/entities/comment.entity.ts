import { EntityHelper } from 'src/shared/utils/entity-helper';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Wedding } from './wedding.entity';

@Entity()
export class Comment extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  userProfile: string;

  @Column()
  content: string;

  // @Column({ type: 'json', nullable: true })
  // replies: string;

  @Column({ type: 'json', nullable: true })
  replies: {
    name: string;
    userProfile: string;
    content: string;
    createdAt: Date;
  }[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => Wedding, (wedding) => wedding.pathName)
  wedding: Wedding;
}
