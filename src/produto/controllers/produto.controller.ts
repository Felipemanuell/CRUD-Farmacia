import {Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../entitites/produto.entity';
import { get } from 'http';

@Controller('/produtos')
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]> {
        return this.produtoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
        return this.produtoService.findById(id);
    }
    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findAllByNome(@Param('nome') nome: string): Promise<Produto[]> {
        return this.produtoService.findAllByNome(nome);
    }
}