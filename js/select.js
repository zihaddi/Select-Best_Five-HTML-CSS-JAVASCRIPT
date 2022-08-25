
//function for Actions Of Select Button
function action()
{
  if(ull.childElementCount+1<=5)
  {
    let ull = document.getElementById('ull');
    const name1 = document.getElementById(arguments[0])
    const name1Value= name1.innerText;  

      let list = document.createElement('li')
      list.innerText = name1Value
      ull.appendChild(list)
  }
  else
  {
    Swal.fire("You Cant Add More Than 5 Player")
  }

}

//Player 1
const select1 = document.getElementById('select1');
select1.addEventListener('click',function()
{
  const name = 'name1'
  action(name)
  select1.disabled = true;
  select1.style.background = 'gray'
  select1.style.border = 'none'
})
//Player 2
const select2 = document.getElementById('select2');
select2.addEventListener('click',function()
{
  const name = 'name2'
  action(name)
  select2.disabled = true;
  select2.style.background = 'gray'
  select2.style.border = 'none'
})
//Player 3
const select3 = document.getElementById('select3');
select3.addEventListener('click',function()
{
  const name = 'name3'
  action(name)
  select3.disabled = true;
  select3.style.background = 'gray'
  select3.style.border = 'none'
})
//Player 4
const select4 = document.getElementById('select4');
select4.addEventListener('click',function()
{
  const name = 'name4'
  action(name)
  select4.disabled = true;
  select4.style.background = 'gray'
  select4.style.border = 'none'
})
//Player 5
const select5 = document.getElementById('select5');
select5.addEventListener('click',function()
{
  const name = 'name5'
  action(name)
  select5.disabled = true;
  select5.style.background = 'gray'
  select5.style.border = 'none'
})
//Player 6
const select6 = document.getElementById('select6');
select6.addEventListener('click',function()
{
  const name = 'name6'
  action(name)
  select6.disabled = true;
  select6.style.background = 'gray'
  select6.style.border = 'none'
})





