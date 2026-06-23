// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// Only expose the retained site pages in global search.
ninja.data = [
  {
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },
  {
    id: "nav-publications",
    title: "publications",
    section: "Navigation",
    handler: () => {
      window.location.href = "/publications/";
    },
  },
];
