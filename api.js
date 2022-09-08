class Profilematch{
    constructor(){
        this.api = 'json/data.json';
        console.log(this.api);
    }

    async profiledata(){
        const profileApi = await fetch(`${this.api}`);

        const profile = await profileApi.json();

            // console.log(profile);
        return{
            profile
        }
    }
}


