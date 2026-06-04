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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEstudianteDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateEstudianteDto {
    nombre;
    apellido;
    codigo;
}
exports.CreateEstudianteDto = CreateEstudianteDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Juan', description: 'Nombre del estudiante', maxLength: 100 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre no puede estar vacío' }),
    (0, class_validator_1.MaxLength)(100, { message: 'El nombre no puede superar los 100 caracteres' }),
    __metadata("design:type", String)
], CreateEstudianteDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Pérez', description: 'Apellido del estudiante', maxLength: 100 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El apellido no puede estar vacío' }),
    (0, class_validator_1.MaxLength)(100, { message: 'El apellido no puede superar los 100 caracteres' }),
    __metadata("design:type", String)
], CreateEstudianteDto.prototype, "apellido", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024001', description: 'Código del estudiante', maxLength: 50 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El código no puede estar vacío' }),
    (0, class_validator_1.MaxLength)(50, { message: 'El código no puede superar los 50 caracteres' }),
    __metadata("design:type", String)
], CreateEstudianteDto.prototype, "codigo", void 0);
//# sourceMappingURL=create-estudiante.dto.js.map