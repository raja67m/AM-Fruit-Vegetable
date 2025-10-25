//  contact form validation:

const form=document.getElementById('form');

form.addEventListener('submit',function(event){
   event.preventDefault();


   const fullname=document.getElementById('fullName');
   const email=document.getElementById('emailID');
   const phoneNum=document.getElementById('phoneNum'); 
   
   const subject=document.getElementById('subject');                        


if(!fullname.value){
   fullname.classList.add('error-input');
}
else{
    fullname.classList.remove('error-input');
}
if(!email.value){
    email.classList.add('error-input');
}
else{
    email.classList.remove('error-input');
}
if(!phoneNum.value){
    phoneNum.classList.add('error-input');
}else{
    phoneNum.classList.remove('error-input');
}

if(!subject.value){
    subject.classList.add('error-input');
}else{
    subject.classList.remove('error-input');
}

if(fullname.value && email.value  && phoneNum.value  && subject.value){
    alert("Form submited");

form.reset();
  
}

});



// feedback form validation

const feedBackForm=document.getElementById('feedBackForm');


   feedBackForm.addEventListener('submit',function(event){
   event.preventDefault();
           const userName=document.getElementById('userName');
   const feedback=document.getElementById('feedBack');
if(!userName.value){
  userName.classList.add('error-input');
}
else{
    userName.classList.remove('error-input');
}
if(!feedback.value){
    feedback.classList.add('error-input');
}
else{
    feedback.classList.remove('error-input');
}

   });