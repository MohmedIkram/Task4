var  request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    var casia=data.filter((x)=>x.region==='Asia');
     console.log(casia);
     // 2 lacks
     var popu=data.filter((x)=>x.population<200000);
     console.log(popu);
     //for-each
     data.forEach(element =>{
         console.log(`${element.name} -${element.capital}- ${element.flag}`)
     })

     var total=data.reduce((sum,cv)=>sum+cv.population,0);
     console.log(`${total}`);
   //us dollars
   var usd=data.filter((x) =>{
       for(var curr in x.currencies){
           if(x.currencies[curr].code =='USD'){
               return true;
           }
       }
   }).map(x=>console.log(x.name));
   console.log(usd);


}