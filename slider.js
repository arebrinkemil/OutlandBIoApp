var glideMulti1 = new Glide(".multi1", {
  type: "carousel",
  autoplay: 3500,
  perView: 5,
  peek: {
    before: 0,
    after: 100,
  },
  breakpoints: {
    1700: {
      perView: 4,
    },
    1400: {
      perView: 3,
    },
    1070: {
      perView: 2,
      peek: {
        before: 0,
        after: 50,
      },
    },
    767: {
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
  autoplay: 3500,
  perView: 5,
  peek: {
    before: 0,
    after: 100,
  },
  breakpoints: {
    1700: {
      perView: 4,
    },
    1400: {
      perView: 3,
    },
    1070: {
      perView: 2,
      peek: {
        before: 0,
        after: 50,
      },
    },
    767: {
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
