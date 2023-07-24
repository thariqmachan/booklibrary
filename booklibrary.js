function addedBook(){
    bookid=q1.value
    bknm=q2.value
    athrnm=q3.value
    descr=q4.value

    if(bknm in localStorage){
        alert("Book already added")
        window.location='index.html'

    }
    else{
        user={bookid,bknm,athrnm,descr}

        localStorage.setItem(bknm,JSON.stringify(user))
        alert("Book added succesfully")

        window.location("index.html")
    }
}

function searchBook(){
    
        bknm=bn1.value
        if(bknm in localStorage){
            booksObj=JSON.parse(localStorage.getItem(bknm))
            s1.innerHTML=`<p class="container card w-75 p-5" style="background-color:rgba(216, 112, 147, 0.577);text-align:left;color:white;">Book name:${booksObj.bknm}<br>
                        Author name:${booksObj.athrnm}<br>
                        Description:${booksObj.descr}<br>
            </p>`
        }
        else{
            s1.innerHTML=`<p style="color:red">BOOK NOT FOUND!</p>`
        }
    }
    function searchPage(){
        window.location='searchbook.html'
    }
    function addPage(){
        window.location='index.html'
    }
