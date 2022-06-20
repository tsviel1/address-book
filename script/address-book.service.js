'use strict'

function onInit() {
    createAddressBook(renderAddressBook)
    // showLoader()
}

function renderAddressBook(addressBook) {
    console.log('addressBook:', addressBook);
    var strHTMLs = addressBook.map((card, idx) => 
    `<div class="card flex column">
        <div class="card-header">
            <h2>${card.lname}, ${card.fname}</h2>
        </div>
        <div class="card-main flex">
            <div class="image">
                <img src="https://robohash.org/${card.fname}?set=set1" alt="image">
            </div>
            <div class="details">
                <table>
                    <tr>
                        <td>Phone:</td>
                        <td>${card.tel}</td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td>${card.city}</td>
                    </tr>
                    <tr>
                        <td>State:</td>
                        <td>${card.state}</td>
                    </tr>
                    <tr>
                        <td>Zip:</td>
                        <td>${card.zip}</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>${card.address}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>`
    )
    document.querySelector('main').innerHTML = strHTMLs.join('')
}













function showLoader() {
    document.querySelector('main').classList.add('hide')
    document.querySelector('.loader').classList.remove('hide')
}