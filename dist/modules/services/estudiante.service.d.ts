import { Repository } from 'typeorm';
import { Estudiante } from '../entities/estudiante.entity';
import { CreateEstudianteDto } from '../dto/create-estudiante.dto';
export declare class EstudianteService {
    private readonly estudianteRepository;
    constructor(estudianteRepository: Repository<Estudiante>);
    create(dto: CreateEstudianteDto): Promise<Estudiante>;
    findAll(): Promise<Estudiante[]>;
    findOne(id: number): Promise<Estudiante>;
}
