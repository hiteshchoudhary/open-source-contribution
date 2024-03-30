#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_SIZE 100

// Define a structure for key-value pair
struct KeyValuePair {
    char key[50];
    int value; // Assuming integer values for simplicity
};

// Define a structure for the map
struct Map {
    struct KeyValuePair data[MAX_SIZE];
    int size;
};

// Initialize the map
void initializeMap(struct Map *map) {
    map->size = 0;
}

// Insert a key-value pair into the map
void insert(struct Map *map, const char *key, int value) {
    if (map->size < MAX_SIZE) {
        strcpy(map->data[map->size].key, key);
        map->data[map->size].value = value;
        map->size++;
    } else {
        printf("Error: Map is full.\n");
    }
}

// Get the value associated with a key
int getValue(struct Map *map, const char *key) {
    for (int i = 0; i < map->size; i++) {
        if (strcmp(map->data[i].key, key) == 0) {
            return map->data[i].value;
        }
    }
    printf("Error: Key not found.\n");
    return -1; // Return a default value indicating error
}

int main() {
    struct Map map;
    initializeMap(&map);

    insert(&map, "apple", 10);
    insert(&map, "banana", 20);
    insert(&map, "orange", 30);

    printf("Value for key 'apple': %d\n", getValue(&map, "apple"));
    printf("Value for key 'banana': %d\n", getValue(&map, "banana"));
    printf("Value for key 'grape': %d\n", getValue(&map, "grape"));

    return 0;
}
