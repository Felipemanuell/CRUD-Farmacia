import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produto/entitites/produto.entity';
import { ProdutoModule } from './produto/produto.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farmacia_droga_boa',
      entities: [Produto, Categoria],
      synchronize: true,
    }),
    ProdutoModule,
    CategoriaModule
    // Outros módulos podem ser importados aqui
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
