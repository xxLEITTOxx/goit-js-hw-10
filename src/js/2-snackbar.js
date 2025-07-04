import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";
const myForm = document.querySelector(".form");
const myDelay = document.querySelector('input[name="delay"]');
const promiseFullfilled = document.querySelector('input[value="fulfilled"]');
const promiseRejected = document.querySelector('input[value="rejected"]');
const submit = document.querySelector('button[type="submit"]');

myForm.addEventListener("submit", createPromise);

function createPromise(event) {
  event.preventDefault();
  let myBestPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (promiseFullfilled.checked) {
        resolve(Number(myDelay.value));
      } else {
        reject(Number(myDelay.value));
      }
    }, Number(myDelay.value));
  });
  myBestPromise
    .then((result) => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${result}ms`,
        position: "topRight",
        progressBar: false,
        icon: false,
      });
    })
    .catch((error) => {
      iziToast.error({
        message: `❌ Rejected promise in ${error}ms`,
        position: "topRight",
        progressBar: false,
        icon: false,
      });
    });
}
