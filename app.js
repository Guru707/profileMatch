let profilematch = new Profilematch;
let ui = new UI;
  
console.log(ui);

profilematch.profiledata().then((data)=>{

    let response = data.profile;
    // console.log(response)

    function newprofiledata(){
      let nextIndex = 0;
      return{
        next:function(){
          return nextIndex < response.length ?
          {value:response[nextIndex++], done:false}:
          {done:true}
        }
      }
    }
    let newdata = newprofiledata(response);
    
    

    ui.profileDisplay(newdata.next().value);
    
   
// Next Event
document.getElementById('next').addEventListener('click', function(){
 
  ui.profileDisplay(newdata.next().value);
});

})

