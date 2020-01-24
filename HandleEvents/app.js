let firstName = document.getElementById("fName");
let lastName = document.getElementById("lName");
let submitBtn = document.querySelector('button');
submitBtn.addEventListener('click',()=>{
    if (firstName.value == '' || firstName.value == null){
    alert('Firstname is required!');
    }else if(lastName.value == '' || lastName.value == null){
        alert('Lastname is required!');
    }else if(firstName.value == '' || firstName.value == null  && lastName.value == '' || lastName.value == null){
        alert('Fields are required!');
    }
    else{
         alert(`Hello ${firstName.value} ${lastName.value}`)
    }
})
