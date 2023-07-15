interface ICovid {
    getData(): Promise<{
        comfirmed: number,
        recoverd: number,
        deaths: number,
    }>;
}

 class Covid implements ICovid{
    country: string;
    constructor(country: string){
        this.country = country;
    }

    async getData(): Promise<{comfirmed: number,
        recoverd: number,
        deaths: number,}> {
        const response = await  fetch(`https://covid19.mathdro.id/api/countries/${this.country}`);
        const data: any = response.json();
        return {
           confirmed: data.confirmed.value,
           recoverd: data.recoverd.value,
           deaths: data.deaths.value,
        }
    }
 }

 const covid = new Covid('id');
 console.log(await covid.getData());