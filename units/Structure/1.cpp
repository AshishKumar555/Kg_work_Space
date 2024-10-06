#include <iostream>
using namespace std;

// Defining a structure to store student information
struct Student {
    string name;
    int age;
    float grade;
};

int main() {
    // Creating a structure variable
    Student student1;

    // Input: Getting values from the user
    cout << "Enter the student's name: ";
    getline(cin, student1.name);
    
    cout << "Enter the student's age: ";
    cin >> student1.age;
    
    cout << "Enter the student's grade: ";
    cin >> student1.grade;

    // Output: Displaying the values
    cout << "\nStudent Details:" << endl;
    cout << "Name: " << student1.name << endl;
    cout << "Age: " << student1.age << endl;
    cout << "Grade: " << student1.grade << endl;

    return 0;
}
