import sys

if len(sys.argv) == 1:
    print("No arguments entered")
elif len(sys.argv) == 3 and sys.argv[1] == '-n':
    print("Argument entered :- ",sys.argv[2])
else:
    print("Usage: to echo entered arguments while running this script/module in CMDline")