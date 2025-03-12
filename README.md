# MicroCourses Website – Project Reflection

**Author:** Wenjing (Helen) Huang  

## Overview  

MicroCourses is a platform that can be accessed worldwide. It offers a series of courses for people who want to expand their knowledge and enhance their skills. The courses are provided online, and students can learn at their own pace, anytime and anywhere.  

This project reflects the process of building this website, including how it was planned, how it was designed, the challenges faced, and how they were tackled.  

---

## Planning  

MicroCourses aims to provide a series of digital applied technology courses for people around the world who want to gain more technical knowledge or improve themselves.  

Key aspects of the planning phase include:  

- Course Fields Offered by the Platform: Courses are focused on **digital applied technologies**, currently covering four fields:  
  - Information Technologies  
  - Accounting  
  - Business  
  - Design  
- Identification of Users: The target users are **mature adolescents and adults** with basic learning abilities and familiarity with modern electronic devices.  
- Course Deliveries: Courses are **pre-recorded video-based**. After purchasing a course, customers can access it for a **regulated period**, with unlimited views during that time.  
- Course Introduction: Detailed course information is available on each course's page.  

---

## Wireframing  

The layout and structure of the website were designed using **Figma**. The wireframed pages include:  
- Home Page  
- Course View Page  
- Pay and Enroll Page  
- Tabs and Content Pages  
- Search and Result Page  

👉 **Figma Link:** [MicroCourses Wireframe](https://www.figma.com/design/P9ZC3O3FjIKlkth9tMmSg4/MicroCourses?node-id=0-1&t=r2eqEPpdnpvzAAvi-1)  

### Wireframe Descriptions:  

**Home Page:**  
- Top bar, navigation tabs, welcome picture, and course cards.  
- A large welcome picture with an embedded link to scroll down to all courses.  
- Search box in the top bar to search for courses.  

**Course View Page:**  
- Brief and full course introduction.  
- Course content, schedule, price, outcomes, prerequisites.  
- Introductory video.  
- Two "Enroll" buttons for easy access to registration.  

**Enroll Form:**  
- Opens as a floating window when "Enroll" is clicked.  
- After successful registration, a confirmation popup appears.  

**Tabs:**  
- Tabs navigate different course specialties (e.g., Information Technology).  
- Display relevant courses when a tab is selected.  

**Search Result Page:**  
- Displays courses matching search terms.  
- Note: Some technical challenges limited the search functionality.  

---

## HTML Structure  

The project includes **five HTML files**:  

- `HomePage.html` – Home page with all courses.  
- Four course-specific pages:  
  - `Full-StackWebDevelopment.html`  
  - `DataScienceandMachineLearning.html`  
  - `CyberSecurity.html`  
  - `CloudComputing.html`  

---

## CSS Styling  

- CSS was applied to enhance page layouts, font sizes, card sizes, and responsiveness.  
- Responsive design ensured via `@media only screen and (max-width:425px)`.  
- Cards adjust their size dynamically based on screen width.  

---

## JavaScript Functionality  

Four key JavaScript functions were implemented to improve interactivity:  

### 1. Navigation Tabs  
- Show/hide courses under specific specialties.  
- "Explore all courses" tab reveals all courses and hides others.  
- Solution included creating an additional division (`id="Explore all courses"`) and adjusting tab functionalities to maintain proper navigation.  

### 2. Enroll Buttons  
- Open a unified form to collect user information.  
- Handled challenges with button default behavior using `event.preventDefault()`.  
- Used `<a></a>` tags styled as buttons for compatibility.  
- Extracted course titles and prices dynamically using `querySelector` and `querySelectorAll`.  

### 3. Form Validation  
- Validates user inputs before submission.  
- Based on best practices and adapted from a lab exercise ("create a product").  
- Emphasis on using correct input types in HTML for better validation.  

### 4. Search Function  
- Matches user input with course titles.  
- Case-insensitive matching.  
- If a match is found, displays only relevant courses and hides others, including the tab bar and welcome picture.  
- Note: The search currently requires a full course title for successful matching due to technical limitations.  

---

## Testing and Refinement  

- Tested on **Chrome** and **Safari**, working well on both.  
- Adjusted visual elements (card sizes, fonts, layout) for better user experience.  

### Responsive Design  
- Ensured mobile compatibility through responsive CSS and testing with browser inspector tools.  

### Accessibility  
- All images include `alt` attributes.  
- Buttons like "Search" and "Enroll" include `aria-label` attributes for screen readers.  

---

## Extra Clarifications  

- **Login, signup, and notification functionalities** were not implemented.  
- Only four courses currently have full course view pages:  
  - Full-Stack Web Development  
  - Data Science and Machine Learning  
  - Cyber Security Fundamentals  
  - Cloud Computing Essentials  

---

