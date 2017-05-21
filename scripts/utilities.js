var forEach = function(array) {

    for (var i = 0; i < array.length; i++) {
        (function(index) {
            pointsArray[index].style.opacity = 1;
            pointsArray[index].style.transform = "scaleX(1) translateY(0)";
            pointsArray[index].style.msTransform = "scaleX(1) translateY(0)";
            pointsArray[index].style.WebkitTransform = "scaleX(1) translateY(0)";
        })
    }
};
