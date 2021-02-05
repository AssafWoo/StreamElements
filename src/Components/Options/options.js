import React, {Fragment} from 'react';
import {PicksWrapper, SinglePick, ImageWrapper} from '../Styles/style';

const UserPick = ({handleClick}) => {
    return(

        <Fragment>
            <PicksWrapper>
                <SinglePick color="scissors" onClick={() => handleClick({id:1, name:'scissors', src:"../../../images/icon-scissors.svg"})}>
                    <ImageWrapper><img src="../../../images/icon-scissors.svg" /></ImageWrapper>
                </SinglePick>
                <SinglePick color="paper" onClick={() => handleClick({id:2, name:'paper', src:"../../../images/icon-paper.svg"})}>
                    <ImageWrapper><img src="../../../images/icon-paper.svg" /></ImageWrapper>
                </SinglePick>
            </PicksWrapper>
            <PicksWrapper last>
                <SinglePick color="rock" last onClick={() => handleClick({id:3, name:'rock', src:"../../../images/icon-rock.svg"})}>
                    <ImageWrapper><img src="../../../images/icon-rock.svg" /></ImageWrapper>
                </SinglePick>
            </PicksWrapper>
        </Fragment> 
        )
}

export default UserPick;