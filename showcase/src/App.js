import react from "react";

import {Download,
  SectionRapper,
  Features} from "./components";

import assets from "./assets"
import styles from "./styles/Global";


const App=()=> {
  return (
  <>
     <SectionRapper
     title="You own store of Nifty NFTs.
     Start Selling & Growing."
     description="Buy, Store, Collect NFTS,
     exchange & earn crypto. Join 25+ 
     million people using ProNef Marketplace"
     showBtn
     mockupImg={assets.homeHero}
     banner="banner"
     />
     <SectionRapper
     title="Smart User Interface Marketplace"
     description="Experience a buttery UI of 
     ProNef NFT Marketplace. Smooth constant
     colors of a fluent UI design."
     mockupImg={assets.homeCards}
     reverse
     />

     <Features/>

     <SectionRapper
     title="Deployment"
     description="ProNef is build using Expo
     which runs natively on all useres devices.
     You can easily get your app 
     into people's hands"
     mockupImg={assets.feature}
     reverse
     />
     <SectionRapper
     title="Creative way to showcase the store"
     description="The app contains two screens. The first
     screen lists all NFTs while the second one shows 
     the details of a specific NFT. "
     mockupImg={assets.mockup}
     banner="banner02"
     />
     <Download/>

     <div className="px-4 py-2 justify-center item-center bg-primary flex-col text-center banner04">
       <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
       <span>Bara'a Al-Osaily</span>
       </p>
     </div>

  </>
  );
}

export default App;
