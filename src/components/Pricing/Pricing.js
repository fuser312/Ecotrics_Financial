import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  MainPricingHeading
} from './Pricing.elements';





function Pricing() {
  return (
    
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <MainPricingHeading>Our Services</MainPricingHeading>
        <PricingWrapper>
          <PricingHeading>Stock Market Training</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Stock Market Basic</PricingCardPlan>
                <PricingCardCost>INR 5,000</PricingCardCost>
                <PricingCardLength>Full Course</PricingCardLength>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Option and Future in Detail</PricingCardPlan>
                <PricingCardCost>INR 8,500</PricingCardCost>
                <PricingCardLength>Full Course</PricingCardLength>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>

        <PricingWrapper>
          <PricingHeading>Stock details intraday and holding</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Basic Stock Future Intraday</PricingCardPlan>
                <PricingCardCost>INR 8,999</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Basic Equity Intraday Cash</PricingCardPlan>
                <PricingCardCost>INR 5,999</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Basic Stock Option</PricingCardPlan>
                <PricingCardCost>INR 4,999</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Index Future</PricingCardPlan>
                <PricingCardCost>INR 7,999</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Index Option</PricingCardPlan>
                <PricingCardCost>INR 4,999</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      
        <PricingWrapper>
          <PricingHeading>HNI Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>HNI Stock Future</PricingCardPlan>
                <PricingCardCost>INR 20,000</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>HNI Index Future</PricingCardPlan>
                <PricingCardCost>INR 15,000</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>HNI Cash Intraday/Holding</PricingCardPlan>
                <PricingCardCost>INR 15,000</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>HNI Index + Stock Option</PricingCardPlan>
                <PricingCardCost>INR 15,000</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      
        <PricingWrapper>
          <PricingHeading>Comodity MCX Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>MCX Base Metal Package</PricingCardPlan>
                <PricingCardCost>INR 9,999</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>MCX Crude</PricingCardPlan>
                <PricingCardCost>INR 8,999</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Comodity Bullions(Gold,Silver)</PricingCardPlan>
                <PricingCardCost>INR 15,000</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            
          </PricingContainer>
        </PricingWrapper>
      


      </PricingSection>
    </IconContext.Provider>
    
  );
}
export default Pricing;