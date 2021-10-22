//1

function* fibonacci() {
    let current = 0;
    let next = 1;
  
    while(true){
      yield current;
      [current, next] = [next, current + next];
    }
  }
  
  const fib = fibonacci();
  for(let i = 0; i < 10; i++){
    console.log(fib.next().value);
  }

  //2

function fetchUser(id) {
  const users = {
      1: {
          uid: 1,
          name: 'John Doe',
          age: 22
      }
  };
  return users[id]            
}

const promisify = (fn) => {
  return (id) => new Promise(function(resolve, reject) {                                
      setTimeout(function () {
          const selectedUser = fn(id);
          const error = selectedUser ? null : 'No User Found';
          !error ? resolve(selectedUser) : reject(error)                    
      }, 500)                
  })            
}        

const promisifiedFetchUser = promisify(fetchUser);

promisifiedFetchUser(1)
  .then(response => console.log(`User data: ${JSON.stringify(response)}`))
  .catch(error => console.log(`An error happened: ${error}`))

  


