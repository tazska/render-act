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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const ws_auth_guard_1 = require("./ws-auth.guard");
const connected_users_store_1 = require("./connected-users.store");
let WebsocketGateway = class WebsocketGateway {
    jwtService;
    connectedUsersStore;
    server;
    constructor(jwtService, connectedUsersStore) {
        this.jwtService = jwtService;
        this.connectedUsersStore = connectedUsersStore;
    }
    async handleConnection(client) {
        try {
            const token = client.handshake.auth?.token ||
                client.handshake.query?.token;
            if (!token) {
                client.disconnect();
                return;
            }
            const payload = this.jwtService.verify(token);
            const user = {
                id: payload.sub,
                email: payload.email,
                nombre: payload.email,
                rol: payload.rol,
            };
            this.connectedUsersStore.add(client.id, user);
            await client.join('inventory');
            if (user.rol === 'ADMIN') {
                await client.join('admins');
            }
            this.server
                .to('admins')
                .emit('users:online', this.connectedUsersStore.getAll());
        }
        catch {
            client.disconnect();
        }
    }
    handleDisconnect(client) {
        this.connectedUsersStore.remove(client.id);
        this.server
            .to('admins')
            .emit('users:online', this.connectedUsersStore.getAll());
    }
    async handleJoinAdminRoom(client) {
        await client.join('admins');
        client.emit('joinedAdminRoom', { room: 'admins' });
    }
    async handleProductWatch(client, productId) {
        await client.join(`product:${productId}`);
    }
    async handleProductUnwatch(client, productId) {
        await client.leave(`product:${productId}`);
    }
    emitMovementCreated(movement) {
        this.server.to('inventory').emit('movement:created', movement);
    }
    sendLowStockAlert(product) {
        if (!product || product.stockActual > (product.stockMinimo ?? 0)) {
            return;
        }
        this.server.to('admins').emit('stock:low', {
            id: product.id,
            nombre: product.nombre,
            descripcion: product.descripcion,
            stockActual: product.stockActual,
            stockMinimo: product.stockMinimo,
            categoria: product.categoria?.nombre,
            mensaje: `Stock bajo para ${product.nombre}`,
        });
    }
    emitProductCreated(producto) {
        this.server.to('inventory').emit('product:created', producto);
    }
    emitProductUpdated(producto) {
        this.server.to(`product:${producto.id}`).emit('product:updated', producto);
    }
    emitProductDeleted(id) {
        this.server.to('inventory').emit('product:deleted', { id });
    }
};
exports.WebsocketGateway = WebsocketGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_b = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _b : Object)
], WebsocketGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('joinAdminRoom'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], WebsocketGateway.prototype, "handleJoinAdminRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('product:watch'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _d : Object, Number]),
    __metadata("design:returntype", Promise)
], WebsocketGateway.prototype, "handleProductWatch", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('product:unwatch'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _e : Object, Number]),
    __metadata("design:returntype", Promise)
], WebsocketGateway.prototype, "handleProductUnwatch", null);
exports.WebsocketGateway = WebsocketGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    (0, common_1.UseGuards)(ws_auth_guard_1.WsAuthGuard),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, connected_users_store_1.ConnectedUsersStore])
], WebsocketGateway);
//# sourceMappingURL=websocket.gateway.js.map