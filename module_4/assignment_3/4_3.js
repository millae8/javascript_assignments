async function a() {
  try {
    let show = document.getElementById('query').value;
    const response = fetch('https://api.tvmaze.com/search/shows?q='+ show).then(result => {
      if (!result.ok) throw new Error('Invalid input!');
      return result.json();
    })
    .then(data => {
      const tvShow = data[0];
      document.querySelector('#name').textContent = tvShow.show.name;
      document.querySelector('#url').href = tvShow.show.url;
      document.querySelector('#img').src = tvShow.show.image?.medium;
      document.querySelector('#sum').textContent = tvShow.show.summary;
      document.querySelector('#img').alt = tvShow.show.name;
    });
    console.log(show)
  } catch (e) {
    console.log('error', e);
  }
}

document.getElementById('submit').addEventListener('click', async function(evt) {
  evt.preventDefault();
  await a();
});