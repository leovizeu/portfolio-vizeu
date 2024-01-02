import config from "../../../tailwind.config"

function Menu() {
    return (
        <div className='font-mono'>
            <ul className='flex justify-between ml-4 mr-4'>
                <li><p>Portfolio</p></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About me</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export  default Menu