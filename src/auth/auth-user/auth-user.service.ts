import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthUserDto } from './dto/create-auth-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { isEmailRegex } from 'src/shared/utils/email.regex';
import { compare } from 'src/shared/utils/hash';
import { ErrorException } from 'src/shared/exception/error.exception';
import { JwtService } from '@nestjs/jwt';
import { CacheService } from 'src/core/cache/cache.service';
import { formatString } from 'src/shared/utils/string';
import { CACHE_KEY_AUTH } from 'src/shared/constants';
import { NullableType } from 'src/shared/interfaces/nullable.type';

@Injectable()
export class AuthUserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    private jwtService: JwtService,
    private cacheService: CacheService,
  ) {}
  async login(payload: LoginDto) {
    console.log(payload);
    const isEmail = isEmailRegex(payload.emailUserName);
    const user = await this.userRepository.findOneBy(
      isEmail
        ? { email: payload.emailUserName }
        : { username: payload.emailUserName },
    );
    if (!user) {
      throw new ErrorException(
        { email: 'Email not found' },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const comparePass = compare(payload.password, user.password);
    if (!comparePass) {
      throw new ErrorException(
        {
          password: 'Wrong password',
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const token = this.jwtService.sign({
      id: user.id,
      username: user.username,
      email: user.email,
      phone: user.phone,
      access: 'user',
    });

    try {
      await this.cacheService.set(
        formatString(CACHE_KEY_AUTH.SESSION, user.id),
        true,
        86400,
      );
    } catch (error) {
      throw new error();
    }
    return { token, user };
  }

  async create(payload: CreateAuthUserDto) {
    console.log(payload);
    const user = this.userRepository.create(payload);
    console.log(user);
    return await this.userRepository.save(user);
  }

  async me(user: Users): Promise<NullableType<Users>> {
    return this.userRepository.findOneBy({ id: user.id });
  }

  // findAll() {
  //   return `This action returns all authUser`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} authUser`;
  // }

  // update(id: number, updateAuthUserDto: UpdateAuthUserDto) {
  //   return `This action updates a #${id} authUser`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} authUser`;
  // }
}
