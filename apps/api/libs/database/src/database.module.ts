import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from '@app/database/config/database.config';
import { DrizzleModule } from '@app/database/drizzle/drizzle.module';
import { UsersRepository } from '@app/database/repositories/users/users.repository';

const repositories = [UsersRepository];

@Module({
  providers: [...repositories, DatabaseConfig],
  imports: [
    ConfigModule.forRoot({
      validate: DatabaseConfig.validateConfiguration,
    }),
    DrizzleModule,
  ],
  exports: repositories,
})
export class DatabaseModule {}
