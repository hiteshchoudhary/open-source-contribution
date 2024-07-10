import json


def load_videos():
    try:
        with open('videos_1.txt', 'r') as file:
           return json.load(file)
    except FileNotFoundError:
        return []


def save_helper(videos):
    with open('videos_1.txt', 'w') as file:
        json.dump(videos, file)



def list_videos(videos):
    print("\n")
    print('*' * 70)
    for index, video in enumerate(videos,start=1):
        print(f"{index}. {video['name']}, duration {video['duration']}")
    print('*' * 70)
    print("\n")


def add_video(videos):
    print("\n")
    print('*' * 70)
    name = input("Enter the name of the video : ")
    duration = input("Enter the duration of the video : ")
    videos.append({'name' : name, 'duration' : duration})
    save_helper(videos)
    print('*' * 70)
    print("\n")

def update_video(videos):
    print("\n")
    print('*' * 70)
    list_videos(videos)
    while True:
        index = int(input("Enter the id of the video to update : "))
        if 1<= index <= len(videos):
            name = input("Enter the name of the video : ")
            duration = input("Enter the duration of the video : ")
            videos[index-1] = {'name' : name, 'duration' : duration}
            save_helper(videos)
            break
        else:
            print("Invalid id")
    print('*' * 70)
    print("\n")

def delete_video(videos):
    print("\n")
    print('*' * 70)
    list_videos(videos)
    while True:
        index = int(input("Enter the id of the video to delete : "))
        if 1<= index <= len(videos):
            del videos[index-1]
            save_helper(videos)
            break
        else:
            print("Invalid id")
    print('*' * 70)
    print("\n")


def main():
    videos = load_videos()
    # print(type(videos))
    while True:
        print("\n")
        print('*' * 70)
        print("\tWelcome to Video Manager")
        print("1. List all the videos")
        print("2. Add a new video")
        print("3. Update a video")
        print("4. Delete a video")
        print("5. Exit the Program")
        print('*' * 70)
        print("\n")

        choice = input("Enter your choice : ")

        match choice:
            case '1':
                list_videos(videos)
            case '2':
                add_video(videos)
            case '3':
                update_video(videos)
            case '4':
                delete_video(videos)
            case '5':
                break
            case _:
                print("Invalid Choice")


if __name__ == '__main__':
    main()