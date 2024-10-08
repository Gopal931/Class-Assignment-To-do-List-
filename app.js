let input=document.querySelector(".inputField");
let list=document.querySelector(".list");
input.addEventListener("keydown",(e)=>{
   if(e.key ==="Enter"){
    let task=document.createElement("div");
    task.classList.add("task");
    let span=document.createElement("span");
    span.innerHTML=input.value;
    task.appendChild(span);
    input.value="";
    let inner=document.createElement("div");
    inner.classList.add("inner");
    let innInput=document.createElement("input");
    innInput.setAttribute("type","checkbox");
    innInput.addEventListener("click",()=>{
        if(innInput.checked){
        span.style.textDecoration="line-through";
        }
        else{
            span.style.textDecoration="none";
        }
    })

    let button=document.createElement("button");
    button.innerHTML="X";
    button.addEventListener("click",()=>{
    task.remove();
    });
    inner.appendChild(innInput);
    inner.appendChild(button);
    task.appendChild(inner);
    list.appendChild(task);
   }
});
