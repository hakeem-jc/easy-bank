import './HeroSection.css';
import image_mockup from '../../images/image-mockups.png';

const HeroSection = () => {
    return (
        <section className='hero-section global__section'>
            <div className='hero-section__image-container'>
                <img className='hero-section__image' alt="Hero" src={image_mockup}/>
            </div>

            <div className='hero-section__cta'>
                <h1 className='hero-section__title global__heading'>Next generation digital banking</h1>
                <p className='global__text'>
                    Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more.</p>

                {/* Add button */}
            </div>
        </section>
    )
}

export default HeroSection;