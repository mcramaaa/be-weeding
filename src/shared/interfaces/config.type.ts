export interface AppConfig {
  nodeEnv: string;
  name: string;
  workingDirectory: string;
  frontendDomain?: string;
  backendDomain: string;
  port: number;
  apiPrefix: string;
  fallbackLanguage: string;
  headerLanguage: string;
}

export interface AppleConfig {
  appAudience: string[];
}

export interface AuthConfig {
  secret?: string;
  tokenExpires?: string;
  sessionExpires?: string;
  otpExpires?: number;
}

export interface DatabaseConfig {
  url?: string;
  type?: string;
  host?: string;
  port?: number;
  debug?: boolean;
  password?: string;
  name?: string;
  username?: string;
  synchronize?: boolean;
  maxConnections: number;
  sslEnabled?: boolean;
  rejectUnauthorized?: boolean;
  ca?: string;
  key?: string;
  cert?: string;
}

export interface FacebookConfig {
  appId?: string;
  appSecret?: string;
}

export interface FileConfig {
  accessKeyId?: string;
  secretAccessKey?: string;
  awsDefaultS3Bucket?: string;
  awsDefaultS3Url?: string;
  awsS3Region?: string;
  maxFileSize: number;
}

export interface GoogleConfig {
  clientId?: string;
  clientSecret?: string;
}

export interface MailConfig {
  port: number;
  host?: string;
  user?: string;
  password?: string;
  defaultEmail?: string;
  defaultName?: string;
  ignoreTLS: boolean;
  secure: boolean;
  requireTLS: boolean;
}

export interface CacheConfig {
  ttl: number;
  max: number;
  host: string;
  port: number;
  auth_pass: string;
  db: number;
}

export interface AllConfigType {
  app: AppConfig;
  apple: AppleConfig;
  cache: CacheConfig;
  auth: AuthConfig;
  database: DatabaseConfig;
  facebook: FacebookConfig;
  file: FileConfig;
  google: GoogleConfig;
  mail: MailConfig;
}
