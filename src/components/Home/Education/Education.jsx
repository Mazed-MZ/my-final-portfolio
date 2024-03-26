"use client";

import * as React from "react";
import Stepper from "@mui/joy/Stepper";
import Step, { stepClasses } from "@mui/joy/Step";
import StepIndicator, { stepIndicatorClasses } from "@mui/joy/StepIndicator";
import Typography, { typographyClasses } from "@mui/joy/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Education() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="md:pl-80 mt-12 bg-gradient-to-b from-black to-green-800">
      <div className="md:grid md:grid-cols-2">
        <Stepper
          orientation="vertical"
          sx={{ m: 5,
            "--Stepper-verticalGap": "2.5rem",
            "--StepIndicator-size": "2.5rem",
            "--Step-gap": "1rem",
            "--Step-connectorInset": "0.5rem",
            "--Step-connectorRadius": "1rem",
            "--Step-connectorThickness": "4px",
            "--joy-palette-success-solidBg": "var(--joy-palette-success-400)",
            [`& .${stepClasses.completed}`]: {
              "&::after": { bgcolor: "success.solidBg" },
            },
            [`& .${stepClasses.active}`]: {
              [`& .${stepIndicatorClasses.root}`]: {
                border: "4px solid",
                borderColor: "#fff",
                boxShadow: (theme) =>
                  `0 0 0 1px ${theme.vars.palette.primary[500]}`,
              },
            },
            [`& .${stepClasses.disabled} *`]: {
              color: "neutral.softDisabledColor",
            },
            [`& .${typographyClasses["title-sm"]}`]: {
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: "10px",
            },
          }}
        >
          <Step
            disabled
            indicator={
              <StepIndicator data-aos="zoom-in" variant="solid" color="success">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  style={{ color: "#050000" }}
                />
              </StepIndicator>
            }
          >
            <div data-aos="fade-right">
              <Typography level="title-sm">2020 - 2021</Typography>
              FRONTEND WEB DEVELOPMENT <br />
              <Typography level="title-sm">Programming HERO, Dhaka</Typography>
            </div>
          </Step>
          <Step
            disabled
            indicator={
              <StepIndicator data-aos="zoom-in" variant="solid" color="success">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  style={{ color: "#050000" }}
                />
              </StepIndicator>
            }
          >
            <div data-aos="fade-right">
              <Typography level="title-sm">2019 - 2020</Typography>
              PROFESSIONAL SEARCH ENGINE OPTIMIZATION <br />
              <Typography level="title-sm">
                Creative IT Institute, Dhaka
              </Typography>
            </div>
          </Step>
          <Step
            disabled
            indicator={
              <StepIndicator data-aos="zoom-in" variant="solid" color="success">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  style={{ color: "#050000" }}
                />
              </StepIndicator>
            }
          >
            <div data-aos="fade-right">
              <Typography level="title-sm">2017 - 2018</Typography>
              BACHELOR OF SCIENCE <br />
              <Typography level="title-sm">
                Jagannath University, Dhaka
              </Typography>
            </div>
          </Step>
          <Step
            disabled
            indicator={
              <StepIndicator data-aos="zoom-in" variant="solid" color="success">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  style={{ color: "#050000" }}
                />
              </StepIndicator>
            }
          >
            <div data-aos="fade-right">
              <Typography level="title-sm">2017</Typography>
              HSC <br />
              <Typography level="title-sm">
                Ispahani Public School & College, Cumilla
              </Typography>
            </div>
          </Step>
          <Step
            disabled
            indicator={
              <StepIndicator data-aos="zoom-in" variant="solid" color="success">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  style={{ color: "#050000" }}
                />
              </StepIndicator>
            }
          >
            <div data-aos="fade-right">
              <Typography level="title-sm">2015</Typography>
              SSC <br />
              <Typography level="title-sm">
                Cumilla Cantonment High School, Cumilla
              </Typography>
            </div>
          </Step>
        </Stepper>

          <div className="" data-aos="fade-down">
            <Image
              src={"https://i.ibb.co/Cz89Yz5/graduation.png"}
              alt="image"
              width={500}
              height={500}
            />
          </div>
      </div>
    </div>
  );
}
