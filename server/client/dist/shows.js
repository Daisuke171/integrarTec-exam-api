var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
import * as dotEnv from 'dotenv';
dotEnv.config();
let currentPage = 0;
const itemsPerPage = 9;
let allShows = [];
let allArtists = [];
const apiUrlArt = (_a = process.env.API_FETCH_ARTISTS) !== null && _a !== void 0 ? _a : '';
const apiUrlShow = (_b = process.env.API_FETCH_SHOWS) !== null && _b !== void 0 ? _b : '';
function fetchShows() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(apiUrlShow);
        allShows = yield response.json();
        yield fetchArtists2();
        renderShows(currentPage);
    });
}
function fetchArtists2() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(apiUrlArt);
        allArtists = yield response.json();
    });
}
function renderShows(page) {
    const container = document.getElementById("shows");
    if (!container)
        throw new Error("Container not found");
    const pageIndicator = document.getElementById("pageIndicator");
    if (!pageIndicator)
        throw new Error("Page indicator not found");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    if (!nextBtn || !prevBtn)
        throw new Error("Buttons not found");
    container.innerHTML = "";
    const base = page * itemsPerPage;
    const limitedShows = allShows.slice(base, base + itemsPerPage);
    limitedShows.forEach((shows) => {
        const div = document.createElement("div");
        const date = shows.date.split("T")[0];
        const artistNames = shows.artistId
            .map((id) => { var _a; return (_a = allArtists.find((a) => a.id === id)) === null || _a === void 0 ? void 0 : _a.name; })
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
        div.onmouseenter = () => {
            div.style.transform = "translateY(-8px) scale(1.025)";
            div.style.boxShadow = "0 12px 36px 0 rgba(255,51,102,0.10)";
            div.style.borderColor = "var(--primary)";
        };
        div.onmouseleave = () => {
            div.style.transform = "";
            div.style.boxShadow = "0 8px 32px 0 rgba(31,38,135,0.18)";
            div.style.borderColor = "transparent";
        };
        div.innerHTML = `
      <h2 style="font-size:1.5rem;margin-bottom:0.7rem;color:var(--accent);font-weight:700;">${shows.name}</h2>
      <p style="color:var(--text-muted);font-size:1.05rem;"><strong>Location:</strong> ${shows.location}</p>
      <p style="color:var(--text-muted);font-size:1.05rem;"><strong>Date:</strong> ${date}</p>
      <p style="color:var(--text-muted);font-size:1.05rem;"><strong>Artist(s):</strong> ${artistNames ? artistNames : "No artist found"}</p>
      <hr />
    `;
        container.appendChild(div);
    });
    const totalPages = Math.ceil(allShows.length / itemsPerPage);
    pageIndicator.textContent = `Página ${page + 1} de ${totalPages}`;
    prevBtn.disabled = page === 0;
    nextBtn.disabled = page >= totalPages - 1;
}
function setupEventListeners() {
    var _a, _b;
    const startingPoint = 200;
    (_a = document.getElementById("prevBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            renderShows(currentPage);
            window.scrollTo({ top: startingPoint, behavior: "smooth" });
        }
    });
    (_b = document.getElementById("nextBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        const totalPages = Math.ceil(allShows.length / itemsPerPage);
        if (currentPage < totalPages - 1) {
            currentPage++;
            renderShows(currentPage);
            window.scrollTo({ top: startingPoint, behavior: "smooth" });
        }
    });
}
fetchShows();
setupEventListeners();
