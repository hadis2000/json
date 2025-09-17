import React from 'react';
import { Body, Line, Matn, Pencil, Pencil__ball_point, Pencil__cap, Pencil__cap_base, Pencil__eraser, Pencil__middle } from './Loading.style';

const Loading = () => {
    return ( 
        <Body>
            <Pencil>
                <Pencil__ball_point/>
                <Pencil__cap />
                <Pencil__cap_base />
                <Pencil__middle />
                <Pencil__eraser />
            </Pencil>
            <Line />
            <Matn>...لطفا صبر کنید</Matn>
        </Body>
     );
}
 
export default Loading;