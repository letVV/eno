function p(x) {
    function sum(y) {
        return p((x + y)*x)
    }
    // x+y    
    sum.toString = function(){
        return x;
    }
    return sum
}

//p(1) = 1
//p(1)(2) = 6
//p(1)(2)(3) = 9

// $.fn.extend()