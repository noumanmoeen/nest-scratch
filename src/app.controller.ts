import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get()
  getRootRoute() {
    return "Hello";
  }
  @Get('/bye')
  getExitRoute() {
    return "Bye !!";
  }
}
