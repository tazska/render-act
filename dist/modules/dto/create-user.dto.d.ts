import { Role } from '../../common/enums/role.enum';
export declare class CreateUserDto {
    email: string;
    nombre: string;
    password: string;
    rol: Role;
}
