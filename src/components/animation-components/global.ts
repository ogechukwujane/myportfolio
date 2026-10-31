const txtConAnim = {
  visible: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 1,
    },
  },
};

const txtAnim = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },

    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
      },
    },
  },
};

const animateX = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 2,
    },
  },
};

export { animateX, txtConAnim, txtAnim };
