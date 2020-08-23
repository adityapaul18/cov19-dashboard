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

async function fetchWW()
{
    res=await fetch('https://api.covid19api.com/summary');
    src=await res.json();
    
    
    var y1=document.getElementById("dcc")
    var y2=document.getElementById("dca")
    var y3=document.getElementById("dcr")
    var y4=document.getElementById("dcd")
    
    var x1=document.getElementById("cc")
    var x2=document.getElementById("ca")
    var x3=document.getElementById("cr")
    var x4=document.getElementById("cd")
    
    var x,y,z,a,b,c,xx,yy;
    x=src.Global.NewConfirmed;
    y=src.Global.NewRecovered;
    xx=src.Global.TotalDeaths
    yy=src.Global.NewDeaths;
    a=src.Global.TotalConfirmed;
    b=src.Global.TotalRecovered;
    c=a-b-xx;
    z=x-y-yy;
    x1.innerHTML=a+x;
    x2.innerHTML=c+z;
    x3.innerHTML=b+y;
    x4.innerHTML=xx+yy;

    y1.innerHTML='+'+x;
    y2.innerHTML=z;
    y3.innerHTML='+'+y;
    y4.innerHTML='+'+yy;

}

fetchWW();

var countries=[];
async function fetchWc()
{
    res=await fetch('https://api.covid19api.com/summary');
    src=await res.json();

    countries =  src.Countries;
        updatetable(countries);
  
}

updatetable=(countries)=>{


        for(country of countries)
        {
            var newrow="<tr><td>"+country.Country +"</td><td>"+country.TotalConfirmed+"</td><td>"+country.TotalRecovered+"</td><td>"+country.TotalDeaths+"</td></tr>"

            $("#tablebody").append(newrow)
        }

        $("#covtab").DataTable();
    }
fetchWc();

var faridabad=[],dists=[];

