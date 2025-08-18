const con = document.getElementById('container')
const arr=["MCA DAY2/assest/backround.jpg",
    "MCA DAY2/assest/img1.jpg",
    "MCA DAY2/assest/img2.jpg",
    "MCA DAY2/assest/img4.jpg"
]

let i=1;
let changeimg=()=>{
    if(i==5)
    {
        i=0;
    }
    con.style.backgroundImage= `url('${arr[i]}')`;
    i++;
}