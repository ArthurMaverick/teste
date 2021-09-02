import { MigrationInterface, QueryRunner } from 'typeorm'

export class createClass11630597649662 implements MigrationInterface {
    name = 'createClass11630597649662'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE "subscriber" ("id" character varying NOT NULL, "email" character varying NOT NULL, "birthData" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "discordId" character varying, CONSTRAINT "PK_1c52b7ddbaf79cd2650045b79c7" PRIMARY KEY ("id"))')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP TABLE "subscriber"')
    }
}
