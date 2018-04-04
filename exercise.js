var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    var dx = p1.x-p2.x;
    var dy = p1.y-p2.y;
    return Math.sqrt(dx*dy+dy*dy);    

};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    data.forEach(function(existingPoint){
        var dx = existingPoint.x - newPoint.x;
        var dy = existingPoint.y - newPoint.y;
        existingPoint.distance = Math.sqrt(dx * dx + dy * dy);
    });
    return data;
};

// find k closest points
exercise.findClosest = function(k,data){
    data.sort(function(a,b){
        return a.distance - b.distance;
    });
    return data.slice(0,k);    
};

module.exports = exercise;