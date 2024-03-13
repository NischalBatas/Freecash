"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { CaretDownIcon, Cross2Icon } from "@radix-ui/react-icons";
import {
  AlertDialog,
  Button,
  Card,
  DropdownMenu,
  Flex,
  Popover,
} from "@radix-ui/themes";
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Image from "next/image";
import React from "react";
import "../app/navbar.css";
import * as Form from "@radix-ui/react-form";
import * as Tabs from '@radix-ui/react-tabs';
import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { RiMacbookLine } from "react-icons/ri";
import { ImTablet } from "react-icons/im";
import { FaBars } from "react-icons/fa6";
import classNames from 'classnames';
import Sidebar from "./Sidebar";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 w-full bg-anovanavbar flex justify-between items-center py-3 px-4">
      <div className="navbar_group1 flex gap-4">
        <div className="navbar_group1_subgroup_1 flex items-center gap-2">
          <FaBars className="text-white" />
        

 



          <Image
            className="navbar-logo"
            width={20}
            height={20}
            alt="logo"
            src="/images/logo.png"
          />
          <span className="ml-2 text-green-600 font-bold hidden md:block">
            FreeCash
          </span>
        </div>
        <div className="navbar_group1_subgroup_2 flex items-center ">
          <form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-which sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <button type="submit">
                  <svg className="text-gray-500"
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-1 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-anova1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search ....."
                required
              />
            </div>
          </form>
        </div>
      </div>

      <div className="navbar_group2 flex gap-2">
        <div className="hidden md:block ">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button className="windows-group">
                Windows
                <CaretDownIcon width="12" height="12" />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content variant="soft" color="indigo">
              <DropdownMenu.Item shortcut="⌘ E"><FaMobileAlt />Andriod</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ D"><FaApple /> iPhone</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ E"><ImTablet />iPad</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ D"><FaWindows className="mr-2" /> Windows</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ D"><RiMacbookLine />Mac</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>

        <div className="signin-group">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button>Sign In</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContent bg-anova3 text-white">
                {/* <Dialog.Title className="DialogTitle">Sign In</Dialog.Title> */}
                {/* <Dialog.Description className="DialogDescription">
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description> */}
        <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger font-semibold text-sm" value="tab1">
        Sign In
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger font-semibold text-sm" value="tab2">
        Sign Up
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
   
    <Form.Root>
                  <Form.Field className="FormField" name="email">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                      }}
                    >
                      <Form.Label className="FormLabel text-anovatext1">
                        Email
                      </Form.Label>
                      <Form.Message
                        className="FormMessage"
                        match="valueMissing"
                      >
                        Please enter your email
                      </Form.Message>
                      <Form.Message
                        className="FormMessage"
                        match="typeMismatch"
                      >
                        Please provide a valid email
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <input className="Input" type="email" required />
                    </Form.Control>
                  </Form.Field>

                  <Form.Field className="FormField" name="password">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                      }}
                    >
                      <Form.Label className="FormLabel text-anovatext1">
                        password
                      </Form.Label>
                      <Form.Message
                        className="FormMessage"
                        match="valueMissing"
                      >
                        Please enter your password
                      </Form.Message>
                      <Form.Message
                        className="FormMessage"
                        match="typeMismatch"
                      >
                        Please provide a valid password
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <input className="Input" type="password" required />
                    </Form.Control>
                  </Form.Field>
                  <Link className="text-sm" href="/">
                    Forgot your password?
                  </Link>
                  <Form.Submit asChild>
                    <button
                      className="w-full text-center bg-green-600 text-white hover:bg-green-800 px-2 py-2 rounded"
                      style={{ marginTop: 10 }}
                    >
                      Sign In
                    </button>
                  </Form.Submit>
                </Form.Root>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="tab2">

    <Form.Root>
                  <Form.Field className="FormField" name="text">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                      }}
                    >
                      <Form.Label className="FormLabel text-anovatext1">
                        Fullname
                      </Form.Label>
                      <Form.Message
                        className="FormMessage"
                        match="valueMissing"
                      >
                        Please enter your fullname
                      </Form.Message>
                      <Form.Message
                        className="FormMessage"
                        match="typeMismatch"
                      >
                        Please provide a valid fullname
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <input className="Input" type="text" required />
                    </Form.Control>
                  </Form.Field>

                  <Form.Field className="FormField" name="text">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                      }}
                    >
                      <Form.Label className="FormLabel text-anovatext1">
                        Email
                      </Form.Label>
                      <Form.Message
                        className="FormMessage"
                        match="valueMissing"
                      >
                        Please enter your email
                      </Form.Message>
                      <Form.Message
                        className="FormMessage"
                        match="typeMismatch"
                      >
                        Please provide a valid email
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <input className="Input" type="email" required />
                    </Form.Control>
                  </Form.Field>

                  <Form.Field className="FormField" name="password">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                      }}
                    >
                      <Form.Label className="FormLabel text-anovatext1">
                        password
                      </Form.Label>
                      <Form.Message
                        className="FormMessage"
                        match="valueMissing"
                      >
                        Please enter your password
                      </Form.Message>
                      <Form.Message
                        className="FormMessage"
                        match="typeMismatch"
                      >
                        Please provide a valid password
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <input className="Input" type="password" required />
                    </Form.Control>
                  </Form.Field>
                  <Link className="text-sm" href="/">
                    Forgot your password?
                  </Link>
                  <Form.Submit asChild>
                    <button
                      className="w-full text-center bg-green-600 text-white hover:bg-green-800 px-2 py-2 rounded"
                      style={{ marginTop: 10 }}
                    >
                      Register
                    </button>
                  </Form.Submit>
                </Form.Root>
    </Tabs.Content>
  </Tabs.Root>




                <div className="other-sign-method mt-5 mb-4">
                  <div className="other-sign-method-title">
                    <span className="text-sm">Or sign in with</span>
                  </div>
                  <div className="other-sign-method-auth mt-2">
                    <div>
                      <button
                        type="submit"
                        className="other-sign-method-auth-1 w-full mb-3 flex bg-white hover:bg-gray-200 p-2 rounded justify-center items-center"
                      >
                        <Image
                          width={20}
                          height={10}
                          src="/images/google.png"
                        />
                        <span className="ml-2 font-medium text-anova1 text-sm">
                          Continue with Google
                        </span>
                      </button>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="other-sign-method-auth-2 w-full flex bg-blue-800 hover:bg-blue-700 p-2 rounded justify-center items-center"
                      >
                        <Image width={8} height={10} src="/images/face.png" />
                        <span className="ml-2 font-medium text-white text-sm">
                          Continue with Facebook
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="other-term-condition text-anovatext2">
                    By signing in, you are agreeing to our Terms of Service and
                    Privacy Policy.
                  </span>
                </div>

                <Dialog.Close asChild>
                  <Button className="IconButton" aria-label="Close">
                    <Cross2Icon />
                  </Button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;
