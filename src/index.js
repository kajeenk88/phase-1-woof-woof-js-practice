document.addEventListener("DOMContentLoaded", init)

function init(e){
    const filterDogsButton = document.querySelector("#good-dog-filter")
    filterDogButton.addEventListener("click", toggleFilterDogs)
    getDogs().then(allDogsToDogBar)
}

function toggleFilterDogs(e){
    const filterDogsButton = document.querySelector("#good-dog-filter")
    if (filterDogButton.innerText,includes("OFF")){
        filterDogsButton.innerText = "Filter good dogs: ON"
        updateDogBar()
 } else {
    filterDogsButton.innerText = "Filter good dogs: OFF"
    updateDogBar()
 }
}

function addAllDogsToDogBar(dogArray, filter = false){
    const dogBar = document.querySelector('#dog-bar')
    dogBar.innerHTML = ""
    if (filter)(dog
        
        function addDogSpantoDogBar(dog){
            const dogBar = document.querySelector("#dog-bar")
            const dogSpan = document.createElement("span")
            dogSpan.innerText = dog.name
            dogSpan.dataset.id = dog.id)
}