import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1732602940308 implements MigrationInterface {
  name = 'Migrations1732602940308';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`user_name\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_074a1f262efaca6aba16f7ed92\` (\`user_name\`)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` DROP INDEX \`IDX_074a1f262efaca6aba16f7ed92\``,
    );
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`user_name\``);
  }
}
