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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const movement_entity_1 = require("../../modules/entities/movement.entity");
const producto_entity_1 = require("../../modules/entities/producto.entity");
const websocket_gateway_1 = require("../../websocket/websocket.gateway");
let MovementsService = class MovementsService {
    movementRepository;
    productRepository;
    stockGateway;
    constructor(movementRepository, productRepository, stockGateway) {
        this.movementRepository = movementRepository;
        this.productRepository = productRepository;
        this.stockGateway = stockGateway;
    }
    async create(dto, user) {
        const product = await this.productRepository.findOne({
            where: { id: dto.productId },
        });
        if (!product) {
            throw new common_1.NotFoundException(`Producto con ID ${dto.productId} no encontrado`);
        }
        if (dto.type === movement_entity_1.MovementType.SALIDA) {
            if (product.stockActual < dto.quantity) {
                throw new common_1.BadRequestException(`Stock insuficiente. Disponible: ${product.stockActual}, solicitado: ${dto.quantity}`);
            }
            product.stockActual -= dto.quantity;
        }
        else {
            product.stockActual += dto.quantity;
        }
        await this.productRepository.save(product);
        if (product.stockActual <= (product.stockMinimo ?? 0)) {
            this.stockGateway.sendLowStockAlert(product);
        }
        const movement = this.movementRepository.create({
            type: dto.type,
            quantity: dto.quantity,
            reason: dto.reason,
            product,
            user,
        });
        const saved = await this.movementRepository.save(movement);
        this.stockGateway.emitMovementCreated(saved);
        return saved;
    }
    async findAll() {
        return this.movementRepository.find({
            order: { date: 'DESC' },
        });
    }
    async findByProduct(productId) {
        const product = await this.productRepository.findOne({
            where: { id: productId },
        });
        if (!product) {
            throw new common_1.NotFoundException(`Producto con ID ${productId} no encontrado`);
        }
        return this.movementRepository.find({
            where: { product: { id: productId } },
            order: { date: 'DESC' },
        });
    }
    async findOne(id) {
        const movement = await this.movementRepository.findOne({ where: { id } });
        if (!movement) {
            throw new common_1.NotFoundException(`Movimiento con ID ${id} no encontrado`);
        }
        return movement;
    }
};
exports.MovementsService = MovementsService;
exports.MovementsService = MovementsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movement_entity_1.Movement)),
    __param(1, (0, typeorm_1.InjectRepository)(producto_entity_1.Producto)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, websocket_gateway_1.WebsocketGateway])
], MovementsService);
//# sourceMappingURL=movements.service.js.map