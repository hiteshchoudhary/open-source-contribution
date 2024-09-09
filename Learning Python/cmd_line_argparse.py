import argparse

parser = argparse.ArgumentParser(description="This module echos entered arguments while executing it in CMDline")
parser.add_argument("-a", default=0, type=int, help="The argument to echo back in CMDline")
args = parser.parse_args()

print(args.a)