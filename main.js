fetch('header.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('ネットワークエラーが発生しました');
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })
  .catch(error => {
    console.error('ヘッダーの読み込みに失敗しました:', error);
  });
