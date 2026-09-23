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
      "A visual demonstration of the flicker-fusion phenomenon. At relatively low temporal frequencies, rapidly alternating visual stimuli can still be perceived as distinct changes or flickers. As the frequency increases, successive signals are increasingly integrated over time by the visual system, until the individual fluctuations can no longer be perceptually resolved and the stimulus appears continuous. The work explores this transition between physically discrete visual events and a perceptually continuous experience."
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
      "A study of the motion aftereffect, a perceptual phenomenon in which prolonged exposure to movement in one direction can cause a subsequently stationary or changing stimulus to appear to move in the opposite direction. The effect reflects adaptation within motion-sensitive mechanisms of the visual system."
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
    id: "flock",
    category: "animations",
    title: "Flock",
    year: "2026",
    medium: "Generative animation",
    software: "Blender · Python",
    src: "works/flock_0001-0150.mp4",

    description:
      "A generative study of collective motion based on flocking behaviour. Each agent responds only to local information through simple rules of alignment, cohesion and separation: tending to move in the direction of nearby agents, remain close to the group and avoid collisions. Repeated across many agents, these local interactions produce coordinated global patterns without any central controller, demonstrating how complex collective behaviour can emerge from simple computational rules."
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
      alt="${work.title}"
      loading="lazy"
    >
  `;

}


/* =========================================
   GALLERY PAGE
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
   INDIVIDUAL ARTWORK PAGE
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
              <div>
                ${item}
              </div>
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
   BIO PAGE
   ========================================= */

function showBio() {

  content.innerHTML = `

    <section class="bio-page">


      <div class="bio-image">

        <!--
          Portrait will be added here later.
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


  /* ---------- BIO ---------- */

  if (page === "bio") {

    updateNavigation("bio");

    showBio();

    window.scrollTo(0, 0);

    return;

  }


  /* ---------- ARTWORK ---------- */

  if (
    page.startsWith("work/")
  ) {

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


  /* ---------- GALLERY ---------- */

  if (
    categories.includes(page)
  ) {

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
