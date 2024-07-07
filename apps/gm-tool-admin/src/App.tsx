import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StatList } from "./stat/StatList";
import { StatCreate } from "./stat/StatCreate";
import { StatEdit } from "./stat/StatEdit";
import { StatShow } from "./stat/StatShow";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { ItemList } from "./item/ItemList";
import { ItemCreate } from "./item/ItemCreate";
import { ItemEdit } from "./item/ItemEdit";
import { ItemShow } from "./item/ItemShow";
import { NpcList } from "./npc/NpcList";
import { NpcCreate } from "./npc/NpcCreate";
import { NpcEdit } from "./npc/NpcEdit";
import { NpcShow } from "./npc/NpcShow";
import { CampaignList } from "./campaign/CampaignList";
import { CampaignCreate } from "./campaign/CampaignCreate";
import { CampaignEdit } from "./campaign/CampaignEdit";
import { CampaignShow } from "./campaign/CampaignShow";
import { QuestList } from "./quest/QuestList";
import { QuestCreate } from "./quest/QuestCreate";
import { QuestEdit } from "./quest/QuestEdit";
import { QuestShow } from "./quest/QuestShow";
import { TemplateList } from "./template/TemplateList";
import { TemplateCreate } from "./template/TemplateCreate";
import { TemplateEdit } from "./template/TemplateEdit";
import { TemplateShow } from "./template/TemplateShow";
import { UserFieldList } from "./userField/UserFieldList";
import { UserFieldCreate } from "./userField/UserFieldCreate";
import { UserFieldEdit } from "./userField/UserFieldEdit";
import { UserFieldShow } from "./userField/UserFieldShow";
import { ContainerList } from "./container/ContainerList";
import { ContainerCreate } from "./container/ContainerCreate";
import { ContainerEdit } from "./container/ContainerEdit";
import { ContainerShow } from "./container/ContainerShow";
import { PropertyList } from "./property/PropertyList";
import { PropertyCreate } from "./property/PropertyCreate";
import { PropertyEdit } from "./property/PropertyEdit";
import { PropertyShow } from "./property/PropertyShow";
import { PropertyGroupList } from "./propertyGroup/PropertyGroupList";
import { PropertyGroupCreate } from "./propertyGroup/PropertyGroupCreate";
import { PropertyGroupEdit } from "./propertyGroup/PropertyGroupEdit";
import { PropertyGroupShow } from "./propertyGroup/PropertyGroupShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GM Tool"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Stat"
          list={StatList}
          edit={StatEdit}
          create={StatCreate}
          show={StatShow}
        />
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
        <Resource
          name="Item"
          list={ItemList}
          edit={ItemEdit}
          create={ItemCreate}
          show={ItemShow}
        />
        <Resource
          name="Npc"
          list={NpcList}
          edit={NpcEdit}
          create={NpcCreate}
          show={NpcShow}
        />
        <Resource
          name="Campaign"
          list={CampaignList}
          edit={CampaignEdit}
          create={CampaignCreate}
          show={CampaignShow}
        />
        <Resource
          name="Quest"
          list={QuestList}
          edit={QuestEdit}
          create={QuestCreate}
          show={QuestShow}
        />
        <Resource
          name="Template"
          list={TemplateList}
          edit={TemplateEdit}
          create={TemplateCreate}
          show={TemplateShow}
        />
        <Resource
          name="UserField"
          list={UserFieldList}
          edit={UserFieldEdit}
          create={UserFieldCreate}
          show={UserFieldShow}
        />
        <Resource
          name="Container"
          list={ContainerList}
          edit={ContainerEdit}
          create={ContainerCreate}
          show={ContainerShow}
        />
        <Resource
          name="Property"
          list={PropertyList}
          edit={PropertyEdit}
          create={PropertyCreate}
          show={PropertyShow}
        />
        <Resource
          name="PropertyGroup"
          list={PropertyGroupList}
          edit={PropertyGroupEdit}
          create={PropertyGroupCreate}
          show={PropertyGroupShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
