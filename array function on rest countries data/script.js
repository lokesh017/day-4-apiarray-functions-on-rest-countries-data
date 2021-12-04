//Get all the countries from Asia continent /region using Filter function
var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asia);}
    
    
    
    
    
//Get all the countries with a population of less than 2 lakhs using Filter function
var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(population);}



//Print the following details name, capital, flag using forEach function
var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })}
   
   
   
   
 //Print the country which use US Dollars as currency.

var request = new XMLHttpRequest();
request.open('Get', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true)
request.send();
request.onload = function () {
        var data = JSON.parse(this.response);
        var cur=[];
        for(i=0;i<data.length;i++){
            if(data[i].currencies[0].code==="USD")
            {
                console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
            }
        }
    }


