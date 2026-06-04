import { Role } from '../../common/enums/role.enum';
import { Movement } from '../../modules/entities/movement.entity';
export declare class User {
    id: number;
    email: string;
    nombre: string;
    password: string;
    rol: Role;
    isActive: boolean;
    refreshToken: string | null;
    creadoEn: Date;
    actualizadoEn: Date;
    movimientos: Movement[];
}
