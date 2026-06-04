import { Controller, Get, Post, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { EstudianteService } from '../services/estudiante.service';
import { CreateEstudianteDto } from '../dto/create-estudiante.dto';
import { Estudiante } from '../entities/estudiante.entity';

@ApiTags('Estudiantes')
@Controller('estudiantes')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo estudiante' })
  @ApiResponse({ status: 201, description: 'Estudiante creado exitosamente', type: Estudiante })
  @ApiResponse({ status: 409, description: 'Ya existe un estudiante con ese código' })
  create(@Body() dto: CreateEstudianteDto) {
    return this.estudianteService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los estudiantes' })
  @ApiResponse({ status: 200, description: 'Lista de estudiantes', type: [Estudiante] })
  findAll() {
    return this.estudianteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un estudiante por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del estudiante' })
  @ApiResponse({ status: 200, description: 'Estudiante encontrado', type: Estudiante })
  @ApiResponse({ status: 404, description: 'Estudiante no encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.estudianteService.findOne(id);
  }
}
