"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contract = exports.c = void 0;
var core_1 = require("@ts-rest/core");
var models_1 = require("./models");
var zod_1 = require("zod");
exports.c = (0, core_1.initContract)();
exports.contract = exports.c.router({
  getTest: {
    method: "GET",
    path: "/",
    responses: {
      200: models_1.PostSchema,
    },
    summary: "Get the test schema",
  },
  getPost: {
    method: "POST",
    path: "/",
    responses: {
      201: models_1.PostSchema,
    },
    body: zod_1.z.object({
      name: zod_1.z.string(),
    }),
    summary: "Post the test schema",
  },
});
