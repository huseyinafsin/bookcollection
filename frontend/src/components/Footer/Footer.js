import React from 'react'
import Social from '../Social/Social';

function Footer() {
    return (
        <footer className="bg-dark text-white text-center column py-4">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <p>&copy; {new Date().getFullYear()} Book Collection All rights reserved. | @Hüseyin Afşin</p>
                    </div>
                    <div className="col-4"><Social/></div>
                </div>
            </div>
        </footer>
    );
}


export default Footer