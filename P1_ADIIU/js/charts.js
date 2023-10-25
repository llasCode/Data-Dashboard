function createFirstChart(data) {
  songs = [];
  streams = [];

  for (let i = 0; i < data.length; i++) {
    songs.push(data[i].track_name);
    streams.push(parseInt(data[i].streams));
  }

  Highcharts.chart("container1", {
    accessibility: {
      description:
        "In this chart, is shown the top 10 most listened to songs in 2023 along with the number of plays for each one. The first 6 songs have around 1 billion plays, while the last four only have about 100 million plays.",
    },
    chart: {
      type: "column",
    },
    title: {
      text: "Top 10 streamed songs Spotify 2023",
    },
    xAxis: {
      categories: songs,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Streams",
      },
    },

    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        dataSorting: {
          enabled: true,
        },
        name: "Streams",
        data: streams,
      },
    ],
  });
}

function createSecondChart(data) {
  year_2023 = [];
  year_other = [];

  for (let i = 0; i < data.length; i++) {
    if (parseInt(data[i].released_year) === 2023) {
      year_2023.push(data[i].released_year);
    } else {
      year_other.push(data[i].released_year);
    }
  }

  const total = data.length;
  const percentage_year2023 = (year_2023.length / total) * 100;
  const percentage_yearOther = (year_other.length / total) * 100;

  // Monochromatic color scale for accessiblity
  const colors = Highcharts.getOptions().colors.map((c, i) =>
    Highcharts.color(Highcharts.getOptions().colors[0])
      .brighten((i - 3) / 7)
      .get()
  );

  Highcharts.chart("container2", {
    accessibility: {
      description:
        "In this pie chart, the data shows that 81.6% of the most listened songs in 2023 were first released in previous years, while 18.4% were released in the same year, 2023. This indicates that, in general, songs from past years are listened to more frequently than the most current ones.",
    },
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Percentage of songs released in 2023 or other years",
      align: "center",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        colors,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Songs",
        colorByPoint: true,
        data: [
          {
            name: "Other years",
            y: percentage_yearOther,
            sliced: true,
            selected: true,
          },
          {
            name: "2023",
            y: percentage_year2023,
          },
        ],
      },
    ],
  });
}

function createThirdChart(data) {
  streams = [];
  num_artists = [];

  dataChart = [];

  for (let i = 0; i < data.length; i++) {
    streams.push(data[i].streams);
    num_artists.push(data[i].artist_count);
    dataChart.push([parseInt(num_artists[i]), parseInt(streams[i])]);
  }

  Highcharts.chart("container3", {
    tooltip: {
      formatter: function () {
        var tooltip =
          '<span style="color: #9A47AB;">' +
          this.series.name +
          "</span>: " +
          this.y;
        return tooltip;
      },
    },
    accessibility: {
      description:
        "In this chart, is shown the relationship between the number of times a song has been played and the number of artists on that song. The data show that songs with fewer artists tend to be more popular and receive a higher number of plays.",
    },
    chart: {
      type: "scatter",
      zoomType: "xy",
    },
    title: {
      text: "Relation between streams and number of artists",
      align: "center",
    },

    xAxis: {
      title: {
        text: "Number of artists",
      },
    },
    yAxis: {
      title: {
        text: "Streams",
      },
    },
    legend: {
      enabled: true,
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: "rgb(100,100,100)",
            },
          },
        },
        states: {
          hover: {
            marker: {
              enabled: false,
            },
          },
        },
      },
    },
    series: [
      {
        name: "Streams",
        data: dataChart,
        marker: {
          fillColor: "#9A47AB",
        },
      },
    ],
  });
}
