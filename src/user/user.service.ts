import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PasswordService } from 'src/auth/password.service';
import { SearchType } from 'src/utils/SearchTypes.enum';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService, private readonly passwordService : PasswordService) {}



  async create(createUserDto: CreateUserDto) {
    const hashedPwd = await this.passwordService.hashPwd(createUserDto.password);
  
    return this.prisma.user.create({
      data: {
        cpf: createUserDto.cpf,
        nome: createUserDto.nome,
        telefone: createUserDto.telefone,
        email: createUserDto.email,
        planoId: createUserDto.planoId,
        password: hashedPwd
      },
      select: {
        ID: true,
        cpf: true,
        nome: true,
        telefone: true,
        email: true,
        planoId: true,
        plano: true
      }
    });
  }
  

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(cpf: string) {
      return this.prisma.user.findUnique({
    where: { cpf },
    select: { 
      ID: true,
      cpf: true,
      nome: true,
      telefone: true,
      email: true,
      planoId: true,
      plano: true
    }
  });
  }

  async update(cpf: string, updateUserDto: Partial<CreateUserDto>) {
    return this.prisma.user.update({
      where: { cpf },
      data: updateUserDto,
    });
  }

  async remove(cpf : string){
    return this.prisma.user.delete({
      where : {cpf}
    })
  }


  async isPwdMatch(pwd : string, comparedPwd : string) : Promise<boolean>{
    return this.passwordService.comparePwd(pwd, comparedPwd);
  }


  async validateUserByCpf(cpf : string, password : string){
    const user = await this.validateUser(SearchType.CPF, cpf);

    if (!user){
      return null;
    } else{
      return this.isPwdMatch(password, user.password);
    }

  }

  async validateUserByEmail(email : string, password : string){

    const user = await this.validateUser(SearchType.EMAIL, email);

    if (!user){
      return null;
    } else{
      return this.isPwdMatch(password, user!.password);  
    }

  }

  async validateUser(validationType : SearchType, valor : string ){
    
    switch(validationType){
      case SearchType.CPF: 
        return await this.prisma.user.findUnique({where : {cpf : valor}});
      case SearchType.EMAIL:
        return await this.prisma.user.findUnique({where : {email : valor}});
      case SearchType.TELEFONE:
        return await this.prisma.user.findFirst({where : {telefone : valor}});
      default: 
        throw new Error('Tipo de busca invalida')

    }
  }
  
  async validateUserByPhone(telefone : string, password : string){
    const user = await this.validateUser(SearchType.TELEFONE, telefone);

    return this.isPwdMatch(password, user!.password);
  }

}
