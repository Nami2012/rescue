const list = document.querySelector('#rescuerlist');

function renderlist(doc){
    let li = document.createElement('li');

    //let div = document.createElement('div');
    //div.className = "item-data";
    
    let name = document.createElement('span');
    let age =  document.createElement('span');
    let contact = document.createElement('span');
    
    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    //name.className = "name-column";
    age.textContent = doc.data().age;
    //age.className = "age-column";
    contact.textContent = doc.data().contact;
    //contact.className = "contact-column";
    
    li.appendChild(name);
    li.appendChild(age);
    li.appendChild(contact);
   
    list.appendChild(li);
}


db.collection('Users').get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
        renderlist(doc);
    });

})