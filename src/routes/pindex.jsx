import PindexAlbum from '../components/pindexAlbum';
import PindexCenterContainer from '../components/pindexCenterContainer';
import TopNav from '../components/topnav'; 

function Pindex() {
  return (
    <div>
      <TopNav/>
      <PindexCenterContainer/>
      <PindexAlbum/>
    </div>
  );
}

export default Pindex;