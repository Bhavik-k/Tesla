import React from 'react'
import styled from 'styled-components'


function section(props) {

    
    return (
        <Wrap bg = {props.img}>
            <ItemText>
                <h1 className="heading">{props.title}</h1>
                <p>{props.discri}</p>
            </ItemText>
            <div>
                <ButtoGroup>
                    <LeftBut>
                        {props.LB}
                    </LeftBut>

                    { props.RB &&
                        <RightBut>
                            {props.RB}
                        </RightBut>
                    }

                </ButtoGroup>
                <DownArrow src="/images/down-arrow.svg"/>
            </div>
        </Wrap>
    )
}

export default section

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    background-image: ${props =>`url("/images/${props.bg}")`};
    

`
const ItemText = styled.div`
    padding-top: 17vh;
    color: #7f7f7f;
`

const ButtoGroup = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    font-size: 12px;
    @media (max-width: 582px){
        flex-direction: column;
    }
`
const LeftBut = styled.div`
    background-color: rgb(18, 21, 26);
    color: #fff;
    height: 40px;
    width: 256px;
    display: grid;
    place-items: center;
    border-radius:999px;
    cursor: pointer;
    text-transform: uppercase;
    margin: 8px;

    @media (max-width: 582px){
        width: 100vw;
    }

`
const RightBut = styled(LeftBut)`
    opacity: .5;
`


const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: anymateDown infinite 1.5s;
`