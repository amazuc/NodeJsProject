import { Repository } from 'typeorm';
import { UserEntity } from './user.entity/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    getUsers(): Promise<UserEntity[]>;
    findOne(username: string): Promise<UserEntity | undefined>;
    getUser(_id: number): Promise<UserEntity[]>;
    createUser(user: UserEntity): Promise<void>;
    updateUser(user: UserEntity): Promise<void>;
    deleteUser(user: UserEntity): Promise<void>;
    saveorupdateRefreshToken(refreshToken: string, id: string, refreshtokenexpires: any): Promise<void>;
}
