document.getElementById('generateBtn').addEventListener('click', async () => {
  const prompt = document.getElementById('promptInput').value.trim();
  const resultDiv = document.getElementById('result');

  if (!prompt) {
    resultDiv.innerHTML = '<p>プロンプトを入力してください。</p>';
    return;
  }

  resultDiv.innerHTML = '<p>画像を生成しています。しばらくお待ちください。</p>';

  try {
    const response = await fetch('data.json');
    const imageList = await response.json();

    let bestMatch = null;
    let highestScore = 0;

    imageList.forEach(item => {
      let score = 0;
      item.keywords.forEach(keyword => {
        if (prompt.includes(keyword)) {
          score += 1;
        }
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    });

    if (bestMatch && highestScore > 0) {
      resultDiv.innerHTML = `
        <p>「${prompt}」の生成結果:</p>
        <img src="images/${bestMatch.filename}" alt="${bestMatch.title}">
      `;
    } else {
      resultDiv.innerHTML = '<p>画像の生成に失敗しました。</p>';
    }

  } catch (error) {
    console.error(error);
    resultDiv.innerHTML = '<p>画像の読み込みに失敗しました。</p>';
  }
});