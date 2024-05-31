import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

describe('AppController', () => {
  let appController: PostsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostsService],
    }).compile();

    appController = app.get<PostsController>(PostsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
