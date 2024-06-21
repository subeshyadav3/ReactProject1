import React from 'react';

function Home() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-4xl px-8 py-12 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to My Portfolio</h1>
                <p className="text-gray-700 mb-6">
                    Hi there! I'm showcasing my skills and projects here. Feel free to explore and get in touch!
                </p>
                <img src='https://img.freepik.com/premium-photo/portrait-man-with-blue-lights-visual-effects-ultra-hd-realistic-generative-ai_947227-933.jpg' alt='Profile' width={200}/>

                <div className="flex justify-center">
                    <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                        View Projects
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
