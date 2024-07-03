import Image from "next/image";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import Brandsbar from "@/components/Brands/Brandsbar";
import ClothesLine from "@/components/Clothesline/ClothesLine";
import YellowBanner from "@/components/BannerAds/YellowBanner";
import TitlePages from "@/components/TittlePages";
import ClothesLine2 from "@/components/Clothesline/ClothesLine2";
import DownloadApp from "@/components/DownloadApp/DownloadApp";
import EmailInput from "@/components/JoinShopping/EmailInput";
import JoinContainer from "@/components/JoinShopping/JoinContainer";
import FooterContainer from "@/components/Footer/FooterContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}>
       <Navbar/>
       <HeroSection/>
       <Brandsbar/>
       <TitlePages>NEW ARRIVALS</TitlePages>
       <ClothesLine/>
       <YellowBanner/>
       <TitlePages>Young’s Favourite</TitlePages>
       <ClothesLine2/>
       <DownloadApp/>
       <JoinContainer/>
       <FooterContainer/>

    </main>
  );
}
