## Author: Lluís Alcover Serra


# Spotify Data Dashboard

-This dashboard is a web application made with the Highcharts JavaScript library and PHP for the connection with the database (MySQL). It shows data from the most streamed songs of 2023. The data has been collected from kaggle (https://www.kaggle.com/datasets/nelgiriyewithana/top-spotify-songs-2023/data). It is noteworthy to mention that all the charts have an accessibility description for screen readers.

# Instalation

-Clone this repository in the xampp/htdocs directory. 
-Set the local web server and import the SQL code.
-Now you can visualize the webpage at http://localhost/P1_ADIIU/.

# Code

-In the folder backend, you can find the sql database code, the php files to make the connection to the database and to get the data from it with Select queries.
-In the css folder, there are some basic styles for the html.
-In the js folder, the buttonChart file has the logic to show a chart when a button is pressed in the web, the other files, index, controller, and charts, are responsible for retrieving the data from the database, encoding it into a JSON format and passing it by parameter to create the charts with the HighCharts library.
