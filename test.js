function improve(guess, x) {
    return average(guess, x / guess);
} 

function average(x, y) {
    return (x + y) / 2;
} 

improve(12, 44);