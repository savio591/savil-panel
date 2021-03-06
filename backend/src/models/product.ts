import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
class Product{
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    productName: string;

    @Column()
    productImage: string;

    @Column()
    productDescription: string;

    @Column()
    productCategory: string;

    @Column()
    productPrice: string;

    @Column()
    productQt: string;

    @Column('timestamp with time zone')
    productAddedAt: Date;

}

export default Product;