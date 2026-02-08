import csv

def find_information():
    mentor = input("Please your first and last name as First_Name Last_Name: ")
    helped = 0
    most = 0
    avg = 0
    ohq = "HOOT"
    course_size = 0
    with open('dashboard.csv', newline='\n') as dashfile:
        dashreader = csv.reader(dashfile, delimiter=',', quotechar="|")
        for row in dashreader:
            if row[2] == mentor or row[3] == mentor:
                ohq = (row[4])
                course_size = int(row[5])           
                helped = int(row[6])
                avg = float(row[8])
                most = int(row[10])
        if course_size == 0:
            print("that wasn't a valid course, sorry!")
        else:
            print("Greetings", mentor + "!")
            input()
            print("You've had quite a semester as a(n)", ohq +"!")
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

if __name__ == "__main__":
    find_information()