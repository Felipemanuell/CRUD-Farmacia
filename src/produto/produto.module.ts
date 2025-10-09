import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CategoriaModule} from '../categoria/categoria.module';
import {Produto} from './entitites/produto.entity';
import { ProdutoController } from './controllers/produto.controller';
import { ProdutoService } from './services/produto.service';

@Module({
    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
    providers: [ProdutoService],
    controllers: [ProdutoController],
    exports: [],
})
export class ProdutoModule {}