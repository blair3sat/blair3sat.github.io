import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Nav from "../components/nav.js";
import { Button } from "../components/Button";

const sponsors = [
  {
    name: "Maryland Space Business Roundtable",
    tier: "Silver",
    image: "/msbr_orig-324c71370056ff1e6a0a34f3659dcafd.png",
    desc:
      "Thanks to MSBR we were able to purchase new electronics for development.",
    site: "http://www.mdspace.org/"
  },
  {
    name: "MBHS Magnet Foundation",
    tier: "Bronze",
    image: "/magnet-7a0f6626331d50517d6be2df2d051931.png",
    desc:
      "Thanks to the MBHS Magnet Foundation we could attend the 2019 SmallSat conference.",
    color: "#701",
    site: "https://mbhs.edu/departments/magnet/"
  },
  {
    name: "Overleaf",
    tier: "Steel",
    image: "/overleaf-9616755adf07d8ee303b89a18d9598ba.png",
    desc:
      "Thanks to MSBR we were able to purchase new electronics for development.",
    site: "https://www.overleaf.com/"
  },
  {
    name: "Nyrad",
    tier: "Steel",
    image: "/nyrad-306a2879821e4a3f36eae64972c2c670.png",
    desc:
      "Thanks to NYRAD, we have bolstered our CSLI application with letters of support and established connections within the aerospace community.",
    site: "https://nyradspace.com/"
  },
  {
    name: "Micro Aerospace Solultions",
    tier: "Support",
    image: "/MicroALogo.png",
    desc:
      "Thanks to Micro Aerospace we were able to strengthen our CSLI application with letters of support, and have a greater understanding of the aerospace industry as a whole.",
    site: "https://www.micro-a.net/"
  }
];

const tierInfo = [
  [
    "gold",
    {
      color: "#dFb700",
      benefits: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor"
      ],
      price: 300
    }
  ],
  [
    "gold",
    {
      color: "#dFb700",
      benefits: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor"
      ],
      price: 300
    }
  ],
  [
    "gold",
    {
      color: "#dFb700",
      benefits: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor"
      ],
      price: 300
    }
  ],
  [
    "gold",
    {
      color: "#dFb700",
      benefits: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor"
      ],
      price: 300
    }
  ],
  [
    "gold",
    {
      color: "#dFb700",
      benefits: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor"
      ],
      price: 300
    }
  ],
  [
    "gold",
    {
      color: "#dFb700",
      benefits: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor"
      ],
      price: 300
    }
  ],
  [
    "gold",
    {
      color: "#dFb700",
      benefits: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor"
      ],
      price: 300
    }
  ]
];

const topTiers = [0, 1, 2];

const SupportContainer = styled.section`
  min-height: 100vh;
  background-color: #f4f4f4;
  overflow: auto;

  .section-title {
    font-size: 3em;
    margin: 2rem auto 1rem auto;
    text-align: center;
  }
  .sponsor-list {
    overflow: auto visible;
    display: flex;
    padding: 3rem 1em;
    width: 100%;
    margin: auto;
    box-sizing: border-box;

    scroll-snap-type: x mandatory;

    & > *:first-child {
      margin-left: auto;
    }
    & > *:last-child {
      margin-right: auto;
    }

    ::-webkit-scrollbar {
      display: none;
    }
  }
  .support-us {
    width: 90%;
    margin: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  }

  .top-pricing {
    display: flex;
    width: 70%;
    margin: auto;
    justify-content: center;
    align-items: center;
  }
`;

