import { PartialType } from '@nestjs/swagger';
import { CreateAuthAdminDto } from './create-auth-admin.dto';

export class UpdateAuthAdminDto extends PartialType(CreateAuthAdminDto) {}
