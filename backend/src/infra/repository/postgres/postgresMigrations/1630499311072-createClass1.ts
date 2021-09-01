import { MigrationInterface, QueryRunner } from 'typeorm'

export class createClass11630499311072 implements MigrationInterface {
    name = 'createClass11630499311072'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE "linker" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, CONSTRAINT "PK_d153f58b32ae7391960fc006fd8" PRIMARY KEY ("id"))')
      await queryRunner.query('CREATE TABLE "subscriber" ("id" character varying NOT NULL, "email" character varying NOT NULL, "birthData" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "discordId" character varying, CONSTRAINT "PK_1c52b7ddbaf79cd2650045b79c7" PRIMARY KEY ("id"))')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP TABLE "subscriber"')
      await queryRunner.query('DROP TABLE "linker"')
    }
}
