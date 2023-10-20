function showChart(id) {
  chart = document.getElementById("chartContainer");
  if (!chart) return;
  chart.innerHTML = "";

  newDiv = document.createElement("div");
  chart.appendChild(newDiv);
  newDiv.setAttribute("id", `container${id}`);

  switch (id) {
    case "1":
      renderFirstChart();
      break;
    case "2":
      renderSecondChart();
      break;

    case "3":
      renderThirdChart();
      break;
  }

  text = document.getElementById(`text${id}`).innerText;
  document.getElementById("textChart").innerText = text;
}
