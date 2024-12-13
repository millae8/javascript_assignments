async function a() {
  try {
    let show = document.getElementById('query').value;
    const response = await fetch('https://api.tvmaze.com/search/shows?q='+ show);
    if (!response.ok) throw new Error('Invalid input!');
    console.log(response.json());
  } catch (e) {
    console.log('error', e);
  }
}

document.getElementById('submit').addEventListener('click', async function(evt) {
  evt.preventDefault();
  a();
});