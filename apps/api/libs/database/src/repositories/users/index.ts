import { pgTable, varchar } from 'drizzle-orm/pg-core';
import {
  withModificationDates,
  withIdPk,
} from '@app/database/repositories/helpers';
import { createSelectSchema } from 'drizzle-zod';

export const users = pgTable('users', {
  ...withIdPk,
  email: varchar('name', { length: 256 }),
  username: varchar('username', { length: 256 }),
  password: varchar('password', { length: 256 }),
  ...withModificationDates,
});

export const UserSchema = createSelectSchema(users);
export const UserInsertSchema = createSelectSchema(users);

export type UserModel = typeof users.$inferSelect;
export type UserInsert = typeof users.$inferInsert;
