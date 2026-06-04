import { AuthService } from '../../modules/services/auth.service';
import { CreateUserDto } from '../../modules/dto/create-user.dto';
import { LoginDto } from '../../modules/dto/login.dto';
import { RefreshTokenDto } from '../../modules/dto/refresh-token.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: CreateUserDto): Promise<any>;
    login(dto: LoginDto): Promise<{
        access_token: any;
        refresh_token: any;
        usuario: {
            id: any;
            email: any;
            nombre: any;
            rol: any;
        };
    }>;
    getProfile(req: any): Promise<any>;
    refresh(dto: RefreshTokenDto): Promise<{
        access_token: any;
        usuario: {
            id: any;
            email: any;
            nombre: any;
            rol: any;
        };
    }>;
    logout(req: any): Promise<{
        message: string;
    }>;
}
