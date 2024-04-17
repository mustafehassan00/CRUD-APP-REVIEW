
console.log('👋🌍');

//STEP 1: make a function for the getAndRenderDB
//        where it will contain the GET axios
function getAndRenderDB(){

    axios({
        method:'GET',
        url:'/us'

//STEP 9: Create a .then() to catch dbResult.rows
//        it should now show up on the console in the webpage.
    }) .then((response) =>{
            let dbRows= response.data;
            console.log('dbRows=', dbRows)

//STEP 10: Create a variable that dblist to grab it from the HTML
            let dbList = document.getElementById("dbList")
//STEP 11: clear out the list that we want to render 
                dbList.innerHTML=``;
//STEP 12: create  a for loop that will allow us to grab the exact
//         data of dbRows we have defined earlier 
        for(dbPerson of dbRows){

            let name= dbPerson.name
            let ishungry= dbPerson.is_Hungry
            let inserted_at= dbPerson.inserted_at

            dbList.innerHTML+=`
                <li>
                    ${name} ${ishungry} ${inserted_at}
                </li>`
        }
    })

    
}

function postAndRenderInputs(){


    axios({
        method:'POST',
        url:'/us'
    })
}

postAndRenderInputs()
// STEP 4: make sure to see if the function getanRenderDB
//         is connected to my router on the router side.
//         the getAndRenderDB should render 'router is online' from 
//         the router.get().
getAndRenderDB();
