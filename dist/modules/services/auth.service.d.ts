import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../modules/entities/user.entity';
import { CreateUserDto } from '../../modules/dto/create-user.dto';
import { LoginDto } from '../../modules/dto/login.dto';
export declare class AuthService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
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
    getProfile(userId: number): Promise<any>;
    refreshAccessToken(refreshToken: string): Promise<{
        access_token: any;
        usuario: {
            id: any;
            email: any;
            nombre: any;
            rol: any;
        };
    }>;
    logout(userId: number): Promise<{
        message: string;
    }>;
}
