import React from 'react';
import ViewerContainer from '../container/ViewerContainer'
import PlaylistContainer from '../container/PlaylistContainer'
const Viewer = () => {
    
    return (
        <div className="wrap_page">
            <ViewerContainer />
            <PlaylistContainer />
        </div>
    );
    
   /*
   return (
       <div className="wrap_page">
           <PlaylistContainer />
       </div>
   )
   */
};

export default Viewer;