"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowService = void 0;
const common_1 = require("@nestjs/common");
const shows_repository_1 = require("../domain/repositories/shows.repository");
const shows_entity_1 = require("../domain/entities/shows.entity");
let ShowService = class ShowService {
    showRepository;
    constructor(showRepository) {
        this.showRepository = showRepository;
    }
    findAll() {
        return this.showRepository.findAll();
    }
    findOne(id) {
        return this.showRepository.findOne(id);
    }
    create(data) {
        return this.showRepository.create(new shows_entity_1.Show({
            name: data.name,
            location: data.location,
            date: data.date,
            artistId: data.artistId,
        }));
    }
    createMany(shows) {
        return Promise.all(shows.map((showData) => this.showRepository.create(new shows_entity_1.Show({
            name: showData.name,
            location: showData.location,
            date: showData.date,
            artistId: showData.artistId,
        }))));
    }
    update(id, data) {
        return this.showRepository.update(id, data);
    }
    delete(id) {
        return this.showRepository.delete(id);
    }
};
exports.ShowService = ShowService;
exports.ShowService = ShowService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [shows_repository_1.ShowRepository])
], ShowService);
//# sourceMappingURL=shows.service.js.map