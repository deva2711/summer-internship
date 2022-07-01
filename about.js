window.addEventListener("scroll", progressAll);

function progressAll() {
  const triggerProgress = (window.innerHeight / 8) * 4;
  const progressTop = document.getElementById("about-b");

  const progressStart = progressTop.getBoundingClientRect().top;

  if (progressStart < triggerProgress) {
    
    const progress = document.getElementById("progressDoneHtml");
    progress.style.width = progress.getAttribute("data-done");
    progress.style.opacity = 1;

    const progressCss = document.getElementById("progressDoneCss");
    progressCss.style.width = progressCss.getAttribute("data-done");
    progressCss.style.opacity = 1;

    const progressBootstrap = document.getElementById("progressDoneBootstrap");
    progressBootstrap.style.width = progressBootstrap.getAttribute("data-done");
    progressBootstrap.style.opacity = 1;

    const progressSass = document.getElementById("progressDoneSass");
    progressSass.style.width = progressSass.getAttribute("data-done");
    progressSass.style.opacity = 1;

    const progressJavascript = document.getElementById("progressDoneJavascript");
    progressJavascript.style.width = progressJavascript.getAttribute("data-done");
    progressJavascript.style.opacity = 1;

    const progressReact = document.getElementById("progressDoneReact");
    progressReact.style.width = progressJavascript.getAttribute("data-done");
    progressReact.style.opacity = 1;





  }
}