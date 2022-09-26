let id = 0;

elementByID("add").onclick = () => {
    let table = document.getElementById("resume");
    let row = table.insertRow(1);
    row.setAttribute("id", `item-${id}`);
    row.insertCell(0).innerHTML = elementByID("new-role").value;
    row.insertCell(1).innerHTML = elementByID("new-production").value;
    row.insertCell(2).innerHTML = elementByID("new-company").value;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    elementByID("new-role").value = "";
    elementByID("new-production").value = "";
    elementByID("new-company").value = "";
};

function elementByID(id)
{
    return document.getElementById(id);
}

function createDeleteButton(id)
{
    let button = document.createAttribute("button");
    button.className = "btn btn-primary";
    button.id = id;
    button.innerHTML = "Delete Row";
    button.onclick = () => {
        let elementToDelete = elementByID(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };

    return button;
}