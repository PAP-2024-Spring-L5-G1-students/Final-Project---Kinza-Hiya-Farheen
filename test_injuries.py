import sqlite3
from visualizer import display
connection = sqlite3.connect("injuriesnum.db")
sql = connection.cursor()

getTable = sql.execute("SELECT * FROM injuries ORDER BY Year DESC")
display(getTable)