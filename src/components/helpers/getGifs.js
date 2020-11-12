export const getGifs = async(category) =>{

    const apiKey = 'pFzfhDbyPWdBZA2jSGmonReg1DlKTXFH'
    const query = encodeURI(category)
    const limit = 10
    const url = `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${query}&limit=${limit}`
    const response = await fetch (url)
    const {data} = await response.json();

    const gifs =  data.map(img=>{
        return{
            id:img.id,
            title:img.title,
            url: img.images.downsized_medium.url
        }
    })

  return gifs;
}