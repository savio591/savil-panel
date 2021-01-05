import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
class Product{
    @PrimaryGeneratedColumn("increment")
    id: string;

    @Column()
    productName: string;

    @Column()
    productDescription: string;

    @Column()
    productPrice: string;

    @Column()
    productQt: string;

    @Column("timestamp with time zone")
    productAddedAt: Date;

}

export default Product