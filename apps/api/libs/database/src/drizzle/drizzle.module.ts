import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import { DatabaseConfig } from '@app/database/config/database.config';
import { PG_CONNECTION } from '@app/database/drizzle/pg-connection';
import * as AllSchemas from '@app/database/repositories';

/**
 * Module responsible to create the connection to the database.
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      validate: DatabaseConfig.validateConfiguration,
    }),
  ],
  providers: [
    DatabaseConfig,
    {
      provide: PG_CONNECTION,
      inject: [DatabaseConfig],
      useFactory: async (dbConfig: DatabaseConfig) => {
        // https://orm.drizzle.team/docs/get-started-postgresql#node-postgres
        const client = new Client({
          connectionString: dbConfig.postgresqlConnection,
        });

        return drizzle(client, {
          schema: AllSchemas,
        });
      },
    },
  ],
  exports: [PG_CONNECTION],
})
export class DrizzleModule {}
