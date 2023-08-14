let sections = document.querySelectorAll('[id^="section"]');

if (sections.length > 1) {
  let sectionOne = sections[0];
  sections.forEach((section) => {
    if (section != sectionOne) {
      $(section).css("display", "none");
    }
  });
}

const display = (sectionId) => {
  makeRemainingScreensInvisible(sectionId);
  let section = document.getElementById(sectionId);
  $(section).css("display", "block");
  window.scrollTo(0, 0);
};

const makeRemainingScreensInvisible = (sectionId) => {
  let sections = document.querySelectorAll('[id^="section"]');
  sections.forEach((section) => {
    if ($(section).attr("id") != sectionId) {
      $(section).css("display", "none");
    }
  });
};
