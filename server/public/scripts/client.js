
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
        dbRows= response.data;
        console.log('dbRows=', dbRows)
    })

    
}
// STEP 4: make sure to see if the function getanRenderDB
//         is connected to my router on the router side.
//         the getAndRenderDB should render 'router is online' from 
//         the router.get().
getAndRenderDB();
