
import React from 'react';
import Heading from './Heading';
import Card from './Card';

const projects = [
    {
        id: 1,
        title: "Currency Converter",
        description: "A currency converter application that allows users to convert between different currencies using real-time exchange rates.",
        technologies: ["TypeScript", "Inquirer.js"],
        codeLink: "https://github.com/yourusername/currency-converter",
        demoLink: "https://yourwebsite.com/currency-converter-demo",
        image: "/project01.jpg", 
    },
    {
        id: 2,
        title: "Student Management System",
        description: "A system for managing student records that allows adding, viewing, and deleting students.",
        technologies: ["TypeScript", "Inquirer.js"],
        codeLink: "https://github.com/yourusername/student-management-system",
        demoLink: "https://yourwebsite.com/student-management-system-demo",
       image: "/project02.jpg", 
       
    },
    {
        id: 3,
        title: "Adventure Game",
        description: "An interactive adventure game where users can explore a castle, find treasures, and face challenges.",
        technologies: ["TypeScript", "Inquirer.js"],
        codeLink: "https://github.com/yourusername/adventure-game",
        demoLink: "https://yourwebsite.com/adventure-game-demo",
        image: "/project03.jpg",
    },
    {
        id: 4,
        title: "Advanced Todo List",
        description: "An advanced Todo list application that allows users to manage their tasks by adding, viewing, updating, deleting, and completing todos.",
        technologies: ["TypeScript", "Inquirer.js"],
        codeLink: "https://github.com/yourusername/advanced-todo-list",
        demoLink: "https://yourwebsite.com/advanced-todo-list-demo",
        image: "/project04.jpg",
    },
    {
        id: 5,
        title: "Bank Console Application",
        description: "A console application that simulates banking operations such as account management and transactions.",
        technologies: ["TypeScript", "OOP"],
        codeLink: "https://github.com/yourusername/bank-console-app",
        demoLink: "https://yourwebsite.com/bank-console-app-demo",
       image: "/project05.jpg",
    },
    {
        id: 6,
        title: "Countdown Timer",
        description: "A countdown timer application that allows users to set a timer for a specified number of seconds.",
        technologies: ["TypeScript", "Inquirer.js", "date-fns"],
        codeLink: "https://github.com/yourusername/countdown-timer",
        demoLink: "https://yourwebsite.com/countdown-timer-demo",
      image: "/project06.jpg",
    },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32 mt-20'>
      <Heading title='My projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {projects.map((el) => (
          <Card 
            key={el.id}
            title={el.title}
            desc={el.description}
            img={el.image}         
            tags={el.technologies}  
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;


