import React from 'react'
import './Main.css'

function Main() {
    return (
        <div id="main">
            <section>
                <h1 id="main-title">Lorem ipsum dolor sit amet</h1>
                <p id="main-title-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

            </section>

            <div id="main-grid">
                <div className='card' id="card-one">
                    <h2 className='card-title'>Level 1</h2>
                </div>

                <div className='card' id="card-two">
                    <h2 className='card-title'>Level 2</h2>
                </div>

                <div className='card' id="card-three">
                    <h2 className='card-title'>Level 3</h2>
                </div>
            </div>
        </div>
    )
}

export default Main