class UI{
    constructor(){
        this.profiledata = document.getElementById('profiledata');
        this.profileImage = document.getElementById('imageDisplay');
        this.profileImage = document.getElementById('imageDisplay');
        
    }

    profileDisplay(res){
        console.log("arr",res);
        if(res !== undefined){
        this.profiledata.innerHTML = `
        <ul class="list-group">
        <li class="list-group-item">Name: ${res.name}</li>
        <li class="list-group-item">Age: ${res.age}</li>
        <li class="list-group-item">Location: ${res.location}</li>
        <li class="list-group-item">Preference: ${res.gender} looking for ${res.lookingfor}</li>
      </ul>
        `
        this.profileImage.innerHTML =`<img src=${res.image}>`
    }else{
        window.location.reload();
    }
}  
}