let rotate = false

function generateAdvice() {
   const idAdviceContainer = document.getElementById('card-title');
   const adviceContainer = document.getElementById('card-quote');
   
   
   fetch('https://api.adviceslip.com/advice')
   .then(res => {
      if (!res.ok) {
         throw new Error(res.statusText)
      }
      return res.json()
   })
   .then(data => {
      adviceContainer.innerText = `"${data.slip.advice}"`
      idAdviceContainer.innerText = `Advice #${data.slip.id}`
   })
   .catch(err => {
      console.log(err)
      idAdviceContainer.innerText = '000'
      adviceContainer.innerText = 'We cant connect to the service'
   })
   
   const btnImg = document.getElementById('btn-img')
   
   if (!rotate) {
      btnImg.style.transform = 'rotate(180deg)';
      rotate = true
   } else {
      btnImg.style.transform = 'rotate(0deg)';
      rotate = false
   }
}

generateAdvice()

const generateBtn = document.getElementById('quote-generator-btn')
generateBtn.addEventListener('click', generateAdvice)