let a = document.getElementById('ch1_head')

function f1(){
    a.style.top = '0px'
}
setTimeout(f1 , 100)



let b = document.getElementById('ch1')
let c = document.getElementById('ch2')
let d = document.getElementById('ch3')
let e = document.getElementById('ch4')

function f2() {
    b.style.left = '0px';
    c.style.top = '0px';
    d.style.right = '0px';
    e.style.top = '0px'
}

setTimeout (f2, 800)


let f = document.getElementById('ch5')
let g = document.getElementById('ch6')

let h = document.getElementById('ch2_head')

window.addEventListener('scroll', function(){
    if (window.pageYOffset >= 300){
        f.style.left = '0px'
        g.style.left = '0px'
    }

    if ( window.pageYOffset >= 700){
        h.style.left = '0px'
    }
})


let i = document.getElementById('icn');
let j = document.getElementById('ch7')
let k = document.getElementById('ch8')
let l = document.getElementById('ch9')
let m = document.getElementById('ch10')


function f3(){
    i.style.transform = 'rotate(0deg)';
    j.style.left = '0px';
    k.style.left = '0px';
    l.style.left = '0px';
    m.style.left = '0px';
}

function f4(){
    i.style.transform = 'rotate(90deg)';
    j.style.left = '-1000px';
    k.style.left = '1000px';
    l.style.left = '-1000px';
    m.style.left = '1000px';
}
