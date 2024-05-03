import sqlite3
from visualizer import display
connection = sqlite3.connect("injuriesnum.db")
sql = connection.cursor() 
# injuries table
sql.execute('''CREATE TABLE IF NOT EXISTS injuries ("Year" INTEGER, "Palestine Injuries" INTEGER, "Israel Injuries" INTEGER)''')

allResults = sql.execute("SELECT * FROM injuries")
display(allResults)

addInjuries = '''INSERT INTO injuries VALUES (2023, 76465, 5431), (2024, 77816, 8730)'''
sql.execute(addInjuries)
showInjuries = sql.execute("SELECT * FROM injuries ORDER BY Year DESC")
display(showInjuries)

connection.commit()
connection.close()