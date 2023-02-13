

window.onload=function(){
    const theDefault = "images/default.png";
    let skins = ['skinimg', "images/skin 1.png", "images/skin 2.png", "images/skin 3.png", "images/skin 4.png", "images/skin 5.png", '#86AC97'];
    let cheecks = ['cheecksimg', "images/cheecks 1.png", "images/cheecks 2.png", "images/cheecks 3.png", "images/cheecks 4.png", "images/cheecks 5.png", '#BBB4E7'];
    let mouths = ['mouthimg', "images/mouth 1.png", "images/mouth 2.png", "images/mouth 3.png", "images/mouth 4.png", "images/mouth 5.png", '#ffc0cb'];
    let eyes = ['eyesimg', "images/eyes 1.png", "images/eyes 2.png", "images/eyes 3.png", "images/eyes 4.png", "images/eyes 5.png", '#85BCD6'];
    let fits = ['fitimg', "images/fit 1.png", "images/fit 2.png", "images/fit 3.png", "images/fit 4.png", "images/fit 5.png", '#e6e6fa'];
    let currentList;


    function setSources(index)
    {
        document.getElementById(currentList[0]).setAttribute('src', currentList[index]);
    }

    function setColor(index)
    {
        document.getElementById(`option${index}`).style.backgroundColor = currentList[6];
    }

    function setOptions(list)
    {   
        currentList = list;
        for (i = 1; i <= 5; i += 1)
        {
            setColor(i);
        }
        addOptions()
    }

    function addOptions()
    {   
        // console.log("listenedlol");
        document.getElementById("option1").addEventListener("click", function() {setSources(1)});
        document.getElementById("option2").addEventListener("click", function() {setSources(2)});
        document.getElementById("option3").addEventListener("click", function() {setSources(3)});
        document.getElementById("option4").addEventListener("click", function() {setSources(4)});
        document.getElementById("option5").addEventListener("click", function() {setSources(5)});

    }
    document.getElementById("skintone").addEventListener("click", function() {setOptions(skins)});
    document.getElementById("eyes").addEventListener("click", function() {setOptions(eyes)});
    document.getElementById("cheecks").addEventListener("click", function() {setOptions(cheecks)});
    document.getElementById("mouth").addEventListener("click", function() {setOptions(mouths)});
    document.getElementById("outfit").addEventListener("click", function() {setOptions(fits)});
}


