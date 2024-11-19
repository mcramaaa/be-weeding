export interface JwtPayloadType {
  id: string;
  iat: number;
  exp: number;
  access: 'user' | 'admin';
}
