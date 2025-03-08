function RolarProjetos(sectionId, offset = 0) {
    const section = document.getElementById(sectionId);
    if (section) {
        const sectionPosition = section.offsetTop - offset;
        window.scrollTo({
            top: sectionPosition,
            behavior: "smooth"
        });
    }
}