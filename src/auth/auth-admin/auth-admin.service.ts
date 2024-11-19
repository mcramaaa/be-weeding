import { Injectable } from '@nestjs/common';
import { CreateAuthAdminDto } from './dto/create-auth-admin.dto';
import { UpdateAuthAdminDto } from './dto/update-auth-admin.dto';

@Injectable()
export class AuthAdminService {
  create(createAuthAdminDto: CreateAuthAdminDto) {
    return 'This action adds a new authAdmin';
  }

  findAll() {
    return `This action returns all authAdmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authAdmin`;
  }

  update(id: number, updateAuthAdminDto: UpdateAuthAdminDto) {
    return `This action updates a #${id} authAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} authAdmin`;
  }
}
