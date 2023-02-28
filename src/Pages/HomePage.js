import Banner from "../Component/Banner/banner";

import SimpleTabbing from "../Component/SimpleTabbing/SimpleTabbing";
import Faq from "../Component/FAQ/newFaq";

import Ctc from "../Component/Ctc/ctc";
import YelloCtc from "../Component/YelloCtc/YelloCtc";
import Tabingscrolltwo from "../Component/Tabingtwo/Tabingtwo";
import Latestblog from "../Component/Latestblog/Letestblog";
import TabScrol from "../Component/TabScrol/Tabscrol";
import Linetabvertically from "../Component/Linetabverticaly/Linetabverticaly";
import TabScrolonmobile from "../Component/TabScrol/Tabscrolonmobile";
import Tabingtwomobile from "../Component/Tabingtwo/Tabingtwomobile";

import Owl from "../Component/owl/owl";

const HomePage = () => {
  return (
    <div className="reDesign">
      <Banner />

      <TabScrolonmobile />
      <TabScrol />
      <YelloCtc />
      <Owl />

      <Tabingscrolltwo />
      <Tabingtwomobile />
      <SimpleTabbing />
      {/* <Linetabvertically /> */}
      <Ctc />
      <Latestblog />
      <Faq />
    </div>
  );
};

export default HomePage;
