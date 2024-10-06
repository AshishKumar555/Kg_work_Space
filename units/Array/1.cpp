#include <iostream>
using namespace std;

int main() {
    int n;

    // Input: Size of the array
    cout << "Enter the number of elements in the array: ";
    cin >> n;

    int arr[n];

    // Input: Array elements
    cout << "Enter the elements of the array:" << endl;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    // Initialize max with the first element of the array
    int max = arr[0];

    // Iterate through the array to find the greatest number
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    // Output: The greatest number
    cout << "The greatest number in the array is: " << max << endl;

    return 0;
}
