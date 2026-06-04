"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const estudiante_service_1 = require("../services/estudiante.service");
const create_estudiante_dto_1 = require("../dto/create-estudiante.dto");
const estudiante_entity_1 = require("../entities/estudiante.entity");
let EstudianteController = class EstudianteController {
    estudianteService;
    constructor(estudianteService) {
        this.estudianteService = estudianteService;
    }
    create(dto) {
        return this.estudianteService.create(dto);
    }
    findAll() {
        return this.estudianteService.findAll();
    }
    findOne(id) {
        return this.estudianteService.findOne(id);
    }
};
exports.EstudianteController = EstudianteController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo estudiante' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Estudiante creado exitosamente', type: estudiante_entity_1.Estudiante }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Ya existe un estudiante con ese código' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estudiante_dto_1.CreateEstudianteDto]),
    __metadata("design:returntype", void 0)
], EstudianteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos los estudiantes' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de estudiantes', type: [estudiante_entity_1.Estudiante] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EstudianteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un estudiante por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID del estudiante' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Estudiante encontrado', type: estudiante_entity_1.Estudiante }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Estudiante no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EstudianteController.prototype, "findOne", null);
exports.EstudianteController = EstudianteController = __decorate([
    (0, swagger_1.ApiTags)('Estudiantes'),
    (0, common_1.Controller)('estudiantes'),
    __metadata("design:paramtypes", [estudiante_service_1.EstudianteService])
], EstudianteController);
//# sourceMappingURL=estudiante.controller.js.map