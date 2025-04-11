OBJECTIVES

	Efficient Task Management: Enable users to add, edit, and delete tasks easily to manage daily activities effectively.
	Deadline Tracking: Allow users to set deadlines for tasks, encouraging timely completion and prioritization.
	Completion Status: Provide a completion checkbox with confirmation, ensuring users commit to finishing tasks, which helps track and motivate progress.
	User-Friendly Interface: Design a clean, intuitive interface to enhance the user experience and make task management straightforward.
	Validation and Error Handling: Implement validation for tasks and deadlines to avoid incomplete task entries, ensuring data accuracy and integrity.
	Scalability and Extendibility: Structure the application in a way that allows for future updates, such as user authentication, notification reminders, or categorization features.


Software Requirements

•	Frontend: React.js (JavaScript library for building user interfaces)
•	Backend: Node.js with Express framework
•	Database: MongoDB for storing task data
•	Development Tools: Visual Studio Code (or any other preferred code editor)
•	APIs and Libraries:
	Axios for handling HTTP requests
	Mongoose for MongoDB object data modelling
	Additional libraries: bcrypt (for security, if authentication is implemented), and any other necessary React or Node modules
•	Package Manager: npm or yarn for dependency management
•	Browser Compatibility: Google Chrome, Firefox, Edge

SCREEN SHOTS 
![image](https://github.com/user-attachments/assets/4b198781-66c2-4072-be44-f0ae10dab25a)
The home screen displays the list of tasks, showing each task's details prominently. Each task includes a checkbox for marking it as completed, with completed tasks visually distinguished. Deadlines appear below each task as a clear reminder. Buttons for editing or deleting tasks are positioned alongside each entry, enhancing usability. A form at the top allows users to add new tasks with optional deadlines, while a search button enables quick retrieval of specific tasks, contributing to streamlined task management.

INSERTION OF THE TASK

![image](https://github.com/user-attachments/assets/2a9aca6a-d503-431a-a864-2be815be273f)

After clicking on “ADD” Button

![image](https://github.com/user-attachments/assets/982784d2-2874-4d43-86ae-f57cd371e817)

SEARCHING 
![image](https://github.com/user-attachments/assets/37483f35-9a70-438e-ad8b-cace974decec)

 VALIDATIONS
 ![image](https://github.com/user-attachments/assets/ec39d4a0-1300-4966-95f1-dea927eb5bd8)
Can’t add new task without filling task name 

![image](https://github.com/user-attachments/assets/81cf8155-4f97-4c10-adc2-0c964ee1c61c)
dline should be selected

![image](https://github.com/user-attachments/assets/ea3bb5c3-bca2-4544-ac8c-ea4e3cd4b2d6)
Deadline should be future date not today’s  date

![image](https://github.com/user-attachments/assets/9313a4de-6e6d-4446-b17f-319d8029f892)
Completion checks box askes confirmation before completing task


DELETION

![image](https://github.com/user-attachments/assets/218a9ce7-603a-438c-a145-74bb43cfcea7)
After clicking on “DELETE” Button it will make confirm before deletion 

Conclusion

The To-do List Application successfully fulfils its objective of providing a simple, effective task management solution that enhances productivity and organization. Through features like task creation, editing, and deletion, along with deadline setting and task completion indicators, the app enables users to manage daily tasks efficiently. The validation mechanisms ensure that tasks are recorded with essential details, while the completion confirmation enhances user commitment to finishing tasks. Overall, the application demonstrates the practical use of the MERN stack (MongoDB, Express, React, Node.js) in creating interactive and user-friendly applications. Future iterations could incorporate user authentication and reminders to further improve task management and user engagement.
