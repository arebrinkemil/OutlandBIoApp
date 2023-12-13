var glideMulti1 = new Glide(".multi1", {
  type: "carousel",
  autoplay: 2500,
  perView: 5,
  gap: 20,
  peek: {
    before: 0,
    after: 100,
  },
  breakpoints: {
    1700: {
      perView: 4,
      gap: 20,
    },

    1400: {
      perView: 3,
      gap: 20,
      peek: {
        before: 0,
        after: 50,
      },
    },

    1150: {
      perView: 3,
      gap: 20,
      peek: {
        before: 0,
        after: 0,
      },
    },
    990: {
      perView: 2,
      gap: 20,
      peek: {
        before: 0,
        after: 100,
      },
    },
    768: {
      perView: 4,
      peek: {
        before: 0,
        after: 50,
      },
    },

    688: {
      perView: 3,
      peek: {
        before: 0,
        after: 50,
      },
    },

    530: {
      perView: 2,
      peek: {
        before: 0,
        after: 50,
      },
    },
    400: {
      perView: 2,
      peek: {
        before: 0,
        after: 0,
      },
    },
  },
});

var glideMulti2 = new Glide(".multi2", {
  type: "carousel",
  autoplay: 2500,
  perView: 5,
  gap: 20,
  peek: {
    before: 0,
    after: 100,
  },
  breakpoints: {
    1700: {
      perView: 4,
      gap: 20,
    },

    1400: {
      perView: 3,
      gap: 20,
      peek: {
        before: 0,
        after: 50,
      },
    },

    1150: {
      perView: 3,
      gap: 20,
      peek: {
        before: 0,
        after: 0,
      },
    },
    990: {
      perView: 2,
      gap: 20,
      peek: {
        before: 0,
        after: 100,
      },
    },
    787: {
      perView: 4,
      peek: {
        before: 0,
        after: 50,
      },
    },

    688: {
      perView: 3,
      peek: {
        before: 0,
        after: 50,
      },
    },

    530: {
      perView: 2,
      peek: {
        before: 0,
        after: 50,
      },
    },
    400: {
      perView: 2,
      peek: {
        before: 0,
        after: 0,
      },
    },
  },
});

glideMulti1.mount();
glideMulti2.mount();
