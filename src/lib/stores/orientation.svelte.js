const createOrientationStore = () => {
  /** @type {'portrait' | 'landscape'} orientation */
  let orientation = $state("portrait");
  let dimensions = $state({ width: 0, height: 0 });

  return {
    get state() {
      return orientation;
    },
    get dimensions() {
      return dimensions;
    },
    /** @param {Window} window */
    update(window) {
      dimensions.width = window.innerWidth;
      dimensions.height = window.innerHeight;
      if (window.innerWidth > window.innerHeight) {
        orientation = "landscape";
      } else {
        orientation = "portrait";
      }
    },
  };
};

export default createOrientationStore();
