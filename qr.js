const content= document.querySelector(".content");
const qrInput = content.querySelector(".form input");
const generateBtn = content.querySelector(".form button");
const qrImg = content.querySelector(".qr img");

generateBtn.addEventListener("click",()=>{
    let qrValue = qrInput.value;
    if(!qrValue)
    return;
    
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg = document.querySelector(".qr").style.display="block";
    
});
