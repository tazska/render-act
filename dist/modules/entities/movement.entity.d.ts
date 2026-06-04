import { Producto } from '../../modules/entities/producto.entity';
import { User } from '../../modules/entities/user.entity';
export declare enum MovementType {
    ENTRADA = "ENTRADA",
    SALIDA = "SALIDA"
}
export declare class Movement {
    id: number;
    type: MovementType;
    quantity: number;
    reason?: string;
    date: Date;
    product: Producto;
    user: User;
}
