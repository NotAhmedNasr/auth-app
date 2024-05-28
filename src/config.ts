export interface AppConfig {
  mongoUri: string;
}

export default (): AppConfig => ({
  mongoUri: process.env.MONGODB_URI ?? 'mongodb://localhost:27017',
});
