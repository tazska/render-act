import { Repository } from 'typeorm';
import { Movement } from '../../modules/entities/movement.entity';
import { CreateMovementDto } from '../../modules/dto/create-movement.dto';
import { Producto } from '../../modules/entities/producto.entity';
import { User } from '../../modules/entities/user.entity';
import { WebsocketGateway } from '../../websocket/websocket.gateway';
export declare class MovementsService {
    private readonly movementRepository;
    private readonly productRepository;
    private readonly stockGateway;
    constructor(movementRepository: Repository<Movement>, productRepository: Repository<Producto>, stockGateway: WebsocketGateway);
    create(dto: CreateMovementDto, user: User): Promise<Movement>;
    findAll(): Promise<Movement[]>;
    findByProduct(productId: number): Promise<Movement[]>;
    findOne(id: number): Promise<Movement>;
}
