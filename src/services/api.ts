import axios from "axios";
const API_KEY = "24237359-d8a1b7ca60bb2feb7d319b519";
const perPage = 20;
const baseURL = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}&q=`;
export async function getImg(query: string, pageNumber: number) {
  const url = `${baseURL}${query}&page=${pageNumber}`;
  try {
    return await axios.get(url);
  } catch (err) {
    console.log(err);
  }
}
