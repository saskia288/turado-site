/* =========================================
   TURA_DÓ — PORTFOLIO
   ========================================= */


/* =========================================
   ARTWORKS
   ========================================= */

const artworks = [

  /* =======================================
     ANIMATIONS
     ======================================= */

  {
    id: "apparent-motion",
    category: "animations",
    title: "Apparent Motion",
    year: "2026",
    medium: "Generative animation",
    software: "Blender · Python",
    src: "works/apparent_motion_ochre_mauve.mp4",
    description:
      "A study of apparent motion: the perception of continuous movement produced by spatially separated visual events presented in temporal succession. Rather than receiving continuous physical motion, the visual system integrates successive changes in position into the experience of a single object moving through space."
  },

  {
    id: "flicker-fusion",
    category: "animations",
    title: "Flicker Fusion",
    year: "2026",
    medium: "Generative animation",
    software: "Blender · Python",
    src: "works/flicker_fusion.mp40001-0480.mp4",
    description:
      "Observe the light as the rate of flickering increases. Notice the point at which the individual fluctuations become difficult to distinguish and the light begins to appear continuous.\n\nA visual demonstration of the flicker-fusion phenomenon. At relatively low temporal frequencies, rapidly alternating visual stimuli can still be perceived as distinct changes or flickers. As the frequency increases, successive signals are increasingly integrated over time by the visual system, until the individual fluctuations can no longer be perceptually resolved and the stimulus appears continuous. The frequency at which this transition occurs is known as the critical flicker-fusion frequency. The work explores this transition between physically discrete visual events and a perceptually continuous experience."
  },

  {
    id: "gyroid",
    category: "animations",
    title: "Gyroid",
    year: "2026",
    medium: "Generative animation",
    software: "Blender · Python",
    src: "works/gyroid_0001-0120.mp4",
    description:
      "A generative study based on the gyroid, a triply periodic minimal surface described implicitly through combinations of trigonometric functions. Its continuous geometry repeats periodically in three dimensions without self-intersection, producing an intricate spatial structure from a compact mathematical description."
  },

  {
    id: "kanizsa",
    category: "animations",
    title: "Kanizsa",
    year: "2026",
    medium: "Generative animation",
    software: "Blender · Python",
    src: "works/kanizsa_cobalt_apricot.mp4",
    description:
      "Based on the Kanizsa triangle, a classic visual illusion in which three incomplete circular figures arranged at specific orientations induce the perception of a bright triangular surface, despite no triangle being physically drawn. The phenomenon demonstrates perceptual completion: the visual system groups the separated elements into a coherent configuration and generates illusory contours where no luminance-defined edges exist. Rather than passively reproducing the visual input, perception therefore constructs the most plausible continuous surfaces and boundaries from incomplete information."
  },

  {
    id: "landscape",
    category: "animations",
    title: "Landscape",
    year: "2026",
    medium: "Generative animation",
    software: "Blender · Python",
    src: "works/landscape_0001-0120.mp4",
    description:
      "A generative landscape in which a regular grid of vertical elements is transformed by mathematically varying their heights. The resulting distribution produces peaks, valleys and wave-like formations, allowing a simple numerical system to emerge as a continuously changing three-dimensional terrain."
  },

  {
    id: "motion-aftereffect",
    category: "animations",
    title: "Motion Aftereffect",
    year: "2026",
    medium: "Generative animation",
    software: "Blender · Python",
    src: "works/pink_spiral_motion_aftereffect.mp4",
    description:
      "Fix your gaze on the centre of the spiral while it moves. Continue looking at the centre until the motion stops or changes, then observe the apparent movement that follows.\n\nA study of the motion aftereffect, a perceptual phenomenon in which prolonged exposure to movement in one direction can cause a subsequently stationary stimulus to appear to move in the opposite direction. This occurs through adaptation in motion-sensitive mechanisms of the visual system: neural populations responding strongly to the adapting direction reduce their responsiveness over time, temporarily shifting the balance of activity when the motion ceases."
  },

  {
    id: "red-gold-swarm",
    category: "animations",
    title: "Red Gold Swarm",
    year: "2026",
    medium: "Generative animation",
    software: "Blender · Python",
    src: "works/red_gold_swarm.mp4",
    description:
      "A generative study of collective motion in which interactions between individual agents give rise to coordinated global behaviour. Complex spatial patterns emerge from repeated local interactions rather than from a single central controller, exploring the relationship between simple computational rules and collective organization."
  },

  {
    id: "simultaneous-contrast",
    category: "animations",
    title: "Simultaneous Contrast",
    year: "2026",
    medium: "Generative animation",
    software: "Blender · Python",
    src: "works/simultaneous_contrast.mp4",
    description:
      "A study of simultaneous contrast, a perceptual phenomenon in which the perceived colour or brightness of a region changes according to its surrounding visual context. Identical or similar colours can therefore appear different when placed against different backgrounds, demonstrating that colour perception depends not only on the stimulus itself but also on relationships across the visual field."
  },

  {
    id: "small-study-with-music",
    category: "animations",
    title: "Small Study with Music",
    year: "2026",
    medium: "Generative audiovisual work",
    software: "Blender · Python",
    src: "works/small_study_with_music.mp4",
    description:
      "An audiovisual study exploring the relationship between generative movement and sound. The accompanying music was algorithmically generated using Python, hence both the visual and sonic elements emerge through computational processes."
  },

  {
    id: "squares-in-disorder",
    category: "animations",
    title: "Squares in Disorder",
    year: "2026",
    medium: "Generative animation",
    software: "Blender · Python",
    src: "works/squares_in_disorder.mp40001-0240.mp4",
    description:
      "Inspired by Vera Molnár’s investigations of order and disorder, this generative study introduces controlled variations into an initially regular geometric system. Simple algorithmic transformations progressively disturb the underlying order, exploring how repetition, variation and computational rules can produce increasingly irregular visual structures."
  },

  {
    id: "blue-tears",
    category: "animations",
    title: "Blue Tears",
    year: "2025",
    medium: "Drawing and digital animation",
    software: "Blender",
    src: "works/face_animation_with_tears.mp4",
    description:
      "Animation developed from an original hand-drawn work."
  },

  {
    id: "case-of-isolation",
    category: "animations",
    title: "A Case of Isolation",
    year: "2026",
    medium: "Generative animation",
    software: "Blender · Python",
    src: "works/flock_0001-0150.mp4",
    description:
      "A generative study of collective behaviour in which agents interact according to locally shared features. Inspired by models of cultural dissemination, interaction becomes more likely as agents share more characteristics, while similarity can increase through repeated encounters. The same mechanism can also produce isolation: an agent that shares too few features with its neighbours becomes increasingly unlikely to interact with them and can consequently remain separated from the collective. Isolation therefore emerges organically from the local rules of interaction rather than being imposed as an explicit behaviour."
  },

  {
    id: "emergent-structure",
    category: "animations",
    title: "Emergent Structure",
    year: "2026",
    medium: "Generative animation",
    software: "Blender · Python",
    src: "works/frame_0001-0120.mp4",
    description:
      "A generative animation exploring the emergence of complex spatial structures from repeated computational transformations. Individual elements evolve through a rule-based system, producing an organic, continuously changing form from simple mathematical operations."
  },


  /* =======================================
     DRAWINGS
     ======================================= */

  {
    id: "drawing-5833",
    category: "drawings",
    title: "",
    year: "2026",
    medium: "Ink on paper",
    src: "works/IMG_5833.jpg",
    description: ""
  },

  {
    id: "drawing-7167",
    category: "drawings",
    title: "",
    year: "2026",
    medium: "Ink on paper",
    src: "works/IMG_7167.jpg",
    description: ""
  },

  {
    id: "drawing-7196",
    category: "drawings",
    title: "",
    year: "2026",
    medium: "Ink on paper",
    src: "works/IMG_7196.jpg",
    description: ""
  },

    {
    id: "drawing-7214",
    category: "drawings",
    title: "",
    year: "2026",
    medium: "Ink on paper",
    src: "works/IMG_7214.jpg",
    description: ""
  },

  {
    id: "drawing-5717",
    category: "drawings",
    title: "",
    year: "2026",
    medium: "Ink on paper",
    src: "works/IMG_5717 2.jpg",
    description: ""
  },

    {
    id: "drawing-image6",
    category: "drawings",
    title: "",
    year: "2026",
    medium: "Painting on paper",
    src: "works/image6.jpeg",
    description: ""
  },

  {
    id: "drawing-image4",
    category: "drawings",
    title: "",
    year: "2026",
    medium: "Painting on paper",
    src: "works/image4.jpeg",
    description: ""
  },

  {
    id: "drawing-image3",
    category: "drawings",
    title: "",
    year: "2026",
    medium: "Painting on paper",
    src: "works/image3.jpeg",
    description: ""
  },

  {
    id: "drawing-image1",
    category: "drawings",
    title: "",
    year: "2026",
    medium: "Mixed media on paper",
    src: "works/image1.jpeg",
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
  "MSc Cognitive Science — Université Paris Cité & Sorbonne Université, Paris",
  "MSc Thesis: First-Person POV in Cinematic Shot Sequences — École Normale Supérieure, Paris"
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

const content =
  document.getElementById("content");


/* =========================================
   MEDIA
   ========================================= */

function createMedia(work, large = false) {

  const extension =
    work.src
      .split(".")
      .pop()
      .toLowerCase();

  const isVideo =
    ["mp4", "webm", "mov"]
      .includes(extension);

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
      alt="${work.title || "Artwork"}"
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
      work =>
        work.category === category
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

                ${
                  work.title
                    ? `
                      <span class="artwork-title">
                        ${work.title}
                      </span>
                    `
                    : ""
                }

                ${
                  work.year
                    ? `
                      <span class="artwork-year">
                        ${work.year}
                      </span>
                    `
                    : ""
                }

                ${
                  work.medium
                    ? `
                      <span class="artwork-medium">
                        ${work.medium}
                      </span>
                    `
                    : ""
                }

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
      artwork =>
        artwork.id === id
    );

  if (!work) {

    showGallery("animations");

    return;

  }

  const metadata = [
    work.year,
    work.medium,
    work.software,
    work.dimensions,
    work.duration
  ].filter(Boolean);

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

          ${
            work.title
              ? `
                <h1>
                  ${work.title}
                </h1>
              `
              : ""
          }

          ${
            metadata.length > 0
              ? `
                <div class="artwork-meta">

                  ${metadata.map(item => `
                    <div>
                      ${item}
                    </div>
                  `).join("")}

                </div>
              `
              : ""
          }

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
   BIO PAGE
   ========================================= */

function showBio() {

  content.innerHTML = `

    <section class="bio-page">

      <div class="bio-image">

        <img
          src="works/portrait.png"
          alt="Sofia Karydi"
        >

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
            <p>
              ${item}
            </p>
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
        link.getAttribute("href")
        ===
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
      window.location.hash
        .substring(1)
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
      page.replace(
        "work/",
        ""
      );

    const work =
      artworks.find(
        artwork =>
          artwork.id === id
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
   START WEBSITE
   ========================================= */

window.addEventListener(
  "hashchange",
  route
);

route();

