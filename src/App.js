import React from 'react';
import ServiceCard from './ServiceCard.js';
import Header from './Header.js';
import Footer from './Footer.js';
import plex from './plex.png';
import bazarr from './bazarr.png';
import radarr from './radarr.png';
import sonarr from './sonarr.png';
import deluge from './deluge.png';
import prowlarr from './prowlarr.png';
import traefik from './traefik.png';
import ombi from './ombi.png';
import tautulli from './tautulli.png';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.adminLoggedIn = this.adminLoggedIn.bind(this);

    this.state = {adminLogin: false};
  }

  adminLoggedIn() {
    this.setState({adminLogin: true});
  }

  render() {
    return (
      <div class="flex flex-col min-h-screen">
        <Header adminLoggedIn={this.adminLoggedIn} adminLogin={this.state.adminLogin} />
        <div class="flex flex-wrap items-start">
          <ServiceCard svcLogo={plex} svcName="Plex" adminLogin={this.state.adminLogin} adminReq={false} buttonDef={[["Watch on Plex", "https://plex.bsmedia.xyz/"]]} />
          <ServiceCard svcLogo={bazarr} svcName="Bazarr" adminLogin={this.state.adminLogin} adminReq={true} buttonDef={[["Home", "https://bazarr.bsmedia.xyz/"], ["Status", "https://bazarr.bsmedia.xyz/system/status"],
                ["Providers", "https://bazarr.bsmedia.xyz/system/providers"], ["Patch Notes", "https://bazarr.bsmedia.xyz/system/releases"]]} />
          <ServiceCard svcLogo={radarr} svcName="Radarr" adminLogin={this.state.adminLogin} adminReq={true} buttonDef={[["Home", "https://radarr.bsmedia.xyz/"], ["Add Movie", "https://radarr.bsmedia.xyz/add/new"],
                ["Discover", "https://radarr.bsmedia.xyz/add/discover"], ["Status", "https://radarr.bsmedia.xyz/system/status"],
                ["Patch Notes", "https://radarr.bsmedia.xyz/system/updates"]]} />
          <ServiceCard svcLogo={sonarr} svcName="Sonarr" adminLogin={this.state.adminLogin} adminReq={true} buttonDef={[["Home", "https://sonarr.bsmedia.xyz/"], ["Add Show", "https://sonarr.bsmedia.xyz/add/new"],
                ["Wanted", "https://sonarr.bsmedia.xyz/wanted/missing"], ["Status", "https://sonarr.bsmedia.xyz/system/status"],
                ["Patch Notes", "https://sonarr.bsmedia.xyz/system/updates"]]} />
          <ServiceCard svcLogo={deluge} svcName="Deluge" adminLogin={this.state.adminLogin} adminReq={true} buttonDef={[["Home", "https://deluge.bsmedia.xyz/"]]} />
          <ServiceCard svcLogo={prowlarr} svcName="Prowlarr" adminLogin={this.state.adminLogin} adminReq={true} buttonDef={[["Home", "https://prowlarr.bsmedia.xyz/"], ["Stats", "https://prowlarr.bsmedia.xyz/indexers/stats"],
                ["Search", "https://prowlarr.bsmedia.xyz/search"], ["Status", "https://prowlarr.bsmedia.xyz/system/status"], 
                ["Patch Notes", "https://prowlarr.bsmedia.xyz/system/updates"]]} />
          <ServiceCard svcLogo={traefik} svcName="Traefik" adminLogin={this.state.adminLogin} adminReq={true} buttonDef={[["Home", "https://traefik.bsmedia.xyz/"]]} />
          <ServiceCard svcLogo={ombi} svcName="Ombi" adminLogin={this.state.adminLogin} adminReq={false} buttonDef={[["Home", "https://ombi.bsmedia.xyz"], ["Requests", "https://ombi.bsmedia.xyz/requests-list"]]} />
          <ServiceCard svcLogo={tautulli} svcName="Tautulli" adminLogin={this.state.adminLogin} adminReq={true} buttonDef={[["Home", "https://tautulli.bsmedia.xyz/"]]} />
        </div>
        <div class="flex-grow"></div>
        <Footer />
      </div>
    );
  }
}

export default App;