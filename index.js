function add(a,b){
    return a+b
}

function sub(a,b){
    if(!(a>b)) throw new Error('new a must be greater than b')
    return a-b
}

add(2,5)
add(6,6)
add(40,42)

sub(36,30)
