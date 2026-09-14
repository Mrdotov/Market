import { Repository } from 'typeorm';
import { CreateUserDto, UserResponseDto } from './entitys/user.dto';
import { UserEntity } from './entitys/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor (
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity> 
  ) {}

 
  async findAll():Promise<UserResponseDto[]> {
    const users = await this.userRepository.find();

    return users.map(user => new UserResponseDto(user))
  }
  
   async userCreate(
    userDto: CreateUserDto,
  ): Promise<UserResponseDto> {
  const user = this.userRepository.create({
    email: userDto.email,
    username: userDto.username,
    password: userDto.password,
  });

  const saveUser = await this.userRepository.save(user);

  return new UserResponseDto(saveUser);
  }

  
  async findOne(id: number): Promise<UserResponseDto | null> {
    const users = await this.userRepository.findOne({
      where: {id},
    });

    return users ? new UserResponseDto(users) : null;
      }

}
                     