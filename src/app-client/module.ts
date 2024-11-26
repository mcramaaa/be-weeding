import { AuthUserModule } from 'src/auth/auth-user/auth-user.module';
import { CommentModule } from './comment/comment.module';
import { WeddingModule } from './wedding/wedding.module';

export const UserCLientModules = [AuthUserModule, WeddingModule, CommentModule];
