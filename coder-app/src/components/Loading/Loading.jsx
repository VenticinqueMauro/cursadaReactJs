import React from 'react'

export const Loading = () => {
    return (
        <div className="container mt-5 pt-5 min-vh-100">
            <div className="row ">
                <div className="col ">
                    <div className="balls d-block mx-auto mt-5">
                    </div>
                    <h2 className='text-center mt-2 text-white loading'>a moment...</h2>
                </div>
            </div>
        </div>
    )
}
