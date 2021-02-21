function encript (element) {
   let word = document.getElementsByTagName("input")[0].value;
   let word_encrypted = btoa(word);
   document.getElementById("decrypt").innerHTML = word_encrypted;
 }

 function decrypt(element) {
    let word = document.getElementsByTagName("output")[0].value;
    let word_decrypt = atob(word);
    document.getElementById("result").innerHTML = word_decrypt;
 }


 