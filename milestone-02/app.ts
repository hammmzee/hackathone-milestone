const newButton = document.getElementById(
  "toggle-skills"
) as HTMLButtonElement;
const mySkills = document.getElementById("skills") as HTMLElement;

newButton.addEventListener("click", () => {
  if (mySkills.style.display === "none") {
    mySkills.style.display = "block";
  } else mySkills.style.display = "none";
});
