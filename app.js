
async function loadRatings() {
  const response = await fetch('./ratings.json');
  const data = await response.json();

  document.getElementById('lastUpdated').textContent =
    `Last updated: ${data.lastUpdated}`;

  const appGrid = document.getElementById('appGrid');

  appGrid.innerHTML = data.apps.map(app => `
    <div class="card">
      <h2>${app.name}</h2>
      <div class="category">${app.category}</div>
      <div class="score"><span>iOS</span><strong>${app.iosRating}</strong></div>
      <div class="score"><span>Android</span><strong>${app.androidRating}</strong></div>
      <div class="score"><span>Overall</span><strong>${app.overallRating}</strong></div>
    </div>
  `).join('');
}

loadRatings().catch(error => {
  document.getElementById('appGrid').innerHTML =
    '<p>Could not load ratings data.</p>';
  console.error(error);
});
