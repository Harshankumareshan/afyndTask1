alert("submitted uccesfully")
document.addEventListener('DOMContentLoaded', function(){
    const registrationForm = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    registrationForm.addEventListener('submit', function(event){
        event.preventDefault();
        const errors = {};

        if(!nameInput.value.trim()){
            errors.name = 'Name is required';
        }

        if(!emailInput.value.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value)){
            errors.email = 'Invalid Email address';
        }

        if(!phoneInput.value.trim()) {
            errors.phone = 'Phone is required';
        } else if (!/^\d{10}&/.test(phoneInput.value)){
            errors.phone = 'invalid phone number';
        }

        if(!passwordInput.value !== confirmPasswordInput.value) {
            errors.confirmPassword = 'Password is not matching';
        }

        if (Object.keys(errors).length > 0) {
            Ojject.keys(errors).forEach(key => {
                document.getElementById(`${key}Error`).textContent = errors[key];
            });
        }else{
            console.log('Form submitted');
            registrationForm.reset();
            Object.keys(errors).forEach(key => {
                document.getElementById(`${key}Error`).textContent = '';
            })
        }
    })

})

