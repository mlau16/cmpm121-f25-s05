CMPM 121 - Smelly Code Refactoring Activity (S05)

Code Smells:

- Duplicated Code: Repeated update logic for all three buttons
- Magic Strings: Hardcoded button IDs and colors were scattered in the file
- Long Method: The setup() function was handling a lot of the code
- Unclear Names: There was variables named a, b and c, which weren't descriptive of what they were
- Global State: The counter was managed through a global variable

Refactoring Methods:

- Extract Method: Created a updateUI() method to use in multiple areas that needed DOM updates
- Rename Variable: Renamed the variables to be more descriptive and clear
- Introduce Constant: Replaced the magic strings with named constants
- Extract Function: split setup() into smaller functions with a main focus
- Encapsulate Variable: Wrapped the counter in a state object
