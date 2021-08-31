import { MigrationInterface, QueryRunner } from 'typeorm'

export class createClass1630428756922 implements MigrationInterface {
    name = 'createClass1630428756922'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE "login" ("id" character varying NOT NULL, "discordId" character varying NOT NULL, "access_token" character varying NOT NULL, "token_type" character varying NOT NULL, CONSTRAINT "PK_0e29aa96b7d3fb812ff43fcfcd3" PRIMARY KEY ("id"))')
      await queryRunner.query('CREATE TABLE "linker" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "loginId" character varying, CONSTRAINT "REL_ba219a3a140e628bf2a1932ef2" UNIQUE ("loginId"), CONSTRAINT "PK_d153f58b32ae7391960fc006fd8" PRIMARY KEY ("id"))')
      await queryRunner.query('CREATE TABLE "subscriber" ("id" character varying NOT NULL, "email" character varying NOT NULL, "birthData" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "linkerId" uuid, CONSTRAINT "REL_85ab4404181917c39ab6bb207e" UNIQUE ("linkerId"), CONSTRAINT "PK_1c52b7ddbaf79cd2650045b79c7" PRIMARY KEY ("id"))')
      await queryRunner.query('ALTER TABLE "linker" ADD CONSTRAINT "FK_ba219a3a140e628bf2a1932ef23" FOREIGN KEY ("loginId") REFERENCES "login"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
      await queryRunner.query('ALTER TABLE "subscriber" ADD CONSTRAINT "FK_85ab4404181917c39ab6bb207e4" FOREIGN KEY ("linkerId") REFERENCES "linker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE "subscriber" DROP CONSTRAINT "FK_85ab4404181917c39ab6bb207e4"')
      await queryRunner.query('ALTER TABLE "linker" DROP CONSTRAINT "FK_ba219a3a140e628bf2a1932ef23"')
      await queryRunner.query('DROP TABLE "subscriber"')
      await queryRunner.query('DROP TABLE "linker"')
      await queryRunner.query('DROP TABLE "login"')
    }
}
