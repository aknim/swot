let currId = "swot-"+new Date();

document.querySelectorAll('.editable').forEach((editable) => {
    editable.addEventListener('input', () => {
        console.log('Content changed:', editable.innerHTML);
    });
});

function autoSave() {
    const boxes = document.querySelectorAll(".box");
    const boxContents = Array.from(boxes).map(box => box.innerHTML);
    const allData = JSON.stringify(boxContents);
    localStorage.setItem(currId, allData);
    console.log(allData);
}

function save() {
    const boxes = document.querySelectorAll(".box");
    const boxContents = Array.from(boxes).map(box => box.innerHTML);
    const allData = JSON.stringify(boxContents);
    console.log(allData);
    alert("saved");
}

function load() {
    const inputJSON = prompt("Enter info to load");
    if(inputJSON){
        try {
            const parsedData = JSON.parse(inputJSON);
            const boxes = document.querySelectorAll(".box");
            for(let i=0;i<boxes.length;i++){
                boxes[i].innerHTML = parsedData[i];
            }
        } catch (error) {
            alert("Invalid JSON format. Please try again.");
        }
    }
}

document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault(); // Prevent browser's default behavior
        save();
    }

    if ((event.ctrlKey || event.metaKey) && event.key === 'l') {
        event.preventDefault(); // Prevent browser's default behavior
        load();
    }
})

setInterval(autoSave, 10000);

