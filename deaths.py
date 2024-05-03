import sqlite3
from visualizer import display
connection = sqlite3.connect("deathsnum.db")
sql = connection.cursor()
#deaths table
sql.execute('''CREATE TABLE IF NOT EXISTS deaths ("Year" INTEGER, "Palestine Deaths" INTEGER, "Israel Deaths" INTEGER)''')

allResults = sql.execute("SELECT * FROM deaths")
display(allResults)

addDeaths = '''INSERT INTO deaths VALUES (2023, 32262, 1410), (2024, 34596, 1139)'''
sql.execute(addDeaths)
showDeaths = sql.execute("SELECT * FROM deaths ORDER BY Year DESC")
display(showDeaths)

connection.commit()
connection.close()