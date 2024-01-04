// reveal Events

const reavealBtn = document.querySelector('.reveal-btn')

const hiddenContent = document.querySelector('.hidden-content')

function reavelContent(){
      if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn')
      }else{
        hiddenContent.classList.add('reveal-btn')
      }
}

reavealBtn.addEventListener("click", reavelContent)