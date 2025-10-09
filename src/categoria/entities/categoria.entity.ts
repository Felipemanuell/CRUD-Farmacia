import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entitites/produto.entity";

@Entity({name: "tb_categorias"})
export class Categoria {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    tipo: string
    

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    quantidade: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    modoDeUso: string

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produtos: Produto[];
}