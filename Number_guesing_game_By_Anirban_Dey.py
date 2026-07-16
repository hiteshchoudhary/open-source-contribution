"""
NUMBER GUESSING GAME (GUI)
A simple, clean Python tkinter version of the number guessing game.

Rules:
  1. A secret number between 1 and 100 is chosen at random.
  2. You guess a number.
  3. If wrong, you're told whether to guess higher or lower.
  4. Guess correctly to win. Your score is the number of attempts it took.
  5. Press "Play Again" to start a new round with a new number.

No external packages needed -- tkinter ships with standard Python.
Run with:  python number_guessing_game.py
"""

import random
import tkinter as tk

# ----------------------------------------------------------------------------
# COLORS
# ----------------------------------------------------------------------------
BG = "#1e1f2b"
CARD = "#282a3a"
TEXT_PRIMARY = "#f5f6fa"
TEXT_DIM = "#a0a3b8"
ACCENT = "#7c9cff"
GREEN = "#5fd88f"
RED = "#ff6b6b"

FONT_TITLE = ("Segoe UI", 22, "bold")
FONT_SUB = ("Segoe UI", 11)
FONT_BIG = ("Segoe UI", 16, "bold")
FONT_ENTRY = ("Segoe UI", 16)
FONT_BTN = ("Segoe UI", 12, "bold")


class NumberGuessingGame:
    def __init__(self, root):
        self.root = root
        self.root.title("Number Guessing Game")
        self.root.configure(bg=BG)
        self.root.geometry("380x480")
        self.root.resizable(False, False)

        self.target = None
        self.attempts = 0
        self.over = False

        self._build_ui()
        self.new_game()

    # ------------------------------------------------------------------
    def _build_ui(self):
        # Title
        tk.Label(
            self.root, text="Guess the Number", font=FONT_TITLE,
            fg=TEXT_PRIMARY, bg=BG,
        ).pack(pady=(30, 4))

        tk.Label(
            self.root, text="Pick a number between 1 and 100",
            font=FONT_SUB, fg=TEXT_DIM, bg=BG,
        ).pack(pady=(0, 20))

        # Card container
        card = tk.Frame(self.root, bg=CARD, padx=24, pady=24)
        card.pack(padx=24, fill="x")

        # Result / feedback message
        self.message_label = tk.Label(
            card, text="", font=FONT_BIG, fg=TEXT_PRIMARY, bg=CARD,
            wraplength=280, justify="center",
        )
        self.message_label.pack(pady=(0, 16))

        # Entry
        self.guess_var = tk.StringVar()
        self.entry = tk.Entry(
            card, textvariable=self.guess_var, font=FONT_ENTRY,
            justify="center", bg="#1e1f2b", fg=TEXT_PRIMARY,
            insertbackground=TEXT_PRIMARY, relief="flat",
            highlightthickness=2, highlightbackground=CARD, highlightcolor=ACCENT,
        )
        self.entry.pack(fill="x", ipady=8, pady=(0, 12))
        self.entry.bind("<Return>", lambda e: self.submit_guess())

        # Submit button
        self.submit_btn = tk.Button(
            card, text="Submit Guess", font=FONT_BTN, command=self.submit_guess,
            bg=ACCENT, fg="#12131a", activebackground="#6c8bee", activeforeground="#12131a",
            relief="flat", cursor="hand2", bd=0,
        )
        self.submit_btn.pack(fill="x", ipady=8)

        # Attempts counter
        self.attempts_label = tk.Label(
            self.root, text="Attempts: 0", font=FONT_SUB, fg=TEXT_DIM, bg=BG,
        )
        self.attempts_label.pack(pady=(18, 0))

        # Play again button (hidden until a game ends)
        self.play_again_btn = tk.Button(
            self.root, text="Play Again", font=FONT_BTN, command=self.new_game,
            bg=GREEN, fg="#12131a", activebackground="#4fc47f", activeforeground="#12131a",
            relief="flat", cursor="hand2", bd=0, padx=16, pady=8,
        )
        # not packed yet -- shown only after winning

    # ------------------------------------------------------------------
    def new_game(self):
        self.target = random.randint(1, 100)
        self.attempts = 0
        self.over = False

        self.message_label.config(text="Make your first guess!", fg=TEXT_PRIMARY)
        self.attempts_label.config(text="Attempts: 0")
        self.guess_var.set("")
        self.entry.config(state="normal")
        self.submit_btn.config(state="normal")
        self.play_again_btn.pack_forget()
        self.entry.focus_set()

    def submit_guess(self):
        if self.over:
            return

        raw = self.guess_var.get().strip()
        if not raw.isdigit() or not (1 <= int(raw) <= 100):
            self.message_label.config(text="Enter a whole number between 1 and 100.", fg=RED)
            return

        n = int(raw)
        self.attempts += 1
        self.attempts_label.config(text=f"Attempts: {self.attempts}")

        if n == self.target:
            self.over = True
            plural = "attempt" if self.attempts == 1 else "attempts"
            self.message_label.config(
                text=f"Correct! You got it in {self.attempts} {plural}.", fg=GREEN
            )
            self.entry.config(state="disabled")
            self.submit_btn.config(state="disabled")
            self.play_again_btn.pack(pady=(16, 0))
        elif n < self.target:
            self.message_label.config(text="Higher", fg=TEXT_PRIMARY)
        else:
            self.message_label.config(text="Lower", fg=TEXT_PRIMARY)

        self.guess_var.set("")
        self.entry.focus_set()


if __name__ == "__main__":
    root = tk.Tk()
    game = NumberGuessingGame(root)
    root.mainloop()