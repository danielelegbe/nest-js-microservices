import { Inject, Injectable } from '@nestjs/common';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as usersSchema from './';
import { AbstractRepository } from '@app/database/repositories/abstract.repository';
import { PG_CONNECTION } from '@app/database/drizzle/pg-connection';
import { DatabaseConfig } from '@app/database/config/database.config';
import { UserModel, UserInsert, users } from './';

@Injectable()
export class UsersRepository extends AbstractRepository<
  typeof usersSchema,
  typeof users,
  UserModel,
  UserInsert
> {
  constructor(
    @Inject(PG_CONNECTION)
    protected readonly db: PostgresJsDatabase<typeof usersSchema>,
    protected readonly dbConfig: DatabaseConfig,
  ) {
    super(db, users, dbConfig);
  }
}
