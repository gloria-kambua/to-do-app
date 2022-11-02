let addItem =document.getElementById('add-item-form');
let createItem =document.getElementById('create-item');
let ourList = document.getElementById('the-list');
addItem.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('this field is ',createItem.value)
    fnCreateItem(createItem.value)

})
const fnCreateItem =(x)=>{
    ourList.insertAdjacentHTML('beforeend',x)
}