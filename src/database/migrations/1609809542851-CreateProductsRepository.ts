import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateProductsRepository1609809542851 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'increment',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'productAddedAt',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'productName',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'productDescription',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'productPrice',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'productQt',
                        type: 'varchar',
                        isNullable: true
                    }

                ]
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }

}