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
  id: "metamorphosis-deconstruction",
  title: "Metamorphic Encounter",
  category: "animations",
  type: "video",
  src: "works/metamorphosis_deconstruction.mp4",
  year: "2026",
  medium: "Generative animation · Blender + Python",
  description:
    "A generative study of metamorphosis in which a hybrid figure gradually deconstructs, dispersing its body into a field of moving symbolic forms before reassembling. Inspired by Leonora Carrington’s treatment of transformation, hybrid beings and unstable boundaries between bodies, objects and environments."
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
    id: "geometric-paper-study",
    category: "animations",
    title: "Geometric Paper Study",
    year: "2026",
    medium: "Generative animation · Blender + Python",
    src: "works/geometric_paper_study.mp4",
    description:
      "Inspired by abstract expressionism and Kandinsky’s experiments with colour, point, line and plane. Geometric forms slowly shift across a paper-like field, transforming the relationships of a static composition into temporal ones and exploring how visual structures emerge through movement, proximity and change."
  },

    // ============================================================
  // NEW ANIMATIONS
  // ============================================================

  {
    id: "geometric-ecosystem",
    category: "animations",
    title: "Geometric Ecosystem",
    year: "2026",
    medium: "Generative animation · Blender + Python",
    src: "works/geometric_ecosystem_paper_v2.mp4",
    description:
      "Inspired by abstract expressionism and Kandinsky’s investigations of geometric form, Geometric Ecosystem treats circles, lines and triangles as elements within a changing relational system. Simple rules of attraction, repulsion and movement allow the composition to continually reorganise, approaching form as something produced through relations and transformation rather than as a fixed state."
  },

  {
  id: "rings-of-living-tissue",
  title: "Rings of Living Tissue",
  category: "animations",
  type: "video",
  src: "works/rings_of_living_tissue.mp4",
  year: "2026",
  medium: "Generative animation · Blender + Python",
  description: "A slowly transforming field of nested contours moves between microscopic and astronomical scales. The outer lines evoke planetary rings and orbital structures, while the dense interior resembles cells, membranes and organic tissue. As a wave passes through the system, the forms expand, fold and reorganise, drawing a parallel between structures of the universe and the internal environments of living organisms. The work explores how patterns of flow, repetition and organisation can appear across radically different scales."
},

  {
    id: "paper-wheel-rotation",
    category: "animations",
    title: "Paper Wheel Rotation",
    year: "2026",
    medium: "Generative animation · Blender + Python",
    src: "works/moving_wax_concentric_study_v6.mp4",
    description:
      "A computational study of rotation, repetition and visual rhythm. Layered paper-like forms move independently within a repeated geometric structure, producing continuously changing relationships between colour, orientation and movement."
  },

  {
  id: "flip flop walk",
  title: "flip flop walk",
  category: "animations",
  type: "video",
  src: "works/2nd_walk_v1.mp4",
  year: "2026",
  medium: "Generative animation · Blender + Python",
},

{
  id: "negative_afterimage",
  title: "Negative Afterimage",
  category: "animations",
  type: "video",
  src: "works/negative_afterimage_v3.mp4",
  year: "2026",
  medium: "Generative animation · Blender + Python",

  instructions: "Keep your eyes fixed on the black dot at the centre of the figure and try not to move your gaze. When the pink figure disappears, continue looking at the black dot. A green afterimage may briefly appear in its place.",

  description: "This work explores the negative afterimage, a perceptual phenomenon produced by chromatic adaptation. Human colour vision does not represent colours independently: after the initial responses of the cone photoreceptors, colour information is partly encoded through opponent channels, particularly red–green and blue–yellow. The highly saturated pink–magenta figure strongly stimulates chromatic mechanisms associated with the reddish/magenta side of these opponent dimensions. As the viewer maintains fixation, these responses gradually adapt and become temporarily less responsive. When the figure suddenly disappears and is replaced by a neutral visual field, the opponent colour mechanisms are briefly imbalanced, biasing perception toward the opposite chromatic direction. For this pink–magenta stimulus, the resulting negative afterimage is perceived approximately as green or green–cyan. The green figure is therefore not present in the animation itself: it is generated by the observer’s visual system."
},

 {
  id: "trampoline_duo",
  title: "trampoline dance duo",
  category: "animations",
  type: "video",
  src: "works/trampoline_duo.mp4",
  year: "2026",
  medium: "Generative animation · Blender + Python",
},

{
  id: "rubins_vase",
  title: "Rubin’s Vase",
  category: "animations",
  type: "video",
  src: "works/rubin_vase_v3.mp4",
  year: "2026",
  medium: "Generative animation · Blender + Python",

  instructions: "Look at the image without trying to hold onto a single interpretation. You may see a purple vase, two brown faces looking toward one another, or experience perception alternating between the two. As the vase rotates, notice how the ambiguity changes and how the faces become more or less apparent.",

  description: "A small visual exploration of Rubin’s vase, a classic figure–ground illusion introduced by the psychologist Edgar Rubin. The same shared contour can be perceived either as the boundary of a central vase or as the profiles of two opposing faces. The image therefore supports two competing perceptual organizations without the stimulus itself needing to contain two separate drawings. In visual processing, the brain continually organizes the retinal image into figures and background, assigning borders to the regions interpreted as objects. Here, the shared contour can be assigned either to the central purple region, producing the perception of a vase, or to the surrounding brown regions, producing two faces. These interpretations are mutually incompatible, so perception may alternate between them — an example of bistable perception. The rotation temporarily introduces additional shape and depth information, disrupting the original two-dimensional ambiguity before the figure–ground relationship becomes available again as the vase returns to its frontal position."
},

