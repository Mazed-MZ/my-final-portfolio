"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Dropdown,
} from "@nextui-org/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TransitionLink from "./TransitionLink";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">MAZED MOHAMMED</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <TransitionLink href="/" lebel="Home" />
        </NavbarItem>
        <Dropdown>
          <NavbarItem isActive>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="lg"
                variant="light"
              >
                Services{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ color: "#ffffff" }}
                />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="frontend"
              description="Technology: React, HTML, CSS, JavaScript, Tailwind CSS, Next JS, Framer Motion, Parallax, GSAP, TypeScript."
            >
              <TransitionLink href="frontend" lebel="Frontend Development" />
            </DropdownItem>
            <DropdownItem
              key="backend"
              description="Technology: Node JS, Express JS, Cors, Mongo DB"
            >
              <TransitionLink href="backend" lebel="Backend Development" />
            </DropdownItem>
            <DropdownItem
              key="authsecure"
              description="Technology: Firebase, JSON Web Token, Regular Expression"
            >
              <TransitionLink href="authsecure" lebel="Secured Authentication" />
            </DropdownItem>
            <DropdownItem
              key="payment"
              description="Technology: SSL Commerze, Bkash, Nagad, Stripe, Paypal"
            >
              <TransitionLink href="payment" lebel="Payment Gateway System" />
            </DropdownItem>
            <DropdownItem
              key="services"
            >
              <TransitionLink href="services" lebel="See all services" />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <TransitionLink href="about" lebel="About me" />
        </NavbarItem>
        <NavbarItem isActive>
          <TransitionLink href="skills" lebel="Skill" />
        </NavbarItem>
        <NavbarItem isActive>
          <TransitionLink href="projects" lebel="Projects" />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="warning"
            href="#"
            variant="flat"
            className="font-bold"
          >
            <TransitionLink href="contact" lebel="Contact me" />
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* ------>>>> Mobile device <<<<----- */}
      <NavbarMenu>
        <NavbarMenuItem>
          <TransitionLink href="/" lebel="Home" />
        </NavbarMenuItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                Services{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ color: "#ffffff" }}
                />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="frontend"
              description="Technology: React, HTML, CSS, JavaScript, Tailwind CSS, Next JS, Framer Motion, Parallax, GSAP, TypeScript"
            >
              <TransitionLink href="frontend" lebel="Frontend Development" />
            </DropdownItem>
            <DropdownItem
              key="backend"
              description="Technology: Node JS, Express JS, Cors, Mongo DB"
            >
              <TransitionLink href="backend" lebel="Backend Development" />
            </DropdownItem>
            <DropdownItem
              key="authsecure"
              description="Technology: Firebase, JSON Web Token, Regular Expression"
            >
              <TransitionLink href="authsecure" lebel="Secured Authentication" />
            </DropdownItem>
            <DropdownItem
              key="payment"
              description="Technology: SSL Commerze, Bkash, Nagad, Stripe, Paypal"
            >
              <TransitionLink href="payment" lebel="Payment Gateway Integration" />
            </DropdownItem>
            <DropdownItem
              key="services"
            >
              <TransitionLink href="services" lebel="See All Services" />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarMenuItem>
          <TransitionLink href="about" lebel="About me" />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <TransitionLink href="skills" lebel="Skills" />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <TransitionLink href="projects" lebel="Projects" />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <TransitionLink href="contact" lebel="Contact me" />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
