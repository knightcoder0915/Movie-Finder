export default class CinemaService {
    constructor() {
        this._apiBase='https://moviesdatabase.p.rapidapi.com';
    }


    async getResource(url) {

        const res = await fetch(this._apiBase + url,{
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '6a9a048c4dmsh372e809fb88c23cp10f309jsn11bf1d2cc6a8',
              'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
          })


        if (!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json()
    }

    getMovies(){
        return this.getResource('/titles?list=most_pop_movies&limit=10&endYear=2023&startYear=2015')
    }

    getSeries() {
        return this.getResource('/titles?list=top_rated_series_250&limit=10&page=2&endYear=2023&startYear=2010')
    }
}

