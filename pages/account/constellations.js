import { Tab, Tabs, useMediaQuery } from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "components/common/context/AppProvider";
import ConstellationsComp from "components/account/Misc/Constellations";
import StarSigns from "components/account/Misc/StarSigns";
import { NextSeo } from "next-seo";

const tabs = ['Constellations', 'Star Signs'];

const Constellations = () => {
  const { state } = useContext(AppContext);
  const [selectedTab, setSelectedTab] = useState(0);
  const isMd = useMediaQuery((theme) => theme.breakpoints.down('md'), { noSsr: true });

  return <div>
    <NextSeo
      title="Idleon Toolbox | Constellations"
      description="Constellation and star signs overview"
    />
    <Tabs centered
          sx={{ marginBottom: 3 }}
          variant={isMd ? 'fullWidth' : 'standard'}
          value={selectedTab} onChange={(e, selected) => setSelectedTab(selected)}>
      {tabs?.map((tab, index) => {
        return <Tab label={tab} key={`${tab}-${index}`}/>
      })}
    </Tabs>
    {selectedTab === 0 ? <ConstellationsComp constellations={state?.account?.constellations}/> : null}
    {selectedTab === 1 ? <StarSigns starSigns={state?.account?.starSigns}/> : null}
  </div>
};

export default Constellations;
