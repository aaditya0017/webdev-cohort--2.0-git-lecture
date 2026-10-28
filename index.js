function add(a,b){
    return a+b
}

function sub(a,b){
    if(!(a>b)) throw new Error('new a must be greater than b')
    return a-b
}

function mul(a,b){
    return a*b
}

add(2,5)
add(6,6)
add(40,42)

sub(36,30)

mul(2,3)
mul(20,30)
mul(200,300)
mul(2000,3000)
