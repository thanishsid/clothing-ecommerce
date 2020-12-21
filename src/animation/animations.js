export const pageVariants = {
  squeezeIn: {
    initial: {
      opacity: 0,
      scale: 0,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.3,
    },
  },
  fadeIn: {
    initial: {
      opacity: 0,
      x: '-100vw',
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: '200vw',
    },
  },
};

export const pageTransition = {
  opt1: {
    type: 'tween',
    duration: 0.5,
  },
  opt2: {
    type: 'tween',
    duration: 0.3,
  },
};
