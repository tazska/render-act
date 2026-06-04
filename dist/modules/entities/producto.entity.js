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
exports.Producto = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const categoria_entity_1 = require("../../modules/entities/categoria.entity");
let Producto = class Producto {
    id;
    nombre;
    descripcion;
    precio;
    stockActual;
    stockMinimo;
    categoria;
};
exports.Producto = Producto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID único del producto' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Producto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Laptop Dell', description: 'Nombre del producto' }),
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Laptop de 15 pulgadas con procesador i7',
        description: 'Descripción del producto',
    }),
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Producto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 999.99, description: 'Precio del producto' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Producto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 50, description: 'Stock actual del producto' }),
    (0, typeorm_1.Column)({ name: 'stock_actual' }),
    __metadata("design:type", Number)
], Producto.prototype, "stockActual", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10,
        description: 'Stock mínimo antes de generar alerta',
    }),
    (0, typeorm_1.Column)({ name: 'stock_minimo', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Producto.prototype, "stockMinimo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => categoria_entity_1.Categoria, description: 'Categoría del producto' }),
    (0, typeorm_1.ManyToOne)(() => categoria_entity_1.Categoria, (categoria) => categoria.productos, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'categoria_id' }),
    __metadata("design:type", categoria_entity_1.Categoria)
], Producto.prototype, "categoria", void 0);
exports.Producto = Producto = __decorate([
    (0, typeorm_1.Entity)('productos')
], Producto);
//# sourceMappingURL=producto.entity.js.map