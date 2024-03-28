let jewelryContainer = document.querySelector('.jewelry-container')
let sortButton = document.querySelector('.sort-btn')

function renderItems(items){
  let filters = []
  items.forEach(item => {
    if(filters.includes(item.course)){}
    let jewelryItem = document.createElement('div')
    jewelryItem.innerText = item.Title
    jewelryItem.style.backgroundColor = item.Color
    jewelryItem.classList.add('jewelry-item')

    jewelryContainer.append(jewelryItem)
  });
}

let sortState = null

document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
      .then((response) => response.json())
      .then((items) => {
      
        renderItems(items)
        sortButton.addEventListener('click', () => {
          jewelryContainer.innerHTML = ''
          var sortedItems = []

          if(sortState == 'asc'){
            sortedItems = items.sort((a, b) => b.price - a.price);

            sortState == 'desc'
          } else{
            sortedItems = items.sort((a, b) => a.price - b.price);

            sortState == 'asc'
          }
          renderItems(sortedItems)
        })

        })
        .catch((error) => console.error("Error fetching JSON:", error));
});