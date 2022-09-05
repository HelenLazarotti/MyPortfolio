function reveal(){
  const reveals = document.querySelectorAll(".reveal");
        reveals.forEach((reveal) => {
            const windowWidth= window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;

            const elementVisible = 100;

            if(elementTop < windowWidth - elementVisible){
                reveal.classList.add("active");
            } else {
                reveal.classList.remove("active")
            }
        });
    }
    window.addEventListener("scroll", reveal)

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior:"smooth"
        })
    }
    document.querySelector("#seta").onclick() = scrollToTop;
