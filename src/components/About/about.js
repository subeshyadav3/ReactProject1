import React from 'react';

function About() {
    return (
        <div>
            {/* About Section */}
            <section className="bg-gray-100 text-center py-24" id="about">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h2>
                <p className="text-lg sm:text-xl px-4 sm:px-16 mb-8">
                    We are a team of passionate individuals dedicated to delivering innovative solutions
                    to help businesses grow and thrive in the digital age. Our mission is to provide high-quality
                    services and creyate lasting relationships with our clients.
                </p>

                {/* Mission Section */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Our Mission</h3>
                    <p className="text-lg sm:text-xl px-4 sm:px-16">
                        Our mission is to empower businesses with cutting-edge technology and creative solutions,
                        enabling them to achieve their goals and make a positive impact in their industries.
                    </p>
                </div>

                {/* Team Section */}
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-80">
                        <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mb-4 mx-auto" />
                        <h4 className="text-xl font-semibold mb-2">John Doe</h4>
                        <p className="text-lg">CEO & Founder</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-80">
                        <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mb-4 mx-auto" />
                        <h4 className="text-xl font-semibold mb-2">Jane Smith</h4>
                        <p className="text-lg">Chief Technology Officer</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-80">
                        <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mb-4 mx-auto" />
                        <h4 className="text-xl font-semibold mb-2">Alice Johnson</h4>
                        <p className="text-lg">Head of Marketing</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
