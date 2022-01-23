
// /artist/list
export const apiArtistList = () => {
  fetch('/api/artist/list').then(res=> {
    console.log(res);
  })
}