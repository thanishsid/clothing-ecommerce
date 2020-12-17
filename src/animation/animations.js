export const pageVariants = {
  squeezeIn: {
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
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: '200vw',
    },
  },
  flipY: {
    in: {
      opacity: 1,
      rotateY: 0,
    },
    out: {
      opacity: 0,
      rotateY: 360,
    },
  },
  rotateZ: {
    in: {
      opacity: 1,
      rotateZ: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      rotateZ: 360,
      scale: 0,
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
    duration: 0.6,
  },
};
