import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const email = document.querySelector('input');

const textarea = document.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(fillForm, 500));
form.addEventListener('submit', submitForm);

function fillForm(){
    const newObjSave = {email: email.value, message: textarea.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newObjSave));
};

function submitForm(evt) {
    evt.preventDefault();
    console.log({email: email.value, message: textarea.value });
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
};

function loadingStorage () {
    const getItemLOCALSTORAGE_KEY = localStorage.getItem(LOCALSTORAGE_KEY);
    return getItemLOCALSTORAGE_KEY === null ? undefined : JSON.parse(getItemLOCALSTORAGE_KEY);
};

const storageData = loadingStorage();
if (storageData) {
  email.value = storageData.email;
  textarea.value = storageData.message;
};




    

