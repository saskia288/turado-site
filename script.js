/* =========================================
   TURA_DÓ — PORTFOLIO
   ========================================= */


/* -----------------------------------------
   ARTWORKS

   We will add your real works here next.
   Each artwork will look like this:

   {
     id: "clifford-attractor",
     category: "animations",
     title: "Moving Clifford Attractor",
     year: "2026",
     medium: "Generative animation",
     duration: "00:04",
     src: "works/clifford-attractor.mp4",
     description: "Description of the artwork."
   }

----------------------------------------- */

const artworks = [

];


/* -----------------------------------------
   BIO INFORMATION
----------------------------------------- */

const bio = {

  name: "Sofia Roxanne Karydi",

  introduction:
    "Interdisciplinary researcher and artist, particularly interested in the intersection of art and science, generative art and digital arts.",

  education: [
    "BSc Mathematics — City, University of London",
    "MA Philosophy of Science — NKUA, Athens",
    "MSc Cognitive Science — Université Paris Cité & Sorbonne Université, Paris"
  ],

  mediums:
    "Ceramics, Drawing & Painting, Moving Image, Movement & Dance, Animation",

  skills:
    "Python, JavaScript, Blender, DaVinci Resolve, Creative Coding"

};


/* -----------------------------------------
   WEBSITE
----------------------------------------- */

const categories = [
  "animations",
  "drawings",
  "engravings",
  "ceramics",
  "video"
];

const content = document.getElementById("content");


/* -----------------------------------------
   MEDIA
----------------------------------------- */

function createMedia(work, large = false) {

  const extension =
    work.src.split(".").pop().toLowerCase();

  const isVideo =
    ["mp4", "webm", "mov"].includes(extension);

  if (isVideo) {

    return `
      <video
        src="${work.src}"
        autoplay
        muted
        loop
        playsinline
        ${large ? "controls" : ""}
      ></video>
    `;

  }

  return `
    <img
      src="${work.src}"
      alt="${work.title}"
      loading="lazy"
    >
  `;
}


/* -----------------------------------------
   GALLERY PAGE
----------------------------------------- */

function showGallery(category) {

  const works =
    artworks.filter(
      work => work.category === category
    );

  content.innerHTML = `

    <h1 class="page-title">
      ${category}
    </h1>

    ${
      works.length > 0

      ? `

        <div class="gallery">

          ${works.map(work => `

            <a
              class="artwork"
              href="#work/${work.id}"
            >

              ${createMedia(work)}

              <div class="artwork-info">

                <span class="artwork-title">
                  ${work.title}
                </span>

                <span class="artwork-year">
                  ${work.year || ""}
                </span>

              </div>

            </a>

          `).join("")}

        </div>

      `

      : `

        <p class="empty-gallery">
          works coming soon
        </p>

      `
    }

  `;

}


/* -----------------------------------------
   INDIVIDUAL ARTWORK PAGE
----------------------------------------- */

function showArtwork(id) {

  const work =
    artworks.find(
      artwork => artwork.id === id
    );

  if (!work) {
    showGallery("animations");
    return;
  }


  const metadata = [

    work.year,
    work.medium,
    work.dimensions,
    work.duration

  ]
  .filter(Boolean)
  .join(" · ");


  content.innerHTML = `

    <section class="artwork-page">

      <a
        class="back-link"
        href="#${work.category}"
      >
        ← back to ${work.category}
      </a>


      <div class="artwork-large">

        ${createMedia(work, true)}

      </div>


      <div class="artwork-text">

        <h1>
          ${work.title}
        </h1>


        <div class="artwork-meta">
          ${metadata}
        </div>


        <div class="artwork-description">
          ${work.description || ""}
        </div>

      </div>

    </section>

  `;

}


/* -----------------------------------------
   BIO PAGE
----------------------------------------- */

function showBio() {

  content.innerHTML = `

    <section class="bio-page">


      <div class="bio-image">

        <!--
        Later we will add your portrait here:

        <img
          src="works/portrait.jpg"
          alt="Sofia Roxanne Karydi"
        >
        -->

      </div>


      <div class="bio-content">

        <h1>
          ${bio.name}
        </h1>


        <p class="bio-intro">
          ${bio.introduction}
        </p>


        <div class="bio-section">

          <h2>
            Education
          </h2>

          ${bio.education.map(item => `
            <p>${item}</p>
          `).join("")}

        </div>


        <div class="bio-section">

          <h2>
            Artistic Mediums
          </h2>

          <p>
            ${bio.mediums}
          </p>

        </div>


        <div class="bio-section">

          <h2>
            Software Skills
          </h2>

          <p>
            ${bio.skills}
          </p>

        </div>


      </div>

    </section>

  `;

}


/* -----------------------------------------
   ACTIVE NAVIGATION
----------------------------------------- */

function updateNavigation(section) {

  document
    .querySelectorAll("nav a")
    .forEach(link => {

      link.classList.remove("active");

      if (
        link.getAttribute("href") ===
        "#" + section
      ) {

        link.classList.add("active");

      }

    });

}


/* -----------------------------------------
   ROUTER
----------------------------------------- */

function route() {

  const hash =
    decodeURIComponent(
      window.location.hash.substring(1)
    );


  const page =
    hash || "animations";


  /* BIO */

  if (page === "bio") {

    updateNavigation("bio");

    showBio();

    window.scrollTo(0, 0);

    return;

  }


  /* INDIVIDUAL ARTWORK */

  if (page.startsWith("work/")) {

    const id =
      page.replace("work/", "");

    const work =
      artworks.find(
        artwork => artwork.id === id
      );


    if (work) {

      updateNavigation(
        work.category
      );

    }


    showArtwork(id);

    window.scrollTo(0, 0);

    return;

  }


  /* GALLERY */

  if (categories.includes(page)) {

    updateNavigation(page);

    showGallery(page);

  }

  else {

    updateNavigation(
      "animations"
    );

    showGallery(
      "animations"
    );

  }


  window.scrollTo(0, 0);

}


/* -----------------------------------------
   START WEBSITE
----------------------------------------- */

window.addEventListener(
  "hashchange",
  route
);

route();