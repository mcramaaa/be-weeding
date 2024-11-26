import { Exclude } from 'class-transformer';
import { EntityHelper } from 'src/shared/utils/entity-helper';
import { make } from 'src/shared/utils/hash';
import {
  AfterLoad,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Wedding } from './wedding.entity';

@Entity()
export class Users extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column({ unique: true })
  @Exclude({ toPlainOnly: true })
  password: string;

  @Exclude({ toPlainOnly: true })
  public previousPassword: string;

  @AfterLoad()
  public loadPreviousPassword(): void {
    this.previousPassword = this.password;
  }

  @BeforeInsert()
  @BeforeUpdate()
  setPassword() {
    if (this.previousPassword !== this.password && this.password) {
      this.password = make(this.password);
    }
    if (!this.previousPassword) {
      this.previousPassword = this.password;
    }
  }

  @Column({ unique: true, nullable: true })
  hash?: string;

  @OneToMany(() => Wedding, (wedding) => wedding.id)
  weeding: Wedding[];
}
