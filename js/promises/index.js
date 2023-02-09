const formElem = document.querySelector('.login-form');

const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';

function createUserHandler(event) {
  event.preventDefault();

  // read form

  const user = {
    email: 'test@gmail.com',
    name: 'Uliana',
    password: '123',
  };

  // save to DB (server)

  //input: string (url), obj (params)
  //output: promise

  const res = fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(
      // input: callback fulfilled, callback rejected
      // output: promise
      res => {
        //callback
        //input: result of promise
        //output: promise (async code) | undefined

        // 1st callback
        if (res.status === '400') {
          //   alert(res.body.message);
        }

        if (res.status === '500') {
          alert('Server is n ot available');
          throw new Error();
          // когда нам нужно отобразить одну ошибку для всего, не учитываля разные типы ошибок
        }

        if (!res.ok) {
          alert('Something went wrong');
          return;
        }

        return res.json();
      },
      err => {
        // 2nd callback
        // resolved 1st OR rejected 2nd
        // better to use catch
      },
    )
    .then(body => {
      // столько then, сколько нужно для того, чтобы код перестал быть асинхронным, то есть до тех пор, пока мы не вернем value, а не promise
      console.log(body);

      //input: str
      //output: undefined
      alert(JSON.stringify(body));
    })
    .catch(err => {
      alert('Your connection lost...');
      // когда не вернулся промис или прокинули ошибку
    });
  console.log(res);
}

formElem.addEventListener('submit', createUserHandler);
