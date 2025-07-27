var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
import * as dotEnv from "dotenv";
dotEnv.config();
let currentPageArt = 0;
const itemsPerPageArt = 9;
let allArtists1 = [];
const apiUrlArt = (_a = process.env.API_FETCH_ARTISTS) !== null && _a !== void 0 ? _a : "";
console.log(apiUrlArt);
function fetchArtists() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(apiUrlArt);
        allArtists1 = yield response.json();
        renderArtists(currentPageArt);
    });
}
function renderArtists(page) {
    const container = document.getElementById("artists");
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
    const base = page * itemsPerPageArt;
    const limitedArtists = allArtists1.slice(base, base + itemsPerPageArt);
    limitedArtists.forEach((artist) => {
        const div = document.createElement("div");
        div.style.background = "var(--card-bg)";
        div.style.borderRadius = "18px";
        div.style.boxShadow = "0 8px 32px 0 rgba(31,38,135,0.18)";
        div.style.padding = "2rem 1.5rem 1.5rem 1.5rem";
        div.style.margin = "1.2rem";
        div.style.maxWidth = "300px";
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
    <h2 style="font-size:1.5rem;margin-bottom:0.7rem;color:var(--accent);font-weight:700;">${artist.name}</h2>
    <img src="${artist.image}" alt="${artist.name}" width="180" height="180" style="border-radius:12px;box-shadow:0 2px 12px #0003;margin-bottom:1rem;object-fit: cover;" />
    <p style="color:var(--text-muted);font-size:1.05rem;"><strong>Members:</strong> ${artist.members.join(", ")}</p>
    <p style="color:var(--text-muted);font-size:1.05rem;"><strong>Origin:</strong> ${artist.origin}</p>
    <p style="color:var(--text-muted);font-size:1.05rem;"><strong>Genres:</strong> ${artist.genres}</p>
    <p style="color:var(--text-muted);font-size:1.05rem;"><strong>Status:</strong> <span style="color:${artist.status ? "var(--accent)" : "var(--primary)"};font-weight:600;">${artist.status ? "Active" : "Not Active"}</span></p>
  `;
        container.appendChild(div);
    });
    const totalPages = Math.ceil(allArtists1.length / itemsPerPageArt);
    pageIndicator.textContent = `Página ${page + 1} de ${totalPages}`;
    prevBtn.disabled = page === 0;
    nextBtn.disabled = page >= totalPages - 1;
}
function setupEventListeners2() {
    var _a, _b;
    const startingPoint = 200;
    (_a = document.getElementById("prevBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        if (currentPageArt > 0) {
            currentPageArt--;
            renderArtists(currentPageArt);
            window.scrollTo({ top: startingPoint, behavior: "smooth" });
        }
    });
    (_b = document.getElementById("nextBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        const totalPages = Math.ceil(allArtists1.length / itemsPerPageArt);
        if (currentPageArt < totalPages - 1) {
            currentPageArt++;
            renderArtists(currentPageArt);
            window.scrollTo({ top: startingPoint, behavior: "smooth" });
        }
    });
}
fetchArtists();
setupEventListeners2();
