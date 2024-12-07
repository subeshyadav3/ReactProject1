import React from 'react';

function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-blue-500 text-white text-center py-24" id="home"
            
            >
                <h1 className="text-3xl sm:text-4xl font-bold">Welcome to My Website</h1>
                <p className="text-lg mt-4 sm:text-xl">Your gateway to innovation and creativity</p>
                <a href="#services" className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-orange-600">
                    Explore Our Services
                </a>
            </section>

            {/* Services Section */}
            <section className="text-center py-24" id="services">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-12">Our Services</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full sm:w-80">
                        <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
                        <p className="text-lg">Building responsive and dynamic websites</p>
                    </div>
                    <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full sm:w-80">
                        <h3 className="text-2xl font-semibold mb-4">App Development</h3>
                        <p className="text-lg">Innovative mobile app solutions</p>
                    </div>
                    <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full sm:w-80">
                        <h3 className="text-2xl font-semibold mb-4">SEO Optimization</h3>
                        <p className="text-lg">Enhance your visibility online</p>
                    </div>
                </div>
            </section>

           
        </div>
    );
}

export default Home;
