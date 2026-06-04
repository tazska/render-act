import { Repository } from 'typeorm';
import { Categoria } from '../../modules/entities/categoria.entity';
import { CreateCategoriaDto } from '../../modules/dto/create-categoria.dto';
export declare class CategoriaService {
    private readonly categoriaRepository;
    constructor(categoriaRepository: Repository<Categoria>);
    create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria>;
    findAll(): Promise<Categoria[]>;
    findOne(id: number): Promise<Categoria>;
}
