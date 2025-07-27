"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a, _b;
exports.__esModule = true;
var dotEnv = require("dotenv");
dotEnv.config();
var currentPage = 0;
var itemsPerPage = 9;
var allShows = [];
var allArtists = [];
var apiUrlArt = (_a = process.env.API_FETCH_ARTISTS) !== null && _a !== void 0 ? _a : '';
var apiUrlShow = (_b = process.env.API_FETCH_SHOWS) !== null && _b !== void 0 ? _b : '';
function fetchShows() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(apiUrlShow)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    allShows = _a.sent();
                    return [4 /*yield*/, fetchArtists2()];
                case 3:
                    _a.sent();
                    renderShows(currentPage);
                    return [2 /*return*/];
            }
        });
    });
}
function fetchArtists2() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(apiUrlArt)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    allArtists = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function renderShows(page) {
    var container = document.getElementById("shows");
    if (!container)
        throw new Error("Container not found");
    var pageIndicator = document.getElementById("pageIndicator");
    if (!pageIndicator)
        throw new Error("Page indicator not found");
    var nextBtn = document.getElementById("nextBtn");
    var prevBtn = document.getElementById("prevBtn");
    if (!nextBtn || !prevBtn)
        throw new Error("Buttons not found");
    container.innerHTML = "";
    var base = page * itemsPerPage;
    var limitedShows = allShows.slice(base, base + itemsPerPage);
    limitedShows.forEach(function (shows) {
        var div = document.createElement("div");
        var date = shows.date.split("T")[0];
        var artistNames = shows.artistId
            .map(function (id) { var _a; return (_a = allArtists.find(function (a) { return a.id === id; })) === null || _a === void 0 ? void 0 : _a.name; })
            .filter(Boolean)
            .join(", ");
        // Modern card styles
        div.style.background = "var(--card-bg)";
        div.style.borderRadius = "18px";
        div.style.boxShadow = "0 8px 32px 0 rgba(31,38,135,0.18)";
        div.style.padding = "2rem 1.5rem 1.5rem 1.5rem";
        div.style.margin = "1.2rem";
        div.style.maxWidth = "340px";
        div.style.minWidth = "220px";
        div.style.textAlign = "center";
        container.style.display = "grid";
        container.style.gridTemplateColumns = "repeat(3, 1fr)";
        container.style.gap = "2.5rem";
        container.style.justifyItems = "center";
        container.style.alignItems = "stretch";
        div.style.verticalAlign = "top";
        div.style.transition = "transform 0.18s, box-shadow 0.18s";
        div.style.border = "1.5px solid transparent";
        div.style.overflow = "hidden";
        div.onmouseenter = function () {
            div.style.transform = "translateY(-8px) scale(1.025)";
            div.style.boxShadow = "0 12px 36px 0 rgba(255,51,102,0.10)";
            div.style.borderColor = "var(--primary)";
        };
        div.onmouseleave = function () {
            div.style.transform = "";
            div.style.boxShadow = "0 8px 32px 0 rgba(31,38,135,0.18)";
            div.style.borderColor = "transparent";
        };
        div.innerHTML = "\n      <h2 style=\"font-size:1.5rem;margin-bottom:0.7rem;color:var(--accent);font-weight:700;\">".concat(shows.name, "</h2>\n      <p style=\"color:var(--text-muted);font-size:1.05rem;\"><strong>Location:</strong> ").concat(shows.location, "</p>\n      <p style=\"color:var(--text-muted);font-size:1.05rem;\"><strong>Date:</strong> ").concat(date, "</p>\n      <p style=\"color:var(--text-muted);font-size:1.05rem;\"><strong>Artist(s):</strong> ").concat(artistNames ? artistNames : "No artist found", "</p>\n      <hr />\n    ");
        container.appendChild(div);
    });
    var totalPages = Math.ceil(allShows.length / itemsPerPage);
    pageIndicator.textContent = "P\u00E1gina ".concat(page + 1, " de ").concat(totalPages);
    prevBtn.disabled = page === 0;
    nextBtn.disabled = page >= totalPages - 1;
}
function setupEventListeners() {
    var _a, _b;
    var startingPoint = 200;
    (_a = document.getElementById("prevBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        if (currentPage > 0) {
            currentPage--;
            renderShows(currentPage);
            window.scrollTo({ top: startingPoint, behavior: "smooth" });
        }
    });
    (_b = document.getElementById("nextBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        var totalPages = Math.ceil(allShows.length / itemsPerPage);
        if (currentPage < totalPages - 1) {
            currentPage++;
            renderShows(currentPage);
            window.scrollTo({ top: startingPoint, behavior: "smooth" });
        }
    });
}
fetchShows();
setupEventListeners();
