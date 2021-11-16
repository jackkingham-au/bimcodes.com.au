const val = {
    specialChars: /^[a-z'"-\s]+$/gi,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
}

export const validate = (e, optional = false) => {
    if(optional && e.target.value.trim() === '') return null;
    if(e.target.value.trim() === '' && !optional) return 'This is a required field.'; 

    switch(e.target.name) {
        case 'name':
            return (!e.target.value.trim().match(val.specialChars)) ? 'The name cannot include special characters or numbers.' : false; 
        case 'email':
            return (!e.target.value.trim().match(val.email)) ? 'The email provided is invalid.' : false;
        case 'phone':
            return (!e.target.value.trim().match(val.phone)) ? 'The phone number provided is invalid.' : false;
    }
}