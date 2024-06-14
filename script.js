const button = document.querySelectorAll('button');
let my_arr = Array.from(button);
for(let i=0; i<my_arr.length; i++) {
my_arr[i]. addEventListener('mouseover', () => {  
    my_arr[i]. style. backgroundColor = 'rgb(198, 23, 198)' ;
    my_arr[i].style.color='white';
})
my_arr[i].addEventListener('mouseout', () => {
    my_arr[i].style.backgroundColor = '';
    my_arr[i].style.color='';
  });
}
const li = document.querySelectorAll('li');
let my_arr1 = Array.from(li);
for(let i=0; i<my_arr1.length; i++) {
    my_arr1[i]. addEventListener('mouseover', () => {  
        my_arr1[i]. style. backgroundColor = 'rgb(198, 23, 198)' ;
        my_arr1[i].style.borderRadius = "16px";
        my_arr1[i].style.color='white';
    })
    my_arr1[i].addEventListener('mouseout', () => {
        my_arr1[i].style.backgroundColor = '';
        my_arr1[i].style.color='';
        my_arr1[i].style.borderRadius = '0px';
      });
    }
