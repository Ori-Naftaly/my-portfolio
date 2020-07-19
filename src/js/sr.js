import assignProps from "./assignProps";
import Particles from "./particles";
export default function () {
  const defaultProps = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "30px",
    duration: 1000,
    desktop: true,
    mobile: true,
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: false,
          value_area: 320.6824121731046,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img / github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 79.92007992007991,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  /* Section Title */
  ScrollReveal().reveal(
    ".section-title",
    assignProps(
      {
        delay: 300,
        distance: "0px",
        origin: "bottom",
      },
      defaultProps
    )
  );

  /* Hero Section */
  ScrollReveal().reveal(
    ".hero-title",
    assignProps(
      {
        delay: 500,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".hero-cta",
    assignProps(
      {
        delay: 1000,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
      defaultProps
    )
  );

  /* About Section */
  ScrollReveal().reveal(
    ".about-wrapper__image",
    assignProps(
      {
        delay: 600,
        origin: "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".about-wrapper__info",
    assignProps(
      {
        delay: 1000,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
      defaultProps
    )
  );

  /* Projects Section */
  ScrollReveal().reveal(
    ".project-wrapper__text",
    assignProps(
      {
        delay: 500,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
      defaultProps
    )
  );

  ScrollReveal().reveal(
    ".project-wrapper__image",
    assignProps(
      {
        delay: 1000,
        origin: window.innerWidth > 768 ? "right" : "bottom",
      },
      defaultProps
    )
  );

  /* Contact Section */
  ScrollReveal().reveal(
    ".contact-wrapper",
    assignProps(
      {
        delay: 800,
        origin: "bottom",
      },
      defaultProps
    )
  );
}
