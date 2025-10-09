import {IsNotEmpty} from "class-validator";
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

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

    @ManyToOne (() => Categoria, (categoria) => categoria.produtos, {
        onDelete: 'CASCADE'
    })
    categoria: Categoria;
}