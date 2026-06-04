import { CategoriaService } from '../../modules/services/categoria.service';
import { CreateCategoriaDto } from '../../modules/dto/create-categoria.dto';
export declare class CategoriaController {
    private readonly categoriaService;
    constructor(categoriaService: CategoriaService);
    create(createCategoriaDto: CreateCategoriaDto): Promise<import("../entities/categoria.entity").Categoria>;
    findAll(): Promise<import("../entities/categoria.entity").Categoria[]>;
    findOne(id: number): Promise<import("../entities/categoria.entity").Categoria>;
}
