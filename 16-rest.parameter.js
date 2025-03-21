function add(...n){
    console.log(n);
}
add(2, 3, 4);

function add( n1, ...n2){
    console.log(n1);
    console.log(n2);
    
}
add(10, 20, 30);