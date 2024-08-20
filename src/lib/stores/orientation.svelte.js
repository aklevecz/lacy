const createOrientationStore = () => {
  /** @type {'portrait' | 'landscape'} orientation */
  let orientation = $state("portrait");

  return {
    get state() {
      return orientation;
    },
    /** @param {Window} window */
    update(window) {
      if (window.innerWidth > window.innerHeight) {
        orientation = "landscape";
      } else {
        orientation = "portrait";
      }
    },
  };
};

export default createOrientationStore();
