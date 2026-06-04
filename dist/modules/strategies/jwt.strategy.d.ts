import { ConfigService } from '@nestjs/config';
import { UsersService } from '../../modules/services/users.service';
export interface JwtPayload {
    sub: number;
    email: string;
    rol: string;
}
declare const JwtStrategy_base: any;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private usersService;
    constructor(configService: ConfigService, usersService: UsersService);
    validate(payload: JwtPayload): Promise<{
        id: number;
        email: string;
        rol: import("../../common/enums/role.enum").Role;
        isActive: boolean;
    }>;
}
export {};
