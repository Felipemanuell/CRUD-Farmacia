import {IsNotEmpty} from "class-validator";
import {Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity({name: 'tb_produtos'})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    laboratorio: string;

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    preco: number;

    @IsNotEmpty()
    @Column()
    foto: string;

}