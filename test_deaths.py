import sqlite3
from visualizer import display
connection = sqlite3.connect("deathsnum.db")
sql = connection.cursor()

getTable = sql.execute("SELECT * FROM deaths ORDER BY Year DESC")
display(getTable)