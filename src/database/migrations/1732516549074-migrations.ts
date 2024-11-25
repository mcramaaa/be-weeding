import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1732516549074 implements MigrationInterface {
  name = 'Migrations1732516549074';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`comment\` CHANGE \`replies\` \`replies\` json NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`comment\` CHANGE \`replies\` \`replies\` json NOT NULL`,
    );
  }
}