const SponsorCard = styled.div`
  flex: 0 0 18em;
  margin: 1em;
  /* border: 1.15px solid rgba(0, 0, 0, 0.15); */
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  color: rgba(0, 0, 0, 0.75);
  background-color: #fff;
  box-shadow: 0px 30px 30px -30px rgba(0, 0, 0, 0.25);

  transition: box-shadow 0.25s ease-in-out, border 0.25s ease-in-out,
    transform 0.25s ease-in-out;
  cursor: pointer;

  scroll-snap-align: start;

  :hover {
    box-shadow: 0px 30px 30px -25px rgba(0, 0, 0, 0.25);

    /* border: 1.15px solid rgba(0, 0, 0, 0.1); */
    transform: scale(1.02);
  }

  .card-content {
    padding: 1.5em;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .top-row {
  }

  .name {
    font-size: 1.1em;
    color: rgba(0, 0, 0, 0.95);
    font-weight: 600;
  }

  .desc {
    flex-grow: 1;
    padding-top: 1.5em;
  }

  .visit {
    justify-self: flex-end;
    padding: 1.5em;
    /* padding-top: 1em;/ */
  }
`;
const SponsorLogo = styled.div`
	min-height: 10em;
	padding: 1em;
	/* background-color: ${p => p.color}; */
	position: relative;

	.logo {
		left: 1em;
		top: 1em;
		right: 1em;
		bottom: 1em;

		position: absolute;

		background: url(${p => p.src});
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
`;
const Sponsor = ({
  sponsor: { name, tier, image, desc, color = "#fff", site }
}) => {
  return (
    <SponsorCard>
      <SponsorLogo color={color} src={image}>
        <div className="logo" />
      </SponsorLogo>
      <div className="card-content">
        <div className="top-row">
          <div className="name">{name}</div>
          <div className="tier">{tier}</div>
        </div>
        <div className="desc">{desc}</div>
      </div>
      {/* <div>
					<a href={site}>Visit Site</a>
				</div> */}
    </SponsorCard>
  );
};

const TierContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 30%;

  margin: 2em;
  padding: 2em;

  background-color: #fff;
  color: #333;

  align-items: center;

  box-shadow: 0px 30px 35px -30px rgba(0, 0, 0, 0.15);

  hr {
    margin: 0.5em auto;
    border: none;
    box-shadow: none;
    width: 100%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.075);
  }

  .tier-name {
    text-transform: capitalize;
    font-size: 1.5em;
    margin: 0.5em 0em;
  }
  .pricing {
    font-size: 2em;
    margin: 0.5em 0em;

    :before {
      content: "$";
      font-size: 0.65em;
      vertical-align: top;
    }
  }
  .benefits {
    list-style-type: none;
    padding: 0px;
  }
  .callToAction {
  }
`;
const TierCard = styled(TierContainer)`
  flex-direction: column;

  button {
    margin: 1em 0em 0em 0em;
    width: 100%;
  }

  :nth-child(1) {
    order: 2;
  }

  :nth-child(2) {
    order: 1;
  }
  :nth-child(3) {
    order: calc(100%);
  }
`;
const TierRow = styled(TierContainer)`
  flex-direction: row;
  width: 80%;
  margin: 2em auto;
  padding: 1em 4em;
`;

const Benefit = styled.li``;

export default () => {
  return (
    <>
      <Nav />
      <SupportContainer>
        <h1 className="section-title">Our sponsors</h1>
        <div className="sponsor-list">
          {sponsors.map(s => (
            <Sponsor sponsor={s} />
          ))}
        </div>
        <div id="support" className="support-us-container">
          <h1 className="section-title">Sponsor us</h1>
          <div className="top-pricing">
            {topTiers
              .map(a => tierInfo[a])
              .map(([name, info]) => (
                <TierCard>
                  <h3 className="tier-name">{name}</h3>
                  <hr />
                  <h2 className="pricing">{info.price}</h2>
                  <hr />
                  <ul className="benefits">
                    {info.benefits.map(b => (
                      <Benefit>{b}</Benefit>
                    ))}
                  </ul>
                  <hr />
                  <Button
                    color="white"
                    background="#090"
                    className="call-to-action"
                  >
                    Support us
                  </Button>
                </TierCard>
              ))}
          </div>
          <div className="all-pricing">
            {tierInfo.map(([name, info]) => (
              <TierRow>
                <h3 className="tier-name">{name}</h3>
                <h2 className="pricing">{info.price}</h2>
                <ul className="benefits">
                  {info.benefits.map(b => (
                    <Benefit>{b}</Benefit>
                  ))}
                </ul>
                <Button
                  color="white"
                  background="#090"
                  className="call-to-action"
                >
                  Support us
                </Button>
              </TierRow>
            ))}
          </div>
        </div>
      </SupportContainer>
    </>
  );
};
