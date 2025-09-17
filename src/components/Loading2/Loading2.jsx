import React from 'react';
import { Holder, Loader, LoaderInner } from './Loading2.style';
 const Loading2 = () => {
    return ( 
        <Holder>
            <Loader>
                <LoaderInner></LoaderInner>
            </Loader>
        </Holder>
     );
 }
  
 export default Loading2;