import { MovementType } from '../entities/movement.entity';
export declare class CreateMovementDto {
    type: MovementType;
    quantity: number;
    productId: number;
    reason?: string;
}
