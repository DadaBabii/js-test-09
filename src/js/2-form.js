// localStorage.setItem('test', 'hello');

const form = document.querySelector('.feedback-form');
console.log(form);
const STORAGE_KEY = "feedback-form-state";
form.addEventListener('input', () => 
{
    const userEmail = form.elements.email.value;
    // console.log(userEmail);
    const userMessage = form.elements.message.value;
    // console.log(userMessage);

const obj = {
    email: userEmail,
   message: userMessage,
};

    saveToLS(STORAGE_KEY, obj);

});

function restoreData() {
     
    const { email, message } = getFromLS(STORAGE_KEY) || {};

     form.elements.email.value = email || '';
     form.elements.message.value = message || '';
};
restoreData();

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (e) {
    e.preventDefault();
    const obj = getFromLS(STORAGE_KEY) || {};
    console.log(obj);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();


}



    

// const str = JSON.stringify(obj);

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
};

function getFromLS(key = "empty") {
    const value = localStorage.getItem(key);
    try {
        
        const data = JSON.parse(value);
        return data;
        
    } catch (error) { console.log('error')
        
    }
};
