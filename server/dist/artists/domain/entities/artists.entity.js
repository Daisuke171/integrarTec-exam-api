"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artist = void 0;
class Artist {
    id;
    name;
    members;
    origin;
    genres;
    image;
    status;
    createdAt;
    updatedAt;
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.Artist = Artist;
//# sourceMappingURL=artists.entity.js.map