import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import AngelListIcon from '@static/icons/angellist.svg';
import GithubIcon from '@static/icons/github.svg';
import TwitterIcon from '@static/icons/twitter.svg';


const SOCIAL = [
  {
    icon: GithubIcon,
    link: 'https://github.com/m-arti',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/m_arti',
  },
  {
    icon: AngelListIcon,
    link: 'https://angel.co/u/martins-samuel',
  },
];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>

        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <p style={{fontSize:'14.36px', maxWidth:'500px', color:'#000', display: 'grid', textAlign:'left', fontWeight:300, lineHeight:1.5}}>
              <span>
              Weniger, aber besser.
              </span>
              </p>
              <p style={{fontSize: '12.36px', color:'gray', fontWeight:300}}>With <span role="img" aria-label="heart">🧡</span> MS (2021)</p>

            </Copyright>
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink key={link} href={link}>
                  <img src={icon} alt="link"/>
                </ExternalLink>
              ))}
            </SocialIcons>
          </StyledContainer>
          <p style={{fontSize:'14.36px', color: 'gray', display:'grid', textAlign:'center', fontWeight:300, lineHeight:1.25, marginTop:'50px', marginBottom:'0px'}}>
            <span>
              Illustrations — <StyledExternalLink href="https://absurd.design">absurd.design</StyledExternalLink>
              &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;
              Icons — <StyledExternalLink href="https://icons8.com">Icons8</StyledExternalLink>
            </span>
          </p>
        </FooterWrapper>
      </React.Fragment>

    )}
  />
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 20px;
    width: 25px;
    height: 25px;
    transition: 0.5s;

    &:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.footer};
  padding: 40px 0;
  background: #f6f6f6;
  border-top: 10px solid #f0f0f0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

// const Art = styled.figure`
//   display: flex;
//   justify-content: center;
//   margin: 0;
//   margin-top: 48px;
// `;

// excluded (to use, insert under <FooterWrapper> * uncomment import Img...)
// <Art>
//   <Img
//     fluid={data.art_pot.childImageSharp.fluid}
//     style={{ width: 200, maxWidth: '100%', marginBottom: 0 }}
//   />
// </Art>

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;
  border-bottom: ${props => props.theme.color.white.lighter} 0.15em solid;
  transition: 0.5s;

  &:hover {
    color: ${props => props.theme.color.white.active};
    text-decoration: none;
    border-bottom: ${props => props.theme.color.white.light} 0.15em solid;
  }
`;

export default Footer;
