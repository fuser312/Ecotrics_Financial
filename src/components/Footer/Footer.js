import React from "react";
import Logo from "../../assets/logo.jpeg";
import emailjs from "emailjs";
import {
  FooterContainer,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
  FormInput,
  Form,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights

} from "./Footer.elements";
import { Button } from "../../globalStyles";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";



const Footer = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_n7v1hco', e.target, 'user_S34QiVX4o4XGReLliqF29')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership, cntact us now.
        </FooterSubHeading>
        <FooterSubText>Get a free trial now</FooterSubText>
        <Form onSubmit={sendEmail}>
          <FormInput name="email" type = 'email' placeholder="Your Email" />
          <FormInput name="name" type = 'text' placeholder="Your Name" />
          <FormInput name="phone" type = 'tel' placeholder="Your Phone No" />
            <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
          <FooterLinksWrapper>
              <FooterLinkItems>
                  <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to = '/sign-up'>How it works</FooterLink>
                  <FooterLink to = '/sign-up'>Testimonials</FooterLink>
                  <FooterLink to = '/sign-up'>Investors</FooterLink>
                  <FooterLink to = '/sign-up'>Training</FooterLink>
                  <FooterLink to = '/sign-up'>Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                  <FooterLinkTitle>Contact Us</FooterLinkTitle>
                  <FooterLink to = '/sign-up'>How it works</FooterLink>
                  <FooterLink to = '/sign-up'>Testimonials</FooterLink>
                  <FooterLink to = '/sign-up'>Investors</FooterLink>
                  <FooterLink to = '/sign-up'>Training</FooterLink>
                  <FooterLink to = '/sign-up'>Terms of Service</FooterLink>
              </FooterLinkItems>
              </FooterLinksWrapper>
              <FooterLinksWrapper>
              <FooterLinkItems>
                  <FooterLinkTitle>Videos</FooterLinkTitle>
                  <FooterLink to = '/sign-up'>How it works</FooterLink>
                  <FooterLink to = '/sign-up'>Testimonials</FooterLink>
                  <FooterLink to = '/sign-up'>Investors</FooterLink>
                  <FooterLink to = '/sign-up'>Training</FooterLink>
                  <FooterLink to = '/sign-up'>Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                  <FooterLinkTitle>Social Media</FooterLinkTitle>
                  <FooterLink to = '/sign-up'>How it works</FooterLink>
                  <FooterLink to = '/sign-up'>Testimonials</FooterLink>
                  <FooterLink to = '/sign-up'>Investors</FooterLink>
                  <FooterLink to = '/sign-up'>Training</FooterLink>
                  <FooterLink to = '/sign-up'>Terms of Service</FooterLink>
              </FooterLinkItems>
              </FooterLinksWrapper>
         
      </FooterLinksContainer>
      <SocialMedia>
          <SocialMediaWrap>
              <SocialLogo to = '/'>
              <img src={Logo} height={70} width={70} />
              </SocialLogo>
              <WebsiteRights>
                  Ecotrics Financials 2020
              </WebsiteRights>
              <SocialIcons>
                  <SocialIconLink href = '/' target = "_blank" aria-label = "Facebook">
                      <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink href = '/' target = "_blank" aria-label = "Instagram">
                      <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink href = '/' target = "_blank" aria-label = "Youtube">
                      <FaYoutube />
                  </SocialIconLink>
                  <SocialIconLink href = '/' target = "_blank" aria-label = "Twitter">
                      <FaTwitter />
                  </SocialIconLink>
                  <SocialIconLink href = '/' target = "_blank" aria-label = "LinkedIn">
                      <FaLinkedin />
                  </SocialIconLink>
              </SocialIcons>
          </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
