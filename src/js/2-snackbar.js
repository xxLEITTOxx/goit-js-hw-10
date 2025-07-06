import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const myForm = document.querySelector(".form");
const myDelay = document.querySelector('input[name="delay"]');

myForm.addEventListener("submit", createPromise);

function createPromise(event) {
  event.preventDefault();
  const delay = Number(myDelay.value);
  const isFulfilled = myForm.elements.state;
  const promiseState = isFulfilled.value;
  // console.log(promiseState);

  myForm.reset();
  let myBestPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (promiseState === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
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
