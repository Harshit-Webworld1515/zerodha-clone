import React from 'react'

function NotFound() {
    return (
        <div className='container p-5 mb-5'>
            <div className="row text-center">
                <div className="col">
                    <h2 className='mt-4'>
                        404 Page not found
                    </h2>
                    <p className='mt-4'>Sorry, the page you are looking for does not exist.</p>    
                </div>
            </div>
        </div>
    );
}

export default NotFound;