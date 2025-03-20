import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        cpf: string;
        nome: string;
        telefone: string;
        email: string;
        password: string;
        planoId: number;
    }>;
    findAll(): Promise<{
        cpf: string;
        nome: string;
        telefone: string;
        email: string;
        password: string;
        planoId: number;
    }[]>;
    findOne(cpf: string): Promise<{
        cpf: string;
        nome: string;
        telefone: string;
        email: string;
        password: string;
        planoId: number;
    } | null>;
    update(cpf: string, updateUserDto: UpdateUserDto): Promise<{
        cpf: string;
        nome: string;
        telefone: string;
        email: string;
        password: string;
        planoId: number;
    }>;
    remove(cpf: string): Promise<{
        cpf: string;
        nome: string;
        telefone: string;
        email: string;
        password: string;
        planoId: number;
    }>;
}
