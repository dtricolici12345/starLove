import BackgroundStars from './BackgroundStars.css';


function BackgroundStars () {
    return (
        <div class="bg" >
            <div class="star-field">
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
            </div>
            <BackgroundStars/>
        </div>
    )
};

export default BackgroundStars;