# The Game includes 1-100 numbers the users have to guess it.
# Number Guessing Game for users.
# Enjoy it!
import random

class Guess:
    def __init__(self, number_to_guess):
        self.number_to_guess = number_to_guess

    def number_guessing(self):
        while True:
            guess = int(input("Guess a number between 1 to 100: "))
            if guess < self.number_to_guess:
                print("Too Low!")
            elif guess > self.number_to_guess:
                print("Too High!")
            else:
                print("Congratulations! You guessed the number.")
                break

number_to_guess = random.randint(1, 100)
Guess(number_to_guess).number_guessing()