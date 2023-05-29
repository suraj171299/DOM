var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')
// Form Submit Event

form.addEventListener('submit', addItem)
// Delete event 
itemList.addEventListener('click', removeItem)
// Filter event
filter.addEventListener('keyup', filterItems)

// ADD ITEM
function addItem(e){
    e.preventDefault()
    
    // Get input value
    var newItem = document.getElementById('item').value

    // Create new LI element
    var li = document.createElement('li')
    //Add class
    li.className = 'list-group-item'
    // ADD text node with input value
    li.appendChild(document.createTextNode(newItem))

    // Create delete button element
    var deleteBtn =  document.createElement('button')

    // ADD classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'))

    // Append button to li
    li.appendChild(deleteBtn)

    // Append li to list
    itemList.appendChild(li)

    // Description form
    var des = document.getElementById('item2').value

    // Add description to li
    li.append(document.createTextNode(des))
}

function removeItem(e){
    // If click is on delete button
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}


// Filter Items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase()
    // Get List
    var items = itemList.getElementsByTagName('li')
    // Convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent
        var description = item.childNodes[1].textContent
        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
}