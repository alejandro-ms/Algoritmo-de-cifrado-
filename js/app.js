function encript (element) {
   let word = document.getElementsByTagName("input")[0].value;  //Se obtiene el elemento input como solamente hay un input es el de la posición 0
   let word_encrypted = btoa(word); // btoa para codificar en base-64
   document.getElementById("encript").innerHTML = word_encrypted;
 }

 function decrypt(element) {
    let word = document.getElementsByTagName("output")[0].value; // Se obtiene el elemento output como solamente hay un output es el de la posición 0
    let word_decrypt = atob(word); //atob para decodificar 
    document.getElementById("result").innerHTML = word_decrypt; //se obtiene el elemento con id result que es un output y se manda la palabra desencriptada
 }
 

 