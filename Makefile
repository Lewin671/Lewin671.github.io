OBJ = main.o
OUTPUT = main
#HEADERS = test.h
CC = g++
FLAGS = -Wall -g -D DEBUG=true
SOURCE = main.cpp
INPUT_FILE = test.in
run: $(OUTPUT)
	@if [ -f $(INPUT_FILE) ];then ./$(OUTPUT) < $(INPUT_FILE);\
	else  ./$(OUTPUT); fi
	@rm -f $(OUTPUT) $(OBJ)
main: $(OBJ) #$(HEADERS)
	@$(CC) -o $(OUTPUT) $(OBJ)
main.o: $(SOURCE)
	@$(CC) $(FLAGS) -c $(SOURCE)
clean:
	@-rm -f $(OUTPUT) $(OBJ)
