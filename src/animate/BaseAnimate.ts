export const buttonAnimateVariants = {
  initial: { y: 20, opactiy: 0.5 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.3 },
  viewport: { once: true },
};

export const PageAnimateVariants = {
  initial: { x: -10, opactiy: 0.5 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 1 },
};

export const parentElement = {
  transition: { staggerChildren: 0.5 },
};

export const elementBtoT = {
  initial: { y: 20, opactiy: 0.5 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

export const elementFtoR = {
  initial: { x: 20, opactiy: 0.5 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
};
