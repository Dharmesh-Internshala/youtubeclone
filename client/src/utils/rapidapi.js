// const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
// const BASE_URL = "https://youtube138.p.rapidapi.com"
// import axios from "axios";

// const options = {
// 	headers: {
// 		'x-rapidapi-key': API_KEY,
// 		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
// 	}
// };

// export const fetchData=async(url)=>{
//     try{
//         const {data} = await axios.get(`${BASE_URL}/${url}`,options);
//         return data;
//     }catch(error){
//         console.error("error fetching api data: ",error);
//         throw error;
//     }
// }


import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

// Generic function to fetch data
export const fetchData = async (endpoint, params = {}) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${endpoint}`, {
            ...options,
            params: { ...params }
        });
        return data;
    } catch (error) {
        console.error("Error fetching API data: ", error);
        throw error;
    }
};
