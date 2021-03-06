const duration = 1000;

const scrollIntoView = module => {
  if (module !== undefined && module !== null) {
    window.setTimeout(
      () =>
        window.scrollTo({
          behavior: 'smooth',
          top: (window.scrollY || document.documentElement.scrollTop) + module.getBoundingClientRect().top - 5,
        }),
      duration,
    );
  }
};

export { duration, scrollIntoView };
