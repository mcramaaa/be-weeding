import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1732516045795 implements MigrationInterface {
  name = 'Migrations1732516045795';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`comment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`user_profile\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`replies\` json NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`wedding_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`hash\` varchar(255) NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), UNIQUE INDEX \`IDX_a000cca60bcf04454e72769949\` (\`phone\`), UNIQUE INDEX \`IDX_450a05c0c4de5b75ac8d34835b\` (\`password\`), UNIQUE INDEX \`IDX_f1a9842e79756a9f25ba8dbe46\` (\`hash\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`wedding\` (\`id\` int NOT NULL AUTO_INCREMENT, \`path_name\` varchar(255) NOT NULL, \`ladies_first\` tinyint NOT NULL DEFAULT 0, \`img\` text NOT NULL, \`event_date\` varchar(255) NOT NULL, \`man\` json NOT NULL, \`woman\` json NOT NULL, \`love_story\` json NULL, \`event\` json NOT NULL, \`gift\` json NOT NULL, \`stuff_gift\` json NOT NULL, \`user_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`comment\` ADD CONSTRAINT \`FK_3b68458523d4575a925cec20a35\` FOREIGN KEY (\`wedding_id\`) REFERENCES \`wedding\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`wedding\` ADD CONSTRAINT \`FK_5bc3c213c985bffe6902d78c154\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`wedding\` DROP FOREIGN KEY \`FK_5bc3c213c985bffe6902d78c154\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`comment\` DROP FOREIGN KEY \`FK_3b68458523d4575a925cec20a35\``,
    );
    await queryRunner.query(`DROP TABLE \`wedding\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_f1a9842e79756a9f25ba8dbe46\` ON \`users\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_450a05c0c4de5b75ac8d34835b\` ON \`users\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_a000cca60bcf04454e72769949\` ON \`users\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``,
    );
    await queryRunner.query(`DROP TABLE \`users\``);
    await queryRunner.query(`DROP TABLE \`comment\``);
  }
}
