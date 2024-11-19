import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthAdminService } from './auth-admin.service';
import { CreateAuthAdminDto } from './dto/create-auth-admin.dto';
import { UpdateAuthAdminDto } from './dto/update-auth-admin.dto';

@Controller('auth-admin')
export class AuthAdminController {
  constructor(private readonly authAdminService: AuthAdminService) {}

  @Post()
  create(@Body() createAuthAdminDto: CreateAuthAdminDto) {
    return this.authAdminService.create(createAuthAdminDto);
  }

  @Get()
  findAll() {
    return this.authAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authAdminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthAdminDto: UpdateAuthAdminDto) {
    return this.authAdminService.update(+id, updateAuthAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authAdminService.remove(+id);
  }
}
