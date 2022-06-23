import './Launches.css';

export default function Launches({launch}) {
    return (
        <div className='wrapper'>
            <h2>{launch.mission_name}</h2>
            <p>{launch.launch_year}</p>
            <img src={launch.links.mission_patch_small} alt=""/>
        </div>
    )
}