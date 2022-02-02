let output = document.getElementById(`screen`);
let clear = document.getElementById(`clear`);
let equal = document.getElementById(`equal`);
let delet = document.getElementById(`delete`);

delet.addEventListener(`click`, () => {
output.value = output.value.slice(0, -1);
});

equal.addEventListener(`click`, () => {
try {
    output.value = eval(output.value);
} 
catch (error) {
alert(`Invalid Input`);    
}
});

clear.addEventListener(`click`, () => {
      output.value = ``;
});

function display(num)
{
output.value += num;
}



