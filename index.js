function togl(){
    document.getElementById('toggle').classList.toggle('active');
    document.getElementById('sidebar').classList.toggle('active');
   }

   function func(pagename, element, color)
{
    var i,tabcont,tablinks;

    tabcont=document.getElementsByClassName("tabcont");
    for(i=0;i < tabcont.length ; i++)
    {
        tabcont[i].style.display = "none";
    }

        tablinks=document.getElementsByClassName("tab");

        for(i=0;i < tabcont.length ; i++)
        {
            tablinks[i].style.backgroundColor = "";
        }

        document.getElementById(pagename).style.display = "block";

        var jj=document.getElementById(element);
        jj.style.backgroundColor = "rgb(71, 71, 71)";
        // document.getElementById("ll").style.backgroundColor = color;
}

var t=document.getElementById("t1");

t.click();

var y1=document.getElementById("dcc")
var y2=document.getElementById("dca")
var y3=document.getElementById("dcr")
var y4=document.getElementById("dcd")

var x1=document.getElementById("cc")
var x2=document.getElementById("ca")
var x3=document.getElementById("cr")
var x4=document.getElementById("cd")

var x,y,z,a,b,c;

async function fetchWW()
{
    res=await fetch('https://api.covid19api.com/summary');
    src=await res.json();
  
    console.log(src.Global);
    x=src.Global.NewConfirmed;
    y=src.Global.NewRecovered;
    z=x-y;

    a=src.Global.TotalConfirmed;
    b=src.Global.TotalRecovered;
     c=a-b;
    x1.innerHTML=a+x;
    x2.innerHTML=c+z;
    x3.innerHTML=b+y;
    x4.innerHTML=src.Global.TotalDeaths;

    y1.innerHTML=x;
    y2.innerHTML=z;
    y3.innerHTML=y;
    y4.innerHTML=src.Global.NewDeaths;

}

fetchWW();




