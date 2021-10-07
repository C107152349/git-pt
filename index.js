//list
const content = document.getElementById('content');
const addbtn = document.getElementById('addbtn');
const delbtn = document.getElementById('delbtn');
const list = document.getElementById('list');
const list_arr = [];

addbtn.addEventListener('click' , function(){
    //console.log(content.value);
    list_arr.unshift(content.value);
    update();
})
delbtn.addEventListener('click' , function(){
    list_arr.shift();
    update();
})
function update(){
    let htmlstr = ''
    list_arr.forEach(item => {
        htmlstr = htmlstr + `
        <div class ="item">
            <div align ="center">
                <P>內容</P><br/>
                <p>${item}</p><br/>
            </div>
        </div>
        `;
    });
    list.innerHTML = htmlstr;
}