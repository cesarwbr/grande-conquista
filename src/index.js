let sideMenuOpened = false;
let logoutMenuOpened = false;

// document.querySelector("#toggle-menu").onclick = () => {
//   if (sideMenuOpened) {
//     const sidebar = document.querySelector("#menu");
//     sidebar.style.display = "";
//     const panel = document.querySelector("#panel");
//     panel.style.transform = "";
//     sideMenuOpened = false;
//   } else {
//     const sidebar = document.querySelector("#menu");
//     sidebar.style.display = "block";
//     const panel = document.querySelector("#panel");
//     panel.style.transform = "translateX(296px)";
//     sideMenuOpened = true;
//   }
// };

const spaces = document.querySelectorAll(".arena-space-item");

spaces.forEach((space) => {
  space.addEventListener("click", () => {
    appendArenaLiveblog(space);
  });
});

// document.querySelector("#headlessui-menu-button-3").onclick = () => {
//   if (logoutMenuOpened) {
//     const logoutMenu = document.querySelector("#logout-menu");
//     logoutMenu.style.display = "none";
//     logoutMenuOpened = false;
//   } else {
//     const logoutMenu = document.querySelector("#logout-menu");
//     logoutMenu.style.display = "block";
//     logoutMenuOpened = true;
//   }
// };

function appendArenaLiveblog(space) {
  const slug = space.dataset.slug;
  const arenaEmbed = document.querySelector("#arena-embed");
  arenaEmbed.innerHTML = "";

  setTimeout(() => {
    const child = document.createElement("div");
    child.className = "arena-liveblog";
    child.dataset.publisher = "lucas-corps-3";
    child.dataset.event = slug;
    child.dataset.version = "2";

    console.log("child", child);
    arenaEmbed.appendChild(child);

    window.arenaLiveblog.reset();
  }, 500);
}
