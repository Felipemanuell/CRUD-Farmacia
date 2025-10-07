import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produto/entitites/produto.entity';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farmacia_droga_boa',
      entities: [Produto],
      synchronize: true,
    }),
    ProdutoModule,
    // Outros módulos podem ser importados aqui
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
