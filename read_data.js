const readdata = document.getElementById("readdata");
const tbtn = document.getElementById("time");
const dbtn = document.getElementById("death");
const hbtn = document.getElementById("hurt");
//按下"死亡"後觸發
dbtn.addEventListener('click',function(){
    //從"./data/11007.json"讀取data
    fetch("./data/11007.json",{method:'GET'}).then(response =>{
        //回傳json檔
        return response.json();
    }).then(result =>{
        //讀取回傳json至result並照死亡人數排序(多排至少)
        result = result.sort(function(a,b){
            return a["死"] < b["死"] ? 1:-1;
        })
        //更新index.html
        readdata.innerHTML = update(result);
    })
})
//按下"受傷"後觸發
hbtn.addEventListener('click',function(){
    //從"./data/11007.json"讀取data
    fetch("./data/11007.json",{method:'GET'}).then(response =>{
        //回傳json檔
        return response.json();
    }).then(result =>{
        //讀取回傳json至result並照受傷人數排序(多排至少)
        result = result.sort(function(a,b){
            return a["受傷"] < b["受傷"] ? 1:-1;
        })
        //更新index.html
        readdata.innerHTML = update(result);
    })
})
tbtn.addEventListener('click',function(){
    load_data("./data/11007.json");
})
load_data("./data/11007.json");
function load_data(url){
    //從"./data/11007.json"讀取data
    fetch(url,{method:'GET'}).then(response =>{
        //回傳json檔
        return response.json();
    }).then(result =>{
        //讀取回傳json至result，json預設照時間排序
        //更新index.html
        readdata.innerHTML = update(result);
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
    //回傳更新後字串
    return htmlstr;
}