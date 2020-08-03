const list = document.querySelector('#rescuerlist');

function renderlist(doc){
    let li = document.createElement('li');

    let div = document.createElement('div');
    div.className = "item-data";
    
    let name = document.createElement('span');
    let age =  document.createElement('span');
    let contact = document.createElement('span');
    
    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().Name;
    name.className = "name-column";
    age.textContent = doc.data().Age;
    age.className = "age-column";
    contact.textContent = doc.data().Contact;
    contact.className = "contact-column";
    
    div.appendChild(name);
    div.appendChild(age);
    div.appendChild(contact);
    li.appendChild(div);
    list.appendChild(li);
}


    
db.collection('Users').get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        renderlist(doc);
    });

})

