let div=document.createElement("div");
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.classList.add("btn","btn-primary");
button.innerHTML="search";
button.addEventListener("click",foo);

let active=document.createElement("div");
active.setAttribute("id","active");

let deaths=document.createElement("div");
deaths.setAttribute("id","deaths");

let recovered=document.createElement("div");
recovered.setAttribute("id","recover");


div.append(input,button,active,deaths,recovered);
document.body.append(div);

async function foo(){
    let countryname=document.getElementById("country").value;
    let url=`https://api.covid19api.com/dayone/country/${countryname}`;
    let res=await fetch(url);
    let res1=await res.json();
    let index=res1.length-1;
    active.innerHTML=`total active cases:${res1[index].Active}`;
    deaths.innerHTML=`total deaths cases:${res1[index].Deaths}`;
    recovered.innerHTML=`total recovered cases:${res1[index].Recovered}`;
}