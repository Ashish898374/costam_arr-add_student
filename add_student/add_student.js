function student(n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch=`ft-web${b}`;
}

     
function storeData(e)
{
    e.preventDefault();
    let form=document.getElementById("student_data");
    let name=form.name.value;
    let course=form.course.value;
    let unit=form.unit.value;
    let image=form.image.value;
    let batch=form.batch.value;

    let s1=new student(name,course,unit,image,batch)

    let data=JSON.parse(localStorage.getItem("student")) ||[]
        data.push(s1)
    
    // console.log(s1);
    localStorage.setItem("student",JSON.stringify(data));
    console.log(s1)
}

function calculate(){
    let data=JSON.parse(localStorage.getItem("student")) ||[];
    let obj={}
    for (let i=0;i<data.length;i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch]=1;
        }
    }
    for (let i=0;i<data.length;i++){
       
            obj[data[i].batch]++;
    }

    console.log(obj)
}
calculate()