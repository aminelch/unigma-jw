window.onload = ()=>{
  
  const send = (data) =>{
    const url = "https://mockbin.com/request"
    const requetMethod= "POST"
    let request = new XMLHttpRequest()
    request.open(requetMethod, url)
    
    
   
    request.setRequestHeader("Content-Type", "application/json") 
    request.onreadystatechange = ()=>{
      
      if(request.readyState === XMLHttpRequest.DONE){
         if(request.status===200){
           
              document.querySelector('#result').textContent=`Requete envoyée:
              ${request.responseText}`
        }
      }
    }
    
    
    request.send(JSON.stringify(data)) //on envoie les données 
  }
  
  let form = document.querySelector('#form')
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('sending form')
  
    // on construit l'objet à envoyer 
    const data = {
      value: document.querySelector('#field1').value
    }
    console.log(data)
    send(data)
  })
  
}
