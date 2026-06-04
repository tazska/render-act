import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { ConnectedUsersStore } from './connected-users.store';
import { Producto } from '../modules/entities/producto.entity';
import { Movement } from '../modules/entities/movement.entity';
export declare class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly jwtService;
    private readonly connectedUsersStore;
    server: Server;
    constructor(jwtService: JwtService, connectedUsersStore: ConnectedUsersStore);
    handleConnection(client: Socket): Promise<void>;
    handleDisconnect(client: Socket): void;
    handleJoinAdminRoom(client: Socket): Promise<void>;
    handleProductWatch(client: Socket, productId: number): Promise<void>;
    handleProductUnwatch(client: Socket, productId: number): Promise<void>;
    emitMovementCreated(movement: Movement): void;
    sendLowStockAlert(product: Producto): void;
    emitProductCreated(producto: Producto): void;
    emitProductUpdated(producto: Producto): void;
    emitProductDeleted(id: number): void;
}
