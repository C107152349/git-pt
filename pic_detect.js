let canvas1 = document.getElementById("canvas1");
let ctx = canvas1.getContext("2d");
let sendbtn = document.getElementById('sendbtn');
let img_origin = document.getElementById('img')
let file_upload = document.getElementById('file')
const jsonUpload = document.getElementById('json-upload');
const weightsUpload = document.getElementById('weights-upload');
let upload = document.getElementById('upload');
let img = new Image;
sendbtn.addEventListener("click",function(){
    loadmodel().then(model =>{
        model.summary()
    })
})
async function loadmodel(){
    let model = await tf.loadLayersModel('https://c107152349.github.io/git-pt/tfjsmodel/model.json');
        //tf.io.browserFiles([jsonUpload.files[1], jsonUpload.files[0]]));
    return model;  
}
upload.addEventListener('click',function(){
    loadmodel().then(model =>{
        console.log(model.inputs[0].shape[1]);
    })
})