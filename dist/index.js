"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// index.ts
var dotenv = __toESM(require("dotenv"));
var import_express = __toESM(require("express"));
var import_uuid = require("uuid");
dotenv.config();
var App = (0, import_express.default)();
var port = process.env.PORT;
App.get("/", (request, response) => {
  return response.status(200).json({ message: "server is running ok" });
});
App.post("/user", (request, response) => {
  const users = [];
  const { name } = request.body;
  users.push({ id: (0, import_uuid.v4)(), name, created_at: /* @__PURE__ */ new Date() });
  return response.status(201).json({ data: users });
});
App.listen(port, () => {
  console.log("server is running on port 3000");
});
