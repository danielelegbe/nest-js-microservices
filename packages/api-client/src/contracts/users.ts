import { initContract } from "@ts-rest/core";
import { ErrorSchema } from "@/models";
import { z } from "zod";

const c = initContract();

const UserSchema = z.object({
  id: z.string().uuid(),
  username: z.string(),
  password: z.string(),
  email: z.string().email(),
  createdAt: z.string().date(),
  updatedAt: z.string().date(),
});

export const usersContract = c.router(
  {
    createUser: {
      method: "POST",
      path: "/",
      body: UserSchema.omit({ id: true, createdAt: true, updatedAt: true }),
      responses: {
        201: UserSchema,
      },
    },

    getUsers: {
      method: "GET",
      path: "/",
      responses: {
        200: UserSchema.array(),
      },
    },

    getUser: {
      method: "GET",
      path: "/:id",
      responses: {
        200: UserSchema,
        404: ErrorSchema,
      },
    },
  },
  {
    pathPrefix: "/users",
  },
);