async function fetchIW()
{
    res=await fetch('https://api.covid19india.org/state_district_wise.json');
    src=await res.json();
    faridabad=src.Haryana.districtData.Faridabad;
   
    console.log(src.Haryana.districtData);
    dists=src.Haryana.districtData;
    var y1=document.getElementById("dccf")
    var y2=document.getElementById("dcaf")
    var y3=document.getElementById("dcrf")
    var y4=document.getElementById("dcdf")
    
    var x1=document.getElementById("ccf")
    var x2=document.getElementById("caf")
    var x3=document.getElementById("crf")
    var x4=document.getElementById("cdf")
    
    var x,y,z,a,b,c,xx,yy;
    x=faridabad.delta.confirmed;
    y=faridabad.delta.recovered;
    yy=faridabad.delta.deceased;
    xx=faridabad.deceased;
    a=faridabad.confirmed;
    b=faridabad.recovered;
    c=a-b-xx;
    z=x-y-yy;
    x1.innerHTML=a+x;
    x2.innerHTML=c+z;
    x3.innerHTML=b+y;
    x4.innerHTML=xx;

    y1.innerHTML='+'+x;
    y2.innerHTML=z;
    y3.innerHTML='+'+y;
    y4.innerHTML='+'+yy;

    
             var uuu1=dists.Ambala;
            var newrow1="<tr><td>"+"Ambala" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
             $("#tablebody3").append(newrow1)

            var uuu1=dists.Gurugram;
            var newrow1="<tr><td>"+"Gurugram" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
               $("#tablebody3").append(newrow1)

               var uuu1=dists.Bhiwani;
               var newrow1="<tr><td>"+"Bhiwani" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                $("#tablebody3").append(newrow1)

                var uuu1=dists.Faridabad;
                var newrow1="<tr><td>"+"Faridabad" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                 $("#tablebody3").append(newrow1)

                 var uuu1=dists.Hisar;
                 var newrow1="<tr><td>"+"Hisar" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                  $("#tablebody3").append(newrow1)

                  var uuu1=dists.Jhajjar;
                  var newrow1="<tr><td>"+"Jhajjar" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                   $("#tablebody3").append(newrow1)

                   var uuu1=dists.Jind;
                   var newrow1="<tr><td>"+"Jind" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                    $("#tablebody3").append(newrow1)

                    var uuu1=dists.Kaithal;
                    var newrow1="<tr><td>"+"Kaithal" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                     $("#tablebody3").append(newrow1)

                     var uuu1=dists.Karnal;
                     var newrow1="<tr><td>"+"Karnal" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                      $("#tablebody3").append(newrow1)

                      var uuu1=dists.Kurukshetra;
                      var newrow1="<tr><td>"+"Kurukshetra" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                       $("#tablebody3").append(newrow1)

                       var uuu1=dists.Mahendragarh;
                       var newrow1="<tr><td>"+"Mahendragarh" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                        $("#tablebody3").append(newrow1)


                        var uuu1=dists.Nuh;
                        var newrow1="<tr><td>"+"Nuh" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                         $("#tablebody3").append(newrow1)

                         var uuu1=dists.Palwal;
                         var newrow1="<tr><td>"+"Palwal" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                          $("#tablebody3").append(newrow1)

                          var uuu1=dists.Panchkula;
                          var newrow1="<tr><td>"+"Panchkula" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                           $("#tablebody3").append(newrow1)
                        
                           var uuu1=dists.Panipat;
                           var newrow1="<tr><td>"+"Panipat" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                            $("#tablebody3").append(newrow1)

                            var uuu1=dists.Rewari;
                            var newrow1="<tr><td>"+"Rewari" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                             $("#tablebody3").append(newrow1)

                             var uuu1=dists.Rohtak;
                             var newrow1="<tr><td>"+"Rohtak" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                              $("#tablebody3").append(newrow1)

                              var uuu1=dists.Sirsa;
                              var newrow1="<tr><td>"+"Sirsa" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                               $("#tablebody3").append(newrow1)

                               var uuu1=dists.Sonipat;
                              var newrow1="<tr><td>"+"Sonipat" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                               $("#tablebody3").append(newrow1)

                               var uuu1=dists.Yamunanagar;
                              var newrow1="<tr><td>"+"Yamunanagar" +"</td><td>"+uuu1.confirmed+"</td><td>"+uuu1.recovered+"</td><td>"+uuu1.deceased+"</td></tr>";
                               $("#tablebody3").append(newrow1)

    

    $("#covtab3").DataTable();

    
}

fetchIW();

var  states=[],ss=[];
var q,w,e,r,t,y,u,i;

async function fetchInc()
{
    res=await fetch('https://api.covid19india.org/data.json');
    srcc=await res.json();
    states=srcc.statewise[0];
    ss=srcc.statewise;
    console.log(srcc);
    
    q=states.confirmed;
    w=states.active;
    e=states.recovered;
    r=states.deaths;

    t=states.deltaconfirmed;
    u=states.deltarecovered;
    i=states.deltadeaths;
    y=t-u-i;

    var y1=document.getElementById("dcci")
    var y2=document.getElementById("dcai")
    var y3=document.getElementById("dcri")
    var y4=document.getElementById("dcdi")
    
    var x1=document.getElementById("cci")
    var x2=document.getElementById("cai")
    var x3=document.getElementById("cri")
    var x4=document.getElementById("cdi")
    
    x1.innerHTML=q;
    x2.innerHTML=w;
    x3.innerHTML=e;
    x4.innerHTML=r;
    
    y1.innerHTML='+'+t;
    y2.innerHTML=y;
    y3.innerHTML='+'+u;
    y4.innerHTML='+'+i;

    datetable(ss);

}

datetable=(ss)=>{

    var d=0;
    for(sss of ss)
    {
        if(d){
            var newrow="<tr><td>"+sss.state +"</td><td>"+sss.confirmed+"</td><td>"+sss.recovered+"</td><td>"+sss.deaths+"</td></tr>"
        }

        d++;


        $("#tablebody1").append(newrow)

    }

    $("#covtab1").DataTable();
}



fetchInc();
