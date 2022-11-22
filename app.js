let pictures=['1.jpg','2.jpg','3.jpg'];
let descriptions=
['description for picture 1',
'description for picture 2',
'description for picture 3'
];
let picture=document.getElementById('pic');
let description=document.getElementsById('desc');
let index=0;

function rightClick(){
    if(index<picture.lenght-1){
        index++;
    }
    else index=0;
   showPicture();
}

function leftClick(){
    if(index<=0){
        index=picture.lenght-1;
    }
    else index--
    showPicture();
}