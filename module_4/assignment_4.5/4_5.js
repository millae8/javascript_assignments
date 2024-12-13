async function a() {
  try {
    const response = fetch('https://api.chucknorris.io/jokes/random').then(result => {
      if (!result.ok) throw new Error('Invalid input!');
      return result.json();
    })
    .then(data => {
      console.log(data.value);
    });
  } catch (e) {
    console.log('error', e);
  }
}

a();