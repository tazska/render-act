export interface ConnectedUser {
    id: number;
    email: string;
    nombre: string;
    rol: string;
}
export declare class ConnectedUsersStore {
    private readonly connectedUsers;
    add(socketId: string, user: ConnectedUser): void;
    remove(socketId: string): void;
    get(socketId: string): ConnectedUser | undefined;
    getAll(): ConnectedUser[];
    get count(): number;
}
