const cont=document.querySelector("#post-container")
const para=document.querySelector("p")
const likebtn =document.querySelector("#like-button")
const commentlist=document.querySelector("#comments-list")
const span=document.querySelector("span")


let status="unlike"
let count=0

function like(){
    if(likebtn.innerHTML=="Like"){
    status="liked"
    likebtn.innerHTML= "Unlike"
    likebtn.style.backgroundColor = "orange"
    likebtn.style.borderColor="orange"
    
    }
else{
    status =" Unlike"
    likebtn.innerHTML="Like"
    likebtn.style.backgroundColor = "green"
    likebtn.style.borderColor="green"
}
}

function comment(){
    let comment=prompt("Enter the comment")

    const li=document.createElement("li")
    li.innerHTML=comment
    count=count+1
    span.innerHTML=`Total Comment's:${count}`

    commentlist.appendChild(li)
}


 




