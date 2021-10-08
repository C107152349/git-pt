const readdata = document.getElementById("readdata");
const tbtn = document.getElementById("time");
const dbtn = document.getElementById("death");
const hbtn = document.getElementById("hurt");

dbtn.addEventListener('click',function(){
    fetch("./data/11007.json",{method:'GET'}).then(response =>{
        return response.json();
    }).then(result =>{
        result = result.sort(function(a,b){
            return a["死"] < b["死"] ? 1:-1;
        })
        readdata.innerHTML = update(result);
        return result;
    })
})
hbtn.addEventListener('click',function(){
    fetch("./data/11007.json",{method:'GET'}).then(response =>{
        return response.json();
    }).then(result =>{
        result = result.sort(function(a,b){
            return a["受傷"] < b["受傷"] ? 1:-1;
        })
        readdata.innerHTML = update(result);
        return result;
    })
})
tbtn.addEventListener('click',function(){
    load_data("./data/11007.json");
})
load_data("./data/11007.json");
function load_data(url){
    fetch(url,{method:'GET'}).then(response =>{
        return response.json();
    }).then(result =>{
        readdata.innerHTML = update(result);
        return result;
    })
}
function update(data){
    let i = 1;
    let htmlstr =``
    data.forEach(element =>{
        htmlstr = htmlstr + `
        <div align ="center">
            <p> 
                編號${i}<br/>
                ${element["年"]}年${element["月"]}月${element["日"]}日
                ${element["時"]}點${element["分"]}分
                ${element["區"]}<br/>
                死亡人數:${element["死"]}
                受傷人數:${element["受傷"]}
            
            </p>
        </div>
        `;
        i++;
    })
    return htmlstr;
}