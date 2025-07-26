let currentPage = 0;
const itemsPerPage = 9;
let allShows: any[] = [];
let allArtists: any[] = [];

async function fetchShows() {
  const response = await fetch("http://localhost:3000/shows");
  allShows = await response.json();
  await fetchArtists2();
  renderShows(currentPage);
}

async function fetchArtists2() {
  const response = await fetch("http://localhost:3000/artists");
  allArtists = await response.json(); // <-- use allArtists
}

function renderShows(page: number) {
  const container = document.getElementById("shows");
  if (!container) throw new Error("Container not found");
  const pageIndicator = document.getElementById("pageIndicator");
  if (!pageIndicator) throw new Error("Page indicator not found");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  if (!nextBtn || !prevBtn) throw new Error("Buttons not found");

  container.innerHTML = "";

  const base = page * itemsPerPage;
  const limitedShows = allShows.slice(base, base + itemsPerPage);

  limitedShows.forEach((shows: any) => {
    const div = document.createElement("div");
    const date = shows.date.split("T")[0];
    const artistNames = shows.artistId
      .map((id: string) => allArtists.find((a) => a.id === id)?.name)
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
      <h2 style="font-size:1.5rem;margin-bottom:0.7rem;color:var(--accent);font-weight:700;">${
        shows.name
      }</h2>
      <p style="color:var(--text-muted);font-size:1.05rem;"><strong>Location:</strong> ${
        shows.location
      }</p>
      <p style="color:var(--text-muted);font-size:1.05rem;"><strong>Date:</strong> ${date}</p>
      <p style="color:var(--text-muted);font-size:1.05rem;"><strong>Artist(s):</strong> ${
        artistNames ? artistNames : "No artist found"
      }</p>
      <hr />
    `;
    container.appendChild(div);
  });

  const totalPages = Math.ceil(allShows.length / itemsPerPage);
  pageIndicator.textContent = `Página ${page + 1} de ${totalPages}`;

  (prevBtn as HTMLButtonElement).disabled = page === 0;
  (nextBtn as HTMLButtonElement).disabled = page >= totalPages - 1;
}

function setupEventListeners() {
  const startingPoint = 200;

  document.getElementById("prevBtn")?.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      renderShows(currentPage);
      window.scrollTo({ top: startingPoint, behavior: "smooth" });
    }
  });

  document.getElementById("nextBtn")?.addEventListener("click", () => {
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
