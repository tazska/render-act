import { Repository } from 'typeorm';
import { User } from '../../modules/entities/user.entity';
import { CreateUserDto } from '../../modules/dto/create-user.dto';
import { UpdateUserDto } from '../../modules/dto/update-user.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: number): Promise<User | null>;
    validateUserIsActive(userId: number): Promise<User>;
}
