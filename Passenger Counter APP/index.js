let saveEl=document.getElementById("save-el")
let count = 0
let countEl = document.getElementById("count-el")
console.log(countEl)
function increment()
{
  count = count + 1 //count+=1(same version)
  countEl.textContent=count
}
function save(){
  let countstr= count + " -  "
  saveEl.textContent+=countstr // means as (saveEl.textContent=saveEl.textContent+countstr)
  countEl.textContent=0
  count =0
}
