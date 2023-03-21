# Student Grade Generator.

# Description
    This is a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the grades as follows.

    A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.
 # Project Setup
       function studentMarks    (marks) {
            if (marks >= 80 && marks <= 100) {
                return 'A';
            }else if (marks >= 60 && marks <= 79) {
                return 'B';
            }else if (marks >= 50 && marks <= 59) {
                return 'C';
            }else if (marks >= 40 && marks <= 49) {
                return 'D';
            }else if (marks < 40) {
                return 'E';
            }else {
                return 'Invalid Input';
            }
    }
    console.log(studentMarks(56));

# Author
    Emmanuel Kipsang