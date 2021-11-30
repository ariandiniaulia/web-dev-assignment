const inputItem = document.getElementById('input_item');
const btnAddItem = document.getElementById('btn-add-item');
const listContainer = document.querySelector('.list');

const database = new Map();

btnAddItem.addEventListener('click', () => {
    const ITEM_KEY = inputItem.value.toUpperCase();
    const ITEM_VALUE = inputItem.value;
  
    // Create element
    const listItem = document.createElement('li');
    const textItem = document.createElement('p');
    const btnDelete = document.createElement('button');
    const counter = document.createElement('button');
  
    // Handle error, empty input
    if (ITEM_VALUE === '') {
      alert("Item Name can't be blank");
      inputItem.focus();
      return;
    }
  
    // The counter should be dynamicly show how much do we have for this item
    var i = 1;
    counter.textContent = i;
    if (database.has(ITEM_KEY)) {
      const Confirm = confirm(ITEM_VALUE + " sudah di tambahkan, mau menambahkan lagi?");
      if (Confirm) {
          const getCounter = document.getElementById(ITEM_KEY);
          i = Number(getCounter.textContent)
          getCounter.textContent = (i + 1);
      }
      inputItem.value = '';
      inputItem.focus();
      return;
  }
  counter.setAttribute("id", ITEM_KEY); 
    
    // Add the new item to database
    database.set(ITEM_KEY, ITEM_VALUE);
  
    // Add attribute
    listItem.classList.add('list-item'); // NOTE: Add Class
  
    // Add value
    textItem.textContent = ITEM_VALUE;
    btnDelete.textContent = 'Delete';
    
    // Combine elements
    listItem.append(textItem, btnDelete, counter);
    listContainer.appendChild(listItem);
    
    // Handle click event for delete button
    btnDelete.addEventListener('click', () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this item?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
              const getCounter = document.getElementById(ITEM_KEY);
                if (getCounter.textContent === "1") {
                    listContainer.removeChild(listItem);
                } else {
                    i = Number(getCounter.textContent);
                    getCounter.textContent = i - 1;
                }
            }
          })
    });
    inputItem.value = '';
    inputItem.focus();
  });