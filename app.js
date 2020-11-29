const entryPrice = document.getElementById('enterprice')
const stopPrice = document.getElementById('stopprice')
const risk = document.getElementById('risk')
const lev = document.getElementById('lev')
const calcBtn = document.getElementById('calcBtn')
const result = document.getElementById('result')
      


    window.onload = ()=>{
        entryPrice.value=""
        stopPrice.value=""
        risk.value=""
        lev.value=""
      }


    const validateForm = ()=>{
          if (!entryPrice.value||!stopPrice.value||!risk.value||!lev.value){
              result.innerHTML="لطفا مقادیر را وارد کنید"
              result.style.color="red"
              result.style.marginTop= "20px"
              result.style.textAlign = "center"
              if(!entryPrice.value){
                  entryPrice.style.borderColor = "red"
              }
              if(!stopPrice.value){
                  stopPrice.style.borderColor = "red"
              }
              if(!risk.value){
                  risk.style.borderColor = "red"
              }
              if(!lev.value){
                  lev.style.borderColor = "red"
              }
          }else{
              entryPrice.style.borderColor = ""
              stopPrice.style.borderColor = ""
              risk.style.borderColor = ""
              lev.style.borderColor = ""
              return true
          }
      }



    calcBtn.addEventListener('click', (e)=>{
          e.preventDefault();
          isValid = validateForm()
          if(isValid){
              calculate()
          }
      });

    const calculate =()=>{
          let entryVolume = (risk.value/(((entryPrice.value/stopPrice.value)*100-100)/100))/lev.value
              entryVolume = entryVolume.toFixed(3)
              if (entryVolume<0){
                  entryVolume = - entryVolume
              }
          console.log(result.value)
              result.className="alert alert-primary"
              result.innerHTML = `<h3>حجم ورودی: $ ${entryVolume}</h3>`
              result.style.textAlign ="center"
              result.style.marginTop= "20px"
              
        

      }