import React from "react";
import axios from "axios";
import "./faq.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

const NewFaq = () => {
  const [faqData, setFaqData] = useState([]);
  let firstArr = [];
  let secondArr = [];

  useEffect(() => {
    axios.get(`http://localhost:8080/accordiandata/`).then((res) => {
      setFaqData(res.data);
    });
  }, []);

  for (let i = 0; i < Math.ceil(faqData.length / 2); i++) {
    firstArr.push(faqData[i]);
  }

  for (let i = Math.floor(faqData.length / 2); i < faqData.length; i++) {
    secondArr.push(faqData[i]);
  }

  // console.log(firstArr);
  // console.log(secondArr);
  return (
    <section className="Faq">
      <div className="container">
        <div class="center_headings text-center pb-5">
          <h5 class="blue_text">FAQ</h5>
          <h2 class="Scroll_tab_two_heading faq_heads pt-3">
            Have questions? Great! We love answering.
          </h2>
        </div>
        <div className="Accordian_wrapper">
          <div className="">
            {firstArr.map((e) => (
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <h4 className="accordion_heading"> {e.accTitle}</h4>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {" "}
                    <p className="Accordian_text">{e.accordiandetails}</p>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <div className="">
            {secondArr.map((e) => (
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <h4 className="accordion_heading"> {e.accTitle}</h4>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {" "}
                    <p className="Accordian_text">{e.accordiandetails}</p>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          {/* {faqData.map((e) => (
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {e.accTitle}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{e.accordiandetails}</AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default NewFaq;
