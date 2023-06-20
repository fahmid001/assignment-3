//1 (a)

function getDayOfWeek(dateString) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
  }
  let day=getDayOfWeek('2023-06-19');
  console.log(day);

//2(a)
function sumOfSquares(numbers) {
  let sumOfSquares = 0;

  for (let i = 0; i < numbers.length; i++) {
    sumOfSquares += Math.pow(numbers[i], 2);
  }

  return Math.sqrt(sumOfSquares);
}

//3 (a)
function isPrime(number) {
  if (number % 2 === 0) {
      return false;
  }
  return true;
}
console.log(isPrime(7)); 

async function store(){
  let URL = `https://api.example.com/submit`
  let res = await axios.post(URL,{
    name:"John Doe",
    email:"johndoe@example.com"
  }
  );
  if(res.status===200){
    window.location="index.html"
  }
  else {
    alert("error")
  }
}