{
  id: "motion_induced_blindness",
  title: "Motion-Induced Blindness",
  category: "animations",
  type: "video",
  src: "works/motion_induced_blindness_v1.mp4",
  year: "2026",
  medium: "Generative animation · Blender + Python",

  instructions: "Fix your gaze on the small circle at the centre of the image and try not to look directly at the three yellow dots. Keep your eyes on the centre while the field of pale crosses rotates. After several seconds, one or more of the yellow dots may seem to disappear and later reappear. The effect can vary between viewers. Importantly, the yellow dots remain physically present throughout the entire animation.",

  description: "A small visual exploration of motion-induced blindness, a perceptual phenomenon in which highly visible stationary objects can temporarily disappear from conscious perception when they are surrounded by a moving visual field. In this animation, the three yellow dots remain completely unchanged while the surrounding field of crosses rotates. Yet during sustained central fixation, one or more dots may intermittently vanish from awareness and then return. The phenomenon demonstrates that visual awareness is not a direct copy of the retinal image: information that continues to reach the eyes does not necessarily remain continuously available to conscious perception. Motion-induced blindness has been associated with interactions between attention, perceptual competition, adaptation, and figure–ground or surface-segmentation processes. There is no single accepted neural mechanism that fully explains the effect. Instead, the disappearance appears to emerge from competition within visual processing between the salient moving background and the stationary peripheral targets. The physical stimulus therefore remains present while its perceptual representation becomes temporarily suppressed."
},

{
  id: "cell-field",
  title: "Cell Field",
  category: "animations",
  type: "video",
  src: "works/living_labyrinth.mp4",
  year: "2026",
  medium: "Generative animation · Blender + Python",
  description:
    "A generative study of the visual similarities between mathematical and biological structures. A continuous field of lines contracts and expands while neon-green traces move through it like signals travelling through living tissue. The work explores how simple computational transformations can produce forms that appear cellular, organic or alive."
},

{
  id: "living-fields",
  title: "Living Fields",
  category: "animations",
  type: "video",
  src: "works/microscopic_fields_v3.mp4",
  year: "2026",
  medium: "Generative animation · Blender + Python",
  description: "Six evolving fields shaped by invisible forces of attraction, compression and rotation. As the lines bend, gather and separate, abstract mathematical structures begin to resemble microscopic organisms, tissue or small living systems. Green traces appear within the disturbances, suggesting an activity occurring beneath the surface. The work plays with the point at which computational structure begins to be perceived as biological form."
},

{
  id: "differential-growth-organism",
  title: "Differential Growth",
  category: "animations",
  type: "video",
  src: "works/differential_growth_organism_v1.mp4",
  year: "2026",
  medium: "Generative animation · Blender + Python",
  description: "A circular structure gradually develops increasingly complex folds through a differential-growth-inspired process. As the form expands, competing forces of growth, attraction and spatial constraint produce an evolving labyrinth of organic structures. Neon-green traces mark regions of active growth, making visible the local instabilities through which the form develops. The work explores how simple computational rules can generate structures that begin to resemble biological growth, tissue and microscopic organisms."
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
  },

  // ============================================================
  // NEW CERAMIC WORKS
  // ============================================================

  {
    id: "repair-automaton",
    category: "ceramics",
    title: "Repair Automaton",
    year: "2026",
    medium: "White clay · Produced at V. Art Space, Syros · Photo: Chrisa Valsamaki",
    src: "works/IMG_20260924_142718.jpg",
    description:
      "Beginning with a photograph of weathered paint on a vessel at the Neorion Shipyard of Syros, traces of the damaged surface were extracted through edge detection and translated into a binary grid. This became the initial state of a cellular automaton governed by a custom “repair” rule, through which traces persisted, disappeared or propagated according to their local neighbourhoods. A selected generation of the resulting pattern was then transferred onto ceramic. The work treats repair not as a return to an original state, but as a generative process in which erosion becomes the source of a new visual structure."
  },

  {
    id: "ceramic-2026-02",
    category: "ceramics",
    title: "",
    year: "2026",
    medium: "White clay · Produced at V. Art Space, Syros · Photo: Chrisa Valsamaki",
    src: "works/IMG_20260924_142750.jpg",
    description: ""
  },

  {
    id: "ceramic-2026-03",
    category: "ceramics",
    title: "",
    year: "2026",
    medium: "White clay · Produced at V. Art Space, Syros · Photo: Chrisa Valsamaki",
    src: "works/IMG_20260924_142843.jpg",
    description: ""
  }
  

];


/* =========================================
   BIO
   ========================================= */

const bio = {

  name: "Sofia Karydi",

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

