import autumn from '../assets/autumn.mp4'



export default function Header(){
    return (
        <div id="head">
            <video src={autumn} autoPlay muted loop/>
        </div>
    )
}
