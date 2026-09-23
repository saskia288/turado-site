/* =========================================
   TURA_DÓ — PORTFOLIO
   ========================================= */


/* =========================================
   ARTWORKS
   ========================================= */

const artworks = [

  /* ---------- ANIMATIONS ---------- */

  {
    id: "apparent-motion",
    category: "animations",
    title: "Apparent Motion",
    year: "2026",
    medium: "Generative animation",
    src: "works/apparent_motion_ochre_mauve.mp4",
    description:
      "A study of apparent motion: the perception of continuous movement produced by spatially separated visual events presented in temporal succession."
  },

  {
    id: "flicker-fusion",
    category: "animations",
    title: "Flicker Fusion",
    year: "2026",
    medium: "Generative animation",
    src: "works/flicker_fusion.mp40001-0480.mp4",
    description:
      "A study of temporal integration in vision, exploring the transition at which rapidly alternating visual stimuli cease to be perceived as separate events and are experienced as continuous."
  },

  {
    id: "gyroid",
    category: "animations",
    title: "Gyroid",
    year: "2026",
    medium: "Generative animation",
    src: "works/gyroid_0001-0120.mp4",
    description:
      "A generative study based on the gyroid, a triply periodic minimal surface described implicitly through combinations of trigonometric functions. Its continuous geometry repeats through three-dimensional space without self-intersection."
  },

  {
    id: "kanizsa",
    category: "animations",
    title: "Kanizsa",
    year: "2026",
    medium: "Generative animation",
    src: "works/kanizsa_cobalt_apricot.mp4",
    description:
      "A study of illusory contours and perceptual completion, in which the visual system constructs boundaries and surfaces despite the absence of corresponding physical edges."
  },

  {
    id: "landscape",
    category: "animations",
    title: "Landscape",
    year: "2026",
    medium: "Generative animation",
    src: "works/landscape_0001-0120.mp4",
    description:
      "A generative landscape constructed from a discrete field of elements whose spatial variation produces an emergent three-dimensional surface."
  },

  {
    id: "motion-aftereffect",
    category: "animations",
    title: "Motion Aftereffect",
    year: "2026",
    medium: "Generative animation",
    src: "works/pink_spiral_motion_aftereffect.mp4",
    description:
      "A study of motion adaptation: prolonged exposure to directional movement alters the response of motion-sensitive visual mechanisms, producing an illusory movement in the opposite direction when the stimulus changes or stops."
  },

  {
    id: "red-gold-swarm",
    category: "animations",
    title: "Red Gold Swarm",
    year: "2026",
    medium: "Generative animation",
    src: "works/red_gold_swarm.mp4",
    description:
      "A generative study of collective motion in which local interactions between individual agents give rise to coordinated global behaviour. Complex spatial patterns emerge without a central controller."
  },

  {
    id: "simultaneous-contrast",
    category: "animations",
    title: "Simultaneous Contrast",
    year: "2026",
    medium: "Generative animation",
    src: "works/simultaneous_contrast.mp4",
    description:
      "A study of simultaneous contrast, exploring how the perceived colour and brightness of a region are altered by the visual context that surrounds it."
  },

  {
    id: "small-study-with-music",
    category: "animations",
    title: "Small Study with Music",
    year: "2026",
    medium: "Animation",
    src: "works/small_study_with_music.mp4",
    description:
      "A small audiovisual study exploring the temporal relationship between moving visual forms and musical structure."
  },

  {
    id: "squares-in-disorder",
    category: "animations",
    title: "Squares in Disorder",
    year: "2026",
    medium: "Generative animation",
    src: "works/squares_in_disorder.mp40001-0240.mp4",
    description:
      "Inspired by Vera Molnár’s investigations of order and disorder, this generative study introduces controlled variations into an initially regular geometric system, exploring how simple algorithmic rules can produce progressively irregular visual structures."
  },

  {
    id: "blue-tears",
    category: "animations",
    title: "Blue Tears",
    year: "2025",
    medium: "Animation",
    src: "works/face_animation_with_tears.mp4",
    description: ""
  }

];


/* =========================================
   BIO
   ========================================= */

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


/* =========================================
   WEBSITE
   ========================================= */

const categories = [
  "animations",
  "drawings",
  "engravings",
  "ceramics",
  "video"
];

const content = document.getElementById("content");


/* =========================================
   MEDIA
   ========================================= */

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


/* =========================================
   GALLERY
   ========================================= */

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


/* =========================================
   INDIVIDUAL ARTWORK
   ========================================= */

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
  .filter(Boolean);


  content.innerHTML = `

    <section class="artwork-page">

      <a
        class="back-link"
        href="#${work.category}"
      >
        ← back to ${work.category}
      </a>


      <div class="artwork-detail">

        <div class="artwork-large">

          ${createMedia(work, true)}

        </div>


        <div class="artwork-text">

          <h1>
            ${work.title}
          </h1>


          <div class="artwork-meta">

            ${metadata.map(item => `
              <div>${item}</div>
            `).join("")}

          </div>


          ${
            work.description

            ? `
              <div class="artwork-description">
                ${work.description}
              </div>
            `

            : ""
          }

        </div>

      </div>

    </section>

  `;

}


/* =========================================
   BIO
   ========================================= */

function showBio() {

  content.innerHTML = `

    <section class="bio-page">


      <div class="bio-image">

        <!-- Portrait will go here later -->

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


/* =========================================
   ACTIVE NAVIGATION
   ========================================= */

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


/* =========================================
   ROUTER
   ========================================= */

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


/* =========================================
   START
   ========================================= */

window.addEventListener(
  "hashchange",
  route
);

route();
