import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class Products{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column("timestamp with time zone")
    createdAt: Date;

    @Column("timestamp with time zone")
    updatedAt: Date;

}