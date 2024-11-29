import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        // {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-6" id="contact">
        <p>&copy; 2024 . All rights reserved.</p>
        <p>Contact us at <a href="mailto:abc@gmail.com" className="text-orange-500">abc@gmail.com</a></p>
    </footer>
    ); 
}

export default Footer;
