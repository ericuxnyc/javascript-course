findMe();

function findMe() {
  console.log("found me!");
}

//notFound();

const notFound = function () {
  console.log("not found!");
};

function funcWrapper(callBack) {
  callBack("Called by wrapper");
}
funcWrapper(notFound);
funcWrapper((m) => console.log(m));

const arrowGreeting = (message, name) => console.log(message +" "+ name);

arrowGreeting("Hello", "World");
