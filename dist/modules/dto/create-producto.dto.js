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
exports.CreateProductoDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateProductoDto {
    nombre;
    descripcion;
    precio;
    stockActual;
    stockMinimo;
    categoriaId;
}
exports.CreateProductoDto = CreateProductoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Laptop Dell',
        description: 'Nombre del producto',
        maxLength: 100,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre no puede estar vacío' }),
    (0, class_validator_1.MaxLength)(100, { message: 'El nombre no puede superar los 100 caracteres' }),
    __metadata("design:type", String)
], CreateProductoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Laptop de 15 pulgadas con procesador i7',
        description: 'Descripción opcional del producto',
        maxLength: 255,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255, {
        message: 'La descripción no puede superar los 255 caracteres',
    }),
    __metadata("design:type", String)
], CreateProductoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 999.99,
        description: 'Precio del producto',
    }),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }, { message: 'El precio debe ser un número con hasta 2 decimales' }),
    (0, class_validator_1.IsPositive)({ message: 'El precio debe ser positivo' }),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 50,
        description: 'Stock actual del producto',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'El stock debe ser un número' }),
    (0, class_validator_1.Min)(0, { message: 'El stock no puede ser negativo' }),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "stockActual", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10,
        description: 'Stock mínimo para alertas',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El stock mínimo debe ser un número' }),
    (0, class_validator_1.Min)(0, { message: 'El stock mínimo no puede ser negativo' }),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "stockMinimo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'ID de la categoría del producto',
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'El ID de categoría debe ser un número' }),
    (0, class_validator_1.IsPositive)({ message: 'El ID de categoría debe ser positivo' }),
    __metadata("design:type", Number)
], CreateProductoDto.prototype, "categoriaId", void 0);
//# sourceMappingURL=create-producto.dto.js.map