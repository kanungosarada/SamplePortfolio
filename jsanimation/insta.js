var istatus=document.querySelector("h5")
var addfriend=document.querySelector("#add")
// var rmv=document.querySelector("#Remove")

var check=0

addfriend.addEventListener("click",function()
{
    if(check==0)
    {
    istatus.innerHTML="Friend"
    istatus.style.color="green"
    addfriend.innerHTML="unfollow"
    check=1
    }
    else{
        istatus.innerHTML="stranger"
        istatus.style.color="red" 
        addfriend.innerHTML="follow"
        check=0
    }
    

})
var con=document.querySelector("#box")
var love=document.querySelector("i")


con.addEventListener("dblclick",function(){
love.style.transform='translate(-50%,-250%) scale(3)'
love.style.opacity=0.5
setTimeout(function(){
    love.style.transform='translate(-50%,-250%) scale(0)'  
    love.style.opacity=0
},1000);
})

var cur=document.querySelector(".cursor")
var bod=document.querySelector(".screen")

// cur.style.background="red"
bod.addEventListener("mousemove",function(dets){
    cur.style.left=dets.x+"px"
    cur.style.top=dets.y+"px"
})
