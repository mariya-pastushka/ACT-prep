const sectionSliders = Array.from(document.querySelectorAll('input[type="range"]'));
const scoreTotal = document.getElementById('score-total');
const scoreFormula = document.getElementById('score-formula');

function updateScores() {
  const scores = sectionSliders.map((slider) => {
    const score = slider.valueAsNumber;
    const progress = (score - Number(slider.min)) / (Number(slider.max) - Number(slider.min));
    const valueLabel = document.querySelector(`[data-value="${slider.id}"]`);

    valueLabel.textContent = score;
    slider.style.setProperty('--progress', `${progress * 100}%`);
    return score;
  });

  scoreFormula.textContent = scores.join(' + ');
  scoreTotal.value = scores.reduce((total, score) => total + score, 0);
}

sectionSliders.forEach((slider) => slider.addEventListener('input', updateScores));
updateScores();
