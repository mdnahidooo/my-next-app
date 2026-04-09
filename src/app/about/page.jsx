import Image from "next/image";
import heroImg from '../../assets/image/hero_img.jpg'

const AboutPage = () => {
    return (
        <div>
            <h2 className="m-5 text-2xl">About Page</h2> 
            
            <Image className="mx-auto" width="1200" height="300" src="/banner.jpg" alt="Banner img"></Image>

            <Image className="mx-auto h-100 mt-5" width="1200" height="300" src={heroImg} alt="hero img"></Image>


            {/* less important */}
            <Image width="1200" height="1000" src="https://images.unsplash.com/photo-1774816064876-10a893fc79e9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="online image"></Image>
        </div>
    );
};

export default AboutPage;