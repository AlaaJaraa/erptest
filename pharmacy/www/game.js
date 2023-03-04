

let dragged; 

function onDragOver(event) {
  console.log("done");
  // Prevent default to allow drop
  event.preventDefault();
}

function onDragLeave(event) {
  event.target.style.background = '';
  // event.target.style.background-size = '0';
  event.target.id=''; // added to show existing items in droZone
}

function onDragEnter(event) {
  const target = event.target;
  if (target && dragged) {
    
      target.id='newItem'; // added to TMP hide existing items in dropZone
      event.preventDefault();
      // Set the dropEffect to move
      event.dataTransfer.dropEffect = 'copy'
      target.style.background = '#1f904e'; //green
  }
}

function onDrop(event) {
  const target = event.target;
  if (target && dragged) {
    
    target.style.backgroundColor = '';
    event.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    dragged.parentNode.removeChild(dragged);
    dragged.style.opacity = '';
    target.appendChild(dragged);
    target.id=''; // added to show existing items in droZone
    dragged.setAttribute('draggable','false');
  }
}

function onDragStart(event) {
  let target = event.target;
  // $(target.nodeName).clone().appendTo('.drop-zone');
  if (target && target.nodeName === 'IMG') { // If target is an image
    
      dragged = target;
      event.dataTransfer.setData('text', target.id);
      event.dataTransfer.dropEffect = 'copy';
      // Make it half transparent
      event.target.style.opacity = .3;
  }
}

function onDragEnd(event) {
  if (event.target && event.target.nodeName === 'IMG') {
      // Reset the transparency

      
      event.target.style.opacity = ''; // reset opacity when drag ends 
      dragged = null;
  }
}


const items = document.querySelector('.items');
const dropZone = document.querySelector('.drop-zone');

// Adding event listeners
items.addEventListener('dragstart', onDragStart);
items.addEventListener('dragend', onDragEnd);
dropZone.addEventListener('drop', onDrop);
dropZone.addEventListener('dragenter', onDragEnter);
dropZone.addEventListener('dragleave', onDragLeave);
dropZone.addEventListener('dragover', onDragOver);


// const columns = document.querySelectorAll(".drop-zone");

// columns.forEach((column) => {
//     new Sortable(column, {
//         group: "shared",
//         animation: 150,
//         ghostClass: "blue-background-class"
//     });
// });