"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowsModule = void 0;
const common_1 = require("@nestjs/common");
const shows_controller_1 = require("./controllers/shows.controller");
const shows_service_1 = require("./use-cases/shows.service");
const shows_repository_1 = require("./domain/repositories/shows.repository");
const shows_prisma_repository_1 = require("./infrastructure/prisma/shows-prisma.repository");
let ShowsModule = class ShowsModule {
};
exports.ShowsModule = ShowsModule;
exports.ShowsModule = ShowsModule = __decorate([
    (0, common_1.Module)({
        controllers: [shows_controller_1.ShowController],
        providers: [
            shows_service_1.ShowService,
            {
                provide: shows_repository_1.ShowRepository,
                useClass: shows_prisma_repository_1.ShowPrismaRepository,
            },
        ],
    })
], ShowsModule);
//# sourceMappingURL=shows.module.js.map