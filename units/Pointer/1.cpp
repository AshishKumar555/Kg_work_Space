#include <iostream>
using namespace std;

// Function to swap two numbers using pointers
void swap(int *a, int *b) {
    int temp = *a; // Store the value of a in temp
    *a = *b;       // Assign the value of b to a
    *b = temp;     // Assign the value of temp (original a) to b
}

int main() {
    int num1, num2;

    // Input: Two numbers
    cout << "Enter two numbers: ";
    cin >> num1 >> num2;

    // Display before swapping
    cout << "Before swapping: num1 = " << num1 << ", num2 = " << num2 << endl;

    // Call swap function
    swap(&num1, &num2);

    // Display after swapping
    cout << "After swapping: num1 = " << num1 << ", num2 = " << num2 << endl;

    return 0;
}
