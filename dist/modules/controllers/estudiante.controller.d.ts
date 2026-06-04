import { EstudianteService } from '../services/estudiante.service';
import { CreateEstudianteDto } from '../dto/create-estudiante.dto';
import { Estudiante } from '../entities/estudiante.entity';
export declare class EstudianteController {
    private readonly estudianteService;
    constructor(estudianteService: EstudianteService);
    create(dto: CreateEstudianteDto): Promise<Estudiante>;
    findAll(): Promise<Estudiante[]>;
    findOne(id: number): Promise<Estudiante>;
}
