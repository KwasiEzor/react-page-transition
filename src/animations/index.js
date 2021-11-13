export const animateOne = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const animateTwo = {
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: "-100vw",
    scale: 0.3,
  },
};
export const animateThree = {
  in: {
    opacity: 1,
    x: -300,
  },
  out: {
    opacity: 0,
    x: 300,
  },
  end: {
    opacity: 1,
    x: 0,
  },
};
export const transition = {
  duration: 0.6,
};
