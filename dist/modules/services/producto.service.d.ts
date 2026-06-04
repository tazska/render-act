import { Repository } from 'typeorm';
import { Producto } from '../../modules/entities/producto.entity';
import { CreateProductoDto } from '../../modules/dto/create-producto.dto';
import { UpdateProductoDto } from '../../modules/dto/update-producto.dto';
import { Categoria } from '../../modules/entities/categoria.entity';
import { WebsocketGateway } from '../../websocket/websocket.gateway';
export declare class ProductoService {
    private readonly productoRepository;
    private readonly categoriaRepository;
    private readonly stockGateway;
    constructor(productoRepository: Repository<Producto>, categoriaRepository: Repository<Categoria>, stockGateway: WebsocketGateway);
    create(createProductoDto: CreateProductoDto): Promise<Producto>;
    findAll(): Promise<Producto[]>;
    findOne(id: number): Promise<Producto>;
    update(id: number, updateProductoDto: UpdateProductoDto): Promise<Producto>;
    remove(id: number): Promise<void>;
}
