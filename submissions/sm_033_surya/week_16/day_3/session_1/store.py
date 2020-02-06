import csv
import os.path


def create_data(user_id, checklist_id, user, checklist, task):
    list_users = []

    fileExist = os.path.isfile("data2/user.csv")
    with open("data2/user.csv", "a") as csvfile:
        fieldnames = ["user_id", "user"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        if not fileExist:
            writer.writeheader()
        with open("data2/user.csv") as csvfile:
            reader = csv.DictReader(csvfile)
            for r in reader:                         # avoid duplicates
                list_users.append(r["user"])
            if user not in list_users:
                writer.writerow(
                    {"user_id": user_id, "user": user})

    list_checklist = []
    fileExist = os.path.isfile("data2/checklist.csv")
    with open("data2/checklist.csv", "a") as csvfile:
        fieldnames = ["user_id", "checklist_id", "checklist"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        if not fileExist:
            writer.writeheader()
        with open("data2/checklist.csv") as csvfile:
            reader = csv.DictReader(csvfile)
            for r in reader:                         # avoid duplicates
                list_checklist.append(r["checklist"])
            if checklist not in list_checklist:
                writer.writerow({"user_id": user_id,
                                 "checklist_id": checklist_id, "checklist": checklist})

    fileExist = os.path.isfile("data2/task.csv")
    with open("data2/task.csv", "a") as csvfile:
        fieldnames = ["checklist_id", "task"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        if not fileExist:
            writer.writeheader()
        writer.writerow({"checklist_id": checklist_id, "task": task})


print("enter user_id")
user_id = input()
print("enter checklist_id")
checklist_id = input()
print("enter user_name")
user = input()
print("enter checklist_name")
checklist = input()
print("enter task")
task = input()
create_data(user_id, checklist_id, user, checklist, task)
