import config from "../../../tailwind.config"

function Menu() {
    return (
        <header className='font-sans py-7'>
            <div>
                <p className="text-black pl-10">Portfolio</p>
            </div>
            <ul className='flex justify-end gap-10 pr-10 text-black'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About me</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
    )
}

export  default Menu