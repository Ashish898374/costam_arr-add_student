function append(){
    let data=JSON.parse(localStorage.getItem("student")) ||[];
    let container=document.getElementById("container")
    container.innerHTML=null;
   
    data.forEach(function(ele,index){
        // console.log(ele)

        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.image;
        let p=document.createElement("p");
        p.innerText=ele.name;
        let p1=document.createElement("p1");
        p1.innerText=ele.course;
        let p2=document.createElement("p2");
        p2.innerText=ele.unit;
        let p3=document.createElement("p3");
        p3.innerText=ele.batch;
        let btn=document.createElement("button")
        btn.innerText="remove"
        btn.addEventListener("click",function(){
          remove(index);
        });



        div.append(img,p,p1,p2,p3,btn);
        container.append(div);
        
    });
  
}
append()

function remove(index){


    let data=JSON.parse(localStorage.getItem("student")) ||[];
    let newData=data.filter(function(ele,i){
        if (i===index){
            let trash=JSON.parse(localStorage.getItem("trash")) || [];
           trash.push(ele);
           localStorage.setItem("trash",JSON.stringify(trash));
        }
        else{
            return i !==index;
        }
       
    });
    localStorage.setItem("student",JSON.stringify(newData));
    append()
    // console.log(newData)
}
