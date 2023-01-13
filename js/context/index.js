// required to know
// 1. what is context
// 2. when context is lost
// 3. how to fix context

// console.log(this);

function sayHi() {
  console.log(`Hello ${this.userName}`);
}

const user = {
  userName: 'Uliana',
};

const sayHiBinded = sayHi.bind(user);
// sayHiBinded();

//timer
const timer = {
  minsPassed: 0,
  secondsPassed: 0,
  startTimer() {
    // console.log(this);

    //input: callback,ms
    //output: number(ID)

    //lose context - case 2

    // setInterval(
    //   function () {
    //     this.secondsPassed += 1;
    //     //   console.log(this);
    //     console.log(this.secondsPassed);
    //   }.bind(this),
    //   1000,
    // );

    setInterval(() => {
      this.secondsPassed += 1;

      if (this.secondsPassed === 5) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }

      console.log(this);
    }, 1000);
  },
  getTimer() {},
  stopTimer() {},
  resetTimer() {},
};

timer.startTimer();

//lose context - case 2
const func = timer.startTimer;
// func();
