document.addEventListener("DOMContentLoaded", function () {
  // DOM- Document Object Model
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const password2 = document.getElementById("password2");
  const formElementi = document.getElementsByClassName("form")[0];
  // NodeList ve HTMLCollection
  // Debugger
  // console.log(formElementi)

  function showSucces(input) {
    const valideynElement = input.parentElement;
    valideynElement.classList.add("success");
  }

  function showError(qutu, mesaj) {
    const valideynElementi = qutu.parentElement;
    valideynElementi.classList.add("error");
    const smallTeqi = valideynElementi.querySelector("small");
    smallTeqi.innerText = mesaj;
  }
  function checkEmail(elektronPoct) {
    const qayda = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (elektronPoct.value.trim==="") {
      showError(elektronPoct,"elektron poct standartlara uygun deyil")
    } else if( qayda.test(elektronPoct.value)){
      showSucces(elektronPoct)
    }else{
      showError(elektronPoct,"elektron poct standartlara uygun deyil")
    }
    
  }

  function checkRequired(inputlar) {
    inputlar.forEach(birInput=>{
        if(birInput.value.trim()===""){
            showError(birInput,`${getFieldName(birInput)} sahesi bosh buraxila bilmez`)
        }
        else{
          showSucces(birInput)
        }


    });
  }


function getFieldName(textbox){
    return textbox.id.charAt(0).toUpperCase()+textbox.id.slice(1)
}

function checkLength(input, min, max){

    if(input.value.length<min || input.value.length>max){
      showError(input,`${getFieldName(input)} sahesi ${min} ve maksimum ${max} olmalidir`)
    }
    else{
      showSucces(input)
    }


}

function comparePassword(p,cP){
if(p.value!==cP.value){
  showError(cP, "shifreler uygun deyil")
}



}



formElementi.addEventListener("submit", function(e){
  e.preventDefault() //!yenilenmenin qabagini alir

  checkRequired([username,email,password,password2])
  checkLength(username,3,10)
  checkLength(password,8,13)
  checkEmail(email)
  comparePassword(password,password2)




})


});




function shifreniGorset(){
  const passwordSahesi=document.getElementById("password")
if(passwordSahesi==="password"){
  passwordSahesi="text"
} else{
  passwordSahesi="password"
}

}

document.querySelector(".fa-eye").addEventListener("click", shifreniGorset())