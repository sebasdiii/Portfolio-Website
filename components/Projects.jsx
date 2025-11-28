import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "Groceries Management System",
        description: "This is a project that used Python Programming Language.",
        image: "/Groceries-Management-System.png",
        gitUrl: "https://github.com/sebasdiii/Groceries-Management-System"

    },
    {
        id: 2,
        title: "Sales Management System",
        description: "This is a project that used Java Programming Language.",
        image: "/SMS.png",
        gitUrl: "https://github.com/sebasdiii/Sales-Management-System"
    },
    {
        id: 3,
        title: "Leave Management System",
        description: "This is a project that used C Programming Language.",
        image: "/LMS.png",
        gitUrl: "https://github.com/sebasdiii/Leave-Management-System"
    },
    {
        id: 4,
        title: "E-BookStore-Database-System",
        description: "This is an e-bookstore database system created with SQL using MSSQL.",
        image: "/IDB.png",
        gitUrl: "https://github.com/AdaMC2212/E-bookstore-database-management-system---MSSQL?tab=readme-ov-file"
    },
    {
        id: 5,
        title: "Car-Insurance-Claim-Data-Management",
        description: "This is a car insurance claim created with SAS Programming Language.",
        image: "/SAS.png",
        gitUrl: "https://github.com/AdaMC2212/Car-Insurance-Claim-Data-Management---SAS-Programming/tree/main?tab=readme-ov-file"
    },
    {
        id: 6,
        title: "NLP Spam Email Classification",
        description: "This is a machine learning project that classifies emails as spam or ham using NLP techniques.",
        gitUrl: "https://github.com/sebasdiii/NLP-Spam-Email-Classification"
    },
    {
        id: 7,
        title: "Deep Learning Garbage Classification",
        description: "This is a machine learning project that  classifies images of garbage into different categories using deep learning techniques.",
        gitUrl: "https://github.com/sebasdiii/Deep-Learning-Garbage-Classification"
    },
    

];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Projects;
