import React from 'react'
import styled from 'styled-components'
import Section from './section'

function home() {
    return (
        <Container>
            <Section
                title="Model S"
                discri="Order Online for Touchless Delivery"
                LB="COSTOM ORDER"
                RB="EXISTING INVENTORY"
                img="model-s.jpg"
            />
            <Section
                title="Model Y"
                discri="Order Online for Touchless Delivery"
                LB="COSTOM ORDER"
                RB="EXISTING INVENTORY"
                img="model-y.jpg"
            />
            <Section
                title="Model 3"
                discri="Order Online for Touchless Delivery"
                LB="COSTOM ORDER"
                RB="EXISTING INVENTORY"
                img="model-3.jpg"
            />
            <Section
                title="Model X"
                discri="Order Online for Touchless Delivery"
                LB="COSTOM ORDER"
                RB="EXISTING INVENTORY"
                img="model-x.jpg"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                LB="ORDER now"
                RB="learn more"
                discri="Money-back guarantee"
                img="solar-panel.jpg"
            />
            <Section
                title="Solar for New Roofs"
                discri="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                LB="ORDER now"
                RB="learn more"
                img="solar-roof.jpg"
            />
            <Section
                title="Accessories"
                discri=""
                img="accessories.jpg"
                LB="shop now"
            />
        </Container>
    )
}

export default home

const Container = styled.div`
    height: 100vh;
`