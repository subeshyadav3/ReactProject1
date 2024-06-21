import React from 'react';

function Projects() {
    const projects = [
        {
            id: 1,
            title: 'E-commerce Website',
            description: 'A fully functional e-commerce platform built with React and Node.js.',
            imageUrl: 'https://via.placeholder.com/300',
            demoUrl: '#',
            codeUrl: '#',
        },
        {
            id: 2,
            title: 'Blog Application',
            description: 'A blog app where users can create, read, update, and delete blog posts.',
            imageUrl: 'https://via.placeholder.com/300',
            demoUrl: '#',
            codeUrl: '#',
        },
        {
            id: 3,
            title: 'Task Manager',
            description: 'An application to manage tasks and to-do lists.',
            imageUrl: 'https://via.placeholder.com/300',
            demoUrl: '#',
            codeUrl: '#',
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Projects</h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map(project => (
                        <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <div className="flex justify-between">
                                    <a href={project.demoUrl} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Demo</a>
                                    <a href={project.codeUrl} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
