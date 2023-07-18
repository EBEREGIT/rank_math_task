// toggle a boolean value
const toggle = (item, setter) => {
  if (item === true) {
    setter(false);
  } else {
    setter(true);
  }
};

export { toggle };
