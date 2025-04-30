export default function Navbar({ onOpen }) {
    return (
        <div className="navbar bg-base-100 shadow-sm px-4 py-3">
            {/* Navbar Start - Menu hambúrguer */}
            <div className="navbar-start">
                <div className="dropdown md:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><a className="text-lg">Clients</a></li> {/* Aumentando a fonte */}
                        <li><a className="text-lg" onClick={onOpen}>Add Client</a></li> {/* Aumentando a fonte */}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl hidden md:block">Clients</a> {/* Título maior */}
            </div>

            {/* Navbar Center - Barra de pesquisa */}
            <div className="navbar-center w-full md:w-auto">
                <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-full md:w-64 text-lg max-w-xs"
                />
            </div>

            {/* Navbar End - Botão de adicionar cliente */}
            <div className="navbar-end hidden md:flex">
                <button className="btn btn-primary text-lg" onClick={onOpen}> {/* Aumentando a fonte do botão */}
                    Add Client
                </button>
            </div>
        </div>
    );
}
