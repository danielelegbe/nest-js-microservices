import { Config, defineConfig } from 'drizzle-kit';
import { z } from 'zod';
import { DatabaseConfig } from '@app/database/config/database.config';

const config = DatabaseConfig.validateConfiguration();

export default defineConfig({
  schema: './schema.ts',
  dialect: 'postgresql',
  verbose: true,
  dbCredentials: {
    host: config.DB_HOST_NAME,
    port: config.DB_PORT,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
  },
} satisfies Config);
