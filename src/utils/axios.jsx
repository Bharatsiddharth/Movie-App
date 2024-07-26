import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzZlMmMyNDczNDQzMzkxOTVlZmRhODgxMDM2YmI0YiIsIm5iZiI6MTcyMTkwNDg4MC43MTM2NzMsInN1YiI6IjY2YTIyOTMzMTA2ODZkNGJhOTBhMGRiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NhU5FAeBPmjYwQ5vKuAJpzYL4kaAFTjMkLhQLsAxNU8'
      }
})

export default instance;