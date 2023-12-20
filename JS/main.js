var siteName=document.getElementById('siteNameInput');
var siteUrl=document.getElementById('siteUrlNameInput');
var tbody=document.getElementById('tbody');
var bookContainer;
var nameRegex = /^\w{3,}(\s+\w+)*$/;
var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
if(localStorage.getItem('books')!=null){
    bookContainer=JSON.parse(localStorage.getItem('books'))
    display(bookContainer);
}else{
    bookContainer= [] 
}
function addBook() {

    if(validation1(siteName.value)&&validation2(siteUrl.value)){
        var book={
            name:siteName.value,
            siteUrl:siteUrl.value
        }
        bookContainer.push(book);
        localStorage.setItem('books',JSON.stringify(bookContainer));  
        display(bookContainer)
    }
}
function display(arr){
    var cartoona=``;
    for (let i = 0; i < arr.length; i++) {
        cartoona+=`     <tr>
        <td>${i+1}</td>
        <td>${arr[i].name}</td>
        <td><a href="https://${arr[i].siteUrl}" target="_blank"><button class="btn btn-success fs-5 btn-sm"><i class="fa-solid fa-eye me-1"></i> Visit</button></a></td>
        <td><button class="btn btn-danger fs-5 btn-sm" onclick="deleteBook(${i})"><i class="fa-solid fa-trash-can me-1"></i> Delete</button></td>
        </tr>`;
    }
tbody.innerHTML=cartoona;
}
function deleteBook(bookIndex) {
    bookContainer.splice(bookIndex,1)
    localStorage.setItem('books',JSON.stringify(bookContainer))
    display(bookContainer)
}
function validation1(bookterm) {
    if(nameRegex.test(bookterm)){
        siteName.classList.replace("is-invalid",'is-valid')    
        return true
    }else{
        siteName.classList.add('is-invalid')
        return false
    }
}
function validation2(bookterm) {
    if(urlRegex.test(bookterm)){
        siteUrl.classList.replace("is-invalid",'is-valid')   
        return true 
    }else{
        siteUrl.classList.add('is-invalid')
        return false
    }
}