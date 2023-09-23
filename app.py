from flask import Flask, url_for, render_template, request, redirect, flash
import mysql.connector
import os
import time
mydb = mysql.connector.connect(
    host="nasha-mukti-db.cvgeqhkfp1ac.us-east-1.rds.amazonaws.com",
    user="remote_user",
    password="e5yP2CWz7PWAFtqx1dYF",
    database="users"
)
print(mydb)
mycursor=mydb.cursor()
app=Flask(__name__)
app.config['SECRET_KEY'] = '12345'
@app.route('/' , methods=['POST','GET'])

def index():
    if request.method=='POST':
        if request.form.get('reg') == 'register':
            return render_template('signup.html')
        elif request.form.get('log') == 'login':
            print("hello")
            return render_template('login.html')
        else:
            pass
    elif request.method=='GET':
        return render_template("index_new1.html")
    
    return render_template("index_new1.html")

@app.route('/choice', methods=['POST','GET'])

def choice():
    if request.form.get('clo') == 'cloud':
        return render_template('cloud.html')
    elif request.form.get('remo') == 'remote':
        return render_template('remote.html')
    else:
        pass
    return render_template('choice.html')

@app.route('/visualization', methods=['POST','GET'])

def visualization():
    return render_template('visualization.html')

@app.route('/signup', methods=['POST','GET'])

def signup():
    if request.method=='POST':   
        name=request.form.get('name')
        email=request.form.get('email')
        passw=request.form.get('passw')
        
        sql="INSERT INTO user_info (name,email,passw) VALUES (%s, %s, %s)"
        val=(name,email,passw)
        mycursor.execute(sql,val)
        mydb.commit()

        return redirect(url_for('login'))
        
    else:
        return render_template('signup.html')
    

@app.route('/login' , methods=['POST','GET'])

def login():
    if request.method=='POST':
        name=request.form.get('name')
        passw=request.form.get('passw')
        query='SELECT passw FROM user_info where name='+name
        mycursor.execute(query)
        return render_template('choice.html')
    return render_template('login.html')

if __name__ == "__main__":
    app.run(debug=True)