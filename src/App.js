import "./index.css";
import Domains from "./Components/Domains";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
function App() {
  return (
    <div className="App">
      <Tabs className="Tabs">
        <TabList className="Tab-List">
          <Tab className="one">Domains</Tab>
          <Tab className="two">Web Hosting</Tab>
          <Tab className="three">Dedicated Servers</Tab>
          <Tab className="four">Virtual Cloud Servers</Tab>
          <Tab className="five">WordPress Hosting</Tab>
          <Tab className="six">Email Hosting</Tab>
          <Tab className="seven">VPS Hosting</Tab>
          <Tab className="eight">Free Hosting</Tab>
        </TabList>
        <TabPanel>
          <Domains />
        </TabPanel>
        <TabPanel>
          <Domains />
        </TabPanel>
        <TabPanel>
          <Domains />
        </TabPanel>
        <TabPanel>
          <Domains />
        </TabPanel>
        <TabPanel>
          <Domains />
        </TabPanel>
        <TabPanel>
          <Domains />
        </TabPanel>
        <TabPanel>
          <Domains />
        </TabPanel>
        <TabPanel>
          <Domains />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
