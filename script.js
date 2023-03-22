const days = document.querySelector('.number');
const monthDiv = document.querySelector('.month');
const yearDiv = document.querySelector('.year');
const nextBtn = document.querySelector('.next-arrow span');
const prevBtn = document.querySelector('.prev-arrow span');

//neq Date
const date = new Date();
const today = date.getDate();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

//Array of month
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


const laod = () => {
  days.innerHTML = '';
  //last date of month
  const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
  //first day of month
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  //Last Day of month
  const lastday = new Date(currentYear, currentMonth, lastDate).getDay();
  
  //Match month and display month
  yearDiv.innerText = currentYear;
  month.forEach((month, index) => {
    if (index == currentMonth) {
      monthDiv.innerText = month;
    };
  });
  
  //Last Month Last day
  const lastMonth = new Date(currentYear, currentMonth, 0).getDate();
  
  
  //remaining days of last month
  for (let i= firstDay; i> 0;i--) {
    const span = document.createElement('span');
    span.className = 'gray';
    span.innerText = lastMonth - i +1;
    days.appendChild(span);
  }
  
  
  for (let i = 1;i<=lastDate; i++) {
        const span = document.createElement('span');
        span.innerText = i;
        days.appendChild(span);
  };
  
  //highlight today s date
  document.querySelectorAll('.number span')
  .forEach(span => {
    if (span.innerText == today) {
      span.className = 'today';
    };
  });
  
  //first days of nextmonth
  for (let i = lastday; i < 6; i++) {
    const span = document.createElement('span');
    span.className = 'gray';
    span.innerText = i - lastday +1;
    days.appendChild(span);
  };

}
laod()


const next = () => {
  currentMonth++;
  //check if month is grater then 11 (December) then go next year
  if (currentMonth > 11) {
    currentYear++;
    currentMonth = 0;
  };
  laod();
  //if not current month then remove today class
  const today = document.querySelector('.today');
  today.classList.remove('today');
};


const prev = () => {
  currentMonth--;
  //check if month is less then 0 (January) then go previous year
  if (currentMonth < 0) {
    currentYear--;
    currentMonth = 11;
  }
  laod();
  //if not current month then remove today class
  const today = document.querySelector('.today');
  today.classList.remove('today');
};

nextBtn.addEventListener('click',next);
prevBtn.addEventListener('click',prev);

//kshapi