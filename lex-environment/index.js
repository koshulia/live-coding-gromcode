/* eslint-disable */

// global lex env
//{
//  "environmentRecord": {
//      message: 'Test',
//      weight: 55,
//      run: function
//  }
//  "outer": null
//}

// run lex env
//{
//  "environmentRecord": {
//
//  }
//  "outer": global lex env
//}

// createMessenger lex env
//{
//  "environmentRecord": {
//      message: ...
//      ...
//  }
//  "outer": global lex env
//}

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

if (weight) {
  console.log('my weight is ' + weight);
}

const messanger = createMessenger();
run();

//=====

function counterFunk() {
  let count = 0;

  const counter = () => {
    count += 1;
    console.log(count);
  };

  return counter;
}

const counter1 = counterFunk();

// counterFunk lex env
//{
//  "environmentRecord": {
//
//  }
//  "outer": global lex env
//}

counter1();
counter1();

const counter2 = counterFunk();

counter2();
