const dropDown = document.querySelector('.dropdown');
const currentType = document.querySelector('.current-type')
const item = document.querySelectorAll('.item')

let currentValue;

dropDown.addEventListener('click', e =>  {
  dropDown.classList.toggle('active');
})

item.forEach((item) => {
  item.addEventListener('click', (e) => {
    currentValue = e.currentTarget.querySelector('.item_name').innerHTML;
    currentType.innerHTML = currentValue;
    // dropDown.classList.remove('active');
    console.log('removed')
  })
}
  
)

