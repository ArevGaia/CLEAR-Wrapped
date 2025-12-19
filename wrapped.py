import csv

course = input("Please input the course code: ").upper()
mentor1 = None
mentor2 = None
helped = 0
most = 0
avg = 0
ohq = "HOOT"
course_size = 0
with open('dashboard.csv', newline='\n') as dashfile:
    dashreader = csv.reader(dashfile, delimiter=',', quotechar="|")
    for row in dashreader:
        if row[0] == course:
            mentor1 = (row[2])
            mentor2 = (row[3])
            ohq = (row[4])
            course_size = int(row[5])           
            helped = int(row[6])
            avg = float(row[8])
            most = int(row[10])
    if course_size == 0:
        print("that wasn't a valid course, sorry!")
    else:
        input()
        if mentor2 != "":
            print("Greetings", mentor1, "and", mentor2 + "!")
            input()
        else:
            print("Greetings", mentor1 + "!")
            input()
        print("You've had quite a semester as a", ohq +"!")
        input()
        print("You've helped", helped, "students this semester,")
        input()
        average_helped = round((helped/course_size)*100, 2)
        print("that's", average_helped, "percent of the class!")
        input()
        print("At your busiest session, you helped a whopping", most, "students! That's quite a lot!")
        input()
        print("Most weeks, you helped", avg, "students, wow!")
        input()
        print("Just know, that we here at CLEAR HQ are really proud of you and super grateful! Keep up the hard work!!!")
        input()