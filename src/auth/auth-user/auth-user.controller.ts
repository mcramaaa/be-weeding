import {
  Controller,
  Get,
  Post,
  Body,
  SerializeOptions,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthUserService } from './auth-user.service';
import { CreateAuthUserDto } from './dto/create-auth-user.dto';
import { LoginDto } from './dto/login.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthUserGuard } from 'src/shared/guards/auth.guard';
import { SessionUser } from 'src/shared/decorators/user.decorator';
import { Users } from 'src/database/entities/user.entity';
import { OkResponse, okTransform } from 'src/shared/utils/ok-response';
import { NullableType } from 'src/shared/interfaces/nullable.type';

@ApiTags('auth-user')
@Controller({
  path: 'auth/user',
  version: '1',
})
export class AuthUserController {
  constructor(private readonly authUserService: AuthUserService) {}

  @SerializeOptions({
    groups: ['me'],
  })
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  login(@Body() payload: LoginDto) {
    return this.authUserService.login(payload);
  }
  @Post('/register')
  create(@Body() payload: CreateAuthUserDto) {
    return this.authUserService.create(payload);
  }

  @ApiBearerAuth()
  @Get('/me')
  @UseGuards(AuthUserGuard)
  @HttpCode(HttpStatus.OK)
  async me(
    @SessionUser() user: Users,
  ): Promise<OkResponse<NullableType<Users>>> {
    return okTransform(await this.authUserService.me(user));
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authUserService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateAuthUserDto: UpdateAuthUserDto,
  // ) {
  //   return this.authUserService.update(+id, updateAuthUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authUserService.remove(+id);
  // }
}
