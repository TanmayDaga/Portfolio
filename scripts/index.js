function removeFadeOut(element,speed){
    element.style.transition = "opacity "+(speed/1000)+"s ease"
  
    setTimeout(()=>element.parentNode.removeChild(element),12000);
}
removeFadeOut(document.getElementById("body-splash"),10000)


const pythonProjectsContainer=document.querySelector("#python-projects");
const androidProjectsContainer = document.querySelector("#android-projects");



projects.python.forEach((element) => {
    pythonProjectsContainer.innerHTML += `
    <img src=${element.image} class = "dC3nv" alt ="Image not found" style="height: 100%;" onclick="window.open('${element.url}','_blank')">
    `;
})

projects.android.forEach((element) =>{
    androidProjectsContainer.innerHTML += `
    <img src="${element.image}" class = "dC3nv" alt ="Image not found" style="height: 100%;" onclick="window.open('${element.url}','_blank')">
      `;
})