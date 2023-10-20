async function firstChart() {
  let url = "./backend/firstChart.php";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("HTTP ERROR " + response.status);
  }
  return await response.json();
}

async function secondChart() {
  let url = "./backend/secondChart.php";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("HTTP ERROR " + response.status);
  }
  return await response.json();
}

async function thirdChart() {
  let url = "./backend/thirdChart.php";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("HTTP ERROR " + response.status);
  }
  return await response.json();
}
