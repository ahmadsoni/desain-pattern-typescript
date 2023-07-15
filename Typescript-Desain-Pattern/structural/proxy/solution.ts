namespace ProxySolution {
    interface ICovid {
        getData(): Promise<{
            comfirmed: number,
            recoverd: number,
            deaths: number,
        }>;
    }
    let tempData:any = null;

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
            tempData = data;
            return {
                confirmed: data.confirmed.value,
                recoverd: data.recoverd.value,
                deaths: data.deaths.value,
            }
        }
    }

    class ProxyCovid implements ICovid{
        covid: Covid;

        constructor(covid: Covid){
            this.covid = covid;
        }

        async getData(): Promise<{ comfirmed: number; recoverd: number; deaths: number; }> {
            if (tempData){
                console.log('di dapat dari database');
                return {
                    confirmed: tempData.confirmed.value,
                    recoverd: tempData.recoverd.value,
                    deaths: tempData.deaths.value,
                }
            }
             console.log('di dapat covid API');
             return this.covid.getData();
        }
    }

    const getCovid = async () => {
        const covid1 = new ProxyCovid(new Covid('id'));
        console.log(await covid1.getData());
    
        const covid2 = new ProxyCovid(new Covid('id'));
        console.log(await covid2.getData());
    }

    getCovid();
}