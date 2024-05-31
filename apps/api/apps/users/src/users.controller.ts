import { TsRestException, TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { contract } from 'api-client';
import { UsersService } from './users.service';
import { Controller } from '@nestjs/common';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @TsRestHandler(contract.users)
  async handler() {
    return tsRestHandler(contract.users, {
      createUser: async ({ body }) => {
        const user = await this.usersService.createUser(body);

        return {
          status: 201,
          body: user,
        };
      },
      getUsers: async () => {
        const users = await this.usersService.getUsers();

        return {
          status: 200,
          body: users,
        };
      },

      getUser: async ({ params }) => {
        const user = await this.usersService.getUserById(params.id);

        if (!user) {
          return new TsRestException(contract.users.getUser, {
            status: 404,
            body: {
              message: 'User not found',
            },
          });
        }

        return {
          status: 200,
          body: user,
        };
      },
    });
  }
}
