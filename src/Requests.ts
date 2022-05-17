

const key: string = 'f46a0df02d8ae72dabc6080b8ec07c6f'
const language = [
    {portuguese: 'pt-BR'},
    {english: 'en-US'}
]

export const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTopTrending: `https://api.themoviedb.org/3/movie/top_trending?api_key=${key}&language=en-US&page=2`,
    requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US&page=1`,
}

export const imagePath = 'https://image.tmdb.org/t/p/original'


