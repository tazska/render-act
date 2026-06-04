import { MovementsService } from '../../modules/services/movements.service';
import { CreateMovementDto } from '../../modules/dto/create-movement.dto';
export declare class MovementsController {
    private readonly movementsService;
    constructor(movementsService: MovementsService);
    create(dto: CreateMovementDto, req: any): Promise<import("../entities/movement.entity").Movement>;
    findAll(): Promise<import("../entities/movement.entity").Movement[]>;
    findOne(id: number): Promise<import("../entities/movement.entity").Movement>;
    findByProduct(productId: number): Promise<import("../entities/movement.entity").Movement[]>;
}
