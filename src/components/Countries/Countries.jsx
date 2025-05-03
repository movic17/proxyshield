import React from "react";
import { Tabs, Tab, Container, ListGroup } from "react-bootstrap";

const continents = {
  Africa: [
    { name: "Nigeria", flag: "https://flagcdn.com/w40/ng.png" },
    { name: "Kenya", flag: "https://flagcdn.com/w40/ke.png" },
    { name: "South Africa", flag: "https://flagcdn.com/w40/za.png" },
    { name: "Egypt", flag: "https://flagcdn.com/w40/eg.png" },
    { name: "Morocco", flag: "https://flagcdn.com/w40/ma.png" },
    { name: "Ghana", flag: "https://flagcdn.com/w40/gh.png" },
    { name: "Ethiopia", flag: "https://flagcdn.com/w40/et.png" },
    { name: "Angola", flag: "https://flagcdn.com/w40/ao.png" },
    { name: "Cameroon", flag: "https://flagcdn.com/w40/cm.png" },
    { name: "Senegal", flag: "https://flagcdn.com/w40/sn.png" },
  ],
  Europe: [
    { name: "France", flag: "https://flagcdn.com/w40/fr.png" },
    { name: "Germany", flag: "https://flagcdn.com/w40/de.png" },
    { name: "United Kingdom", flag: "https://flagcdn.com/w40/gb.png" },
    { name: "Spain", flag: "https://flagcdn.com/w40/es.png" },
    { name: "Italy", flag: "https://flagcdn.com/w40/it.png" },
    { name: "Netherlands", flag: "https://flagcdn.com/w40/nl.png" },
    { name: "Belgium", flag: "https://flagcdn.com/w40/be.png" },
    { name: "Sweden", flag: "https://flagcdn.com/w40/se.png" },
    { name: "Poland", flag: "https://flagcdn.com/w40/pl.png" },
    { name: "Greece", flag: "https://flagcdn.com/w40/gr.png" },
  ],
  Asia: [
    { name: "China", flag: "https://flagcdn.com/w40/cn.png" },
    { name: "India", flag: "https://flagcdn.com/w40/in.png" },
    { name: "Japan", flag: "https://flagcdn.com/w40/jp.png" },
    { name: "South Korea", flag: "https://flagcdn.com/w40/kr.png" },
    { name: "Indonesia", flag: "https://flagcdn.com/w40/id.png" },
    { name: "Thailand", flag: "https://flagcdn.com/w40/th.png" },
    { name: "Vietnam", flag: "https://flagcdn.com/w40/vn.png" },
    { name: "Malaysia", flag: "https://flagcdn.com/w40/my.png" },
    { name: "Pakistan", flag: "https://flagcdn.com/w40/pk.png" },
    { name: "Philippines", flag: "https://flagcdn.com/w40/ph.png" },
  ],
  Americas: [
    { name: "United States", flag: "https://flagcdn.com/w40/us.png" },
    { name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
    { name: "Mexico", flag: "https://flagcdn.com/w40/mx.png" },
    { name: "Brazil", flag: "https://flagcdn.com/w40/br.png" },
    { name: "Argentina", flag: "https://flagcdn.com/w40/ar.png" },
    { name: "Chile", flag: "https://flagcdn.com/w40/cl.png" },
    { name: "Colombia", flag: "https://flagcdn.com/w40/co.png" },
    { name: "Peru", flag: "https://flagcdn.com/w40/pe.png" },
    { name: "Venezuela", flag: "https://flagcdn.com/w40/ve.png" },
    { name: "Ecuador", flag: "https://flagcdn.com/w40/ec.png" },
  ],
};

const Countries = () => {
  return (
    <Container className="mt-4 py-5">
      <div className="p-5">
        <h2 className="text-center" style={{ color: "#6200ea" }}>
          Access PIA’s Worldwide Servers from Anywhere
        </h2>
        <p className="text-center">
          Connect to any of our global servers easily to boost your digital
          privacy. PIA can work 24/7 with unlimited bandwidth.
        </p>
      </div>
      <Tabs
        defaultActiveKey="Africa"
        fill
        variant="underline"
        id="continent-tabs"
        className="mb-3"
      >
        {Object.entries(continents).map(([continent, countries]) => (
          <Tab eventKey={continent} title={continent} key={continent}>
            <ListGroup>
              {countries.map((country, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex align-items-center"
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    style={{
                      width: "30px",
                      height: "20px",
                      marginRight: "10px",
                    }}
                  />
                  {country.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
};

export default Countries;
