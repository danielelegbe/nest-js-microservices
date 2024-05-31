import { initContract } from "@ts-rest/core";
import { usersContract } from "@/contracts/users";

const c = initContract();

export const contract = c.router(
  {
    users: usersContract,
  },
  {
    strictStatusCodes: true,
  },
);
