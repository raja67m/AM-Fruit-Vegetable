function searchBar(){
   let input=document.getElementById('searchBar').value;
    input=input.toLowerCase();
    let x=document.querySelectorAll(".products");
 
    for(i=0;i<x.length;i++){
      if(input === ''){
         x[i].style.display='';

      }else if(!x[i].innerHTML.toLowerCase().includes(input)){
         x[i].style.display="none";
        
      }else{
         x[i].style.display='products';
      
      }
    }
}