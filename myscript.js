"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navIcons = document.querySelectorAll(".nav-icon");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const sectionId = entry.target.getAttribute("id");
                const navIcon = document.querySelector(`a[href="#${sectionId}"] .nav-icon`);

                if (entry.isIntersecting) {
                    navIcons.forEach((icon) => icon.classList.remove("active"));
                    navIcon.classList.add("active");
                }
            });
        },
        {
            root: null,
            threshold: 0.5,
        }
    );

    sections.forEach((section) => observer.observe(section));
});

const btn = document.querySelector(".btn");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
    btn.classList.toggle("btn-cross");
})