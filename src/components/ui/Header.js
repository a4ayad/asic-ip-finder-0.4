export const Header =() => (

    <div className="justify-center w-screen bg-blue-400 p-2 overflow-auto items-center ">
        <div className="mb-16 bg-purple-400">
            <ul className="flex flex-row">
                <li className="m-1 font-bold text-2xl bg-green-500 p-2 hover:bg-blue-500">
                    <h1>ASIC IP Finder</h1>
                </li>
                <li className="m-1 text-1xl p-2 bg-blue-400 hover:bg-pink-500">
                    <div className="dropdown">
                        <button className="dropbtn">IP Resources</button>
                        <div className="dropdown-content">
                            <a href="#">Resource 1</a>
                            <a href="#">Resource 2</a>
                        </div>
                    </div>
                </li>
                <li className="m-1 text-1xl p-2 bg-blue-400 hover:bg-pink-500">
                    <div className="dropdown">
                        <button className="dropbtn">Partners</button>
                        <div className="dropdown-content">
                            <a href="#">Partner1</a>
                            <a href="#">Partner2</a>
                        </div>
                    </div>
                </li>
                <li className="m-1 text-1xl p-2 bg-blue-400 hover:bg-pink-500">
                    <div className="dropdown">
                        <button className="dropbtn">Support</button>
                        <div className="dropdown-content">
                            <a href="#">Support</a>
                            <a href="#">Contact Us</a>
                        </div>
                    </div>
                </li>
                <li className="m-1 text-1xl p-2 bg-blue-400 hover:bg-pink-500">
                    <div className="dropdown">
                        <button className="dropbtn">About Us</button>
                        <div className="dropdown-content">
                            <a href="#">Overview</a>
                            <a href="#">Directors</a>
                        </div>
                    </div>
                </li>
                <li className="m-1 text-2xl bg-yellow-200 p-2 hover:bg-blue-500">
                    <a href="./login-register.html">Login/Register</a>
                </li>
            </ul>
        </div>
    </div>

)