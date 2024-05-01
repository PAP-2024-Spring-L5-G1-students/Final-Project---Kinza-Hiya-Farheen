import sqlite3
from visualizer import display
connection = sqlite3.connect("deathsnum.db")
sql = connection.cursor()

sql.execute('''CREATE TABLE IF NOT EXISTS deaths ("Year" INTEGER, "Palestine Deaths" TEXT, "Israel Deaths" TEXT)''')

allResults = sql.execute("SELECT * FROM deaths")
display(allResults)
