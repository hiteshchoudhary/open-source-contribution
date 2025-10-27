import requests

url = 'https://api.weatherapi.com/v1/current.json?key=59250e33c5b9411eb0664924252410&q=India&aqi=no'

response = requests.get(url)
data = response.json()

def tempreture():
    location = data["location"]
    country = location['country']
    region = location['region']
    print(f"Country : {country}\nRegion : {region}")
    
    currTemp = data['current']
    last_updated = currTemp['last_updated']
    temp_cel = currTemp['temp_c']
    temp_fer = currTemp['temp_f']
    condition = currTemp['condition']['text']
    humidity = currTemp['humidity']
    print(f"Tempretur in Celsius : {temp_cel}\nTempretur in Fahrenheit : {temp_fer}\nLast updated : {last_updated}\nHumidity : {humidity}\nCondition : {condition}")
    

def main():
    try:
        tempreture()
    except Exception as e:
        print(str(e))

if __name__ == "__main__":
    main()