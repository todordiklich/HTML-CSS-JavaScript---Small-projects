// First example
function example(name) {
  return new Promise((resolve, reject) => {
    if (name === "Todor") {
      resolve(name);
    }
    reject("The name has to be Todor!");
  });
}

example("Todor")
  .then((a) => console.log("Name: " + a))
  .catch((err) => console.error(err))
  .finally(() => console.log("FINALLY"));

//Second example
const myPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Success!");
  }

  reject("ERROR!!!");
});

async function myAsyncFunction() {
  try {
    console.log("in my async function - before resolvee");
    const data = await myPromise;
    console.log(data);
    console.log("in my async function - after resolve");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("FINALLY");
  }
}

console.log("before promise");
// myPromise
//   .then((res) => {
//     console.log("in promise - before resolve");
//     console.log(res);
//     console.log("in promise - after resolve");
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("FINALLY");
//   });
myAsyncFunction();
console.log("after promise");
