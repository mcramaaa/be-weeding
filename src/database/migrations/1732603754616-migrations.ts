import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1732603754616 implements MigrationInterface {
  name = 'Migrations1732603754616';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_074a1f262efaca6aba16f7ed92\` ON \`users\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`user_name\` \`username\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`username\``);
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`username\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_fe0bb3f6520ee0469504521e71\` (\`username\`)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\``,
    );
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`username\``);
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`username\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`username\` \`user_name\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX \`IDX_074a1f262efaca6aba16f7ed92\` ON \`users\` (\`user_name\`)`,
    );
  }
}
