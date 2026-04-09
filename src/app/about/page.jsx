import Image from "next/image";
import heroImg from '../../assets/image/hero_img.jpg'

const AboutPage = () => {
    return (
        <div>
            <h2 className="m-5 text-2xl">About Page</h2> 
            
            <Image className="mx-auto" width="1200" height="300" src="/banner.jpg" alt="Banner img"></Image>

            <Image className="mx-auto h-100 mt-5" width="1200" height="300" src={heroImg} alt="hero img"></Image>


            {/* less important */}
            <Image width="1200" height="1000" src="https://unsplash.com/photos/a-small-island-with-palm-trees-in-calm-water-VU7z8SQsBTo" alt="online image"></Image>
        </div>
    );
};

export default AboutPage;