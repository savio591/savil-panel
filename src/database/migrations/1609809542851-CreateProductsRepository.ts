import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateProductsRepository1609809542851 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "productAddedAt",
                        type: "varchar",
                        isNullable: false
                    }
                    {
                        name: "productName",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "productDescription",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "productPrice",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "productQt",
                        type: "varchar",
                        isNullable: false
                    }

                ]
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }

}