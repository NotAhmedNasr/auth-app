export type NodeEnv = 'development' | 'production';

export interface AppConfig {
  mongoUri: string;
  nodeEnv: NodeEnv;
  jwtSecret: String;
}

export default (): AppConfig => ({
  mongoUri: process.env.MONGODB_URI ?? 'mongodb://localhost:27017',
  nodeEnv: (process.env.NODE_ENV as NodeEnv) ?? 'production',
  jwtSecret: process.env.JWT_SECRET,
});
