"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { Avatar, Box, ScrollArea, Text } from "@radix-ui/themes";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import "../../static/css/chat.css";
import Image from "next/image";
import { MdEmojiEmotions } from "react-icons/md";
import { MdOutlineShare } from "react-icons/md";
import { FiSend } from "react-icons/fi";

const Chat = () => {
  return (
    <div
      className="fixed chat-main bg-anova3 h-screen py-2"
      style={{ width: "342px" }}
    >
      <div className="chat-main-group1">
        <div className="chat-main-group1-userstatus px-2 flex gap-2 items-center text-anovatext1">
          <FaUsers />
          <span className="flex items-center">
            <GoDotFill className="text-green-400" />
            1088
          </span>
        </div>
        <div className="chat-main-group1-switch  mt-2">
          <Tabs.Root defaultValue="general">
            <Tabs.List className="bg-anova1 overflow-hidden rounded-full mx-2 grid grid-cols-2 text-center justify-end">
              <Tabs.Trigger
                className="TabsTrigger_chat p-2 font-medium col-span-1 text-anovatext1"
                value="general"
              >
                General
              </Tabs.Trigger>
              <Tabs.Trigger
                className="TabsTrigger_chat p-2 font-medium col-span-1 text-anovatext1"
                value="help"
              >
                Help
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content
              className="Main-conetnts bg-anova2 p-2 mt-4"
              value="general"
            >
              <ScrollArea
                className="ScrollArea"
                type="always"
                scrollbars="vertical"
              >
                <div className="chat-box-main mb-2">
                  <div className="chat-box-main_daytime flex justify-end">
                    <span className="text-anovatext1 text-xs">04:00 AM</span>
                  </div>
                  <div className="chat-box-main_chatCollection flex flex-col mt-2">
                    {/* user list chat 1 */}
                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c1.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>Use the fallback prop to modify </span>
                        </div>
                      </div>
                    </div>

                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c2.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>Use the fallback prop to modify </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="chat-box-main mb-2">
                  <div className="chat-box-main_daytime flex justify-end">
                    <span className="text-anovatext1 text-xs">04:00 AM</span>
                  </div>
                  <div className="chat-box-main_chatCollection flex flex-col mt-2">
                    {/* user list chat 1 */}
                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c3.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>
                            Use the fallback prop to replace the file{" "}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c4.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>
                            Use the fallback prop to replace the file{" "}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c1.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>
                            Use the fallback prop to replace the file{" "}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c3.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>
                            Use the fallback prop to replace the file{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c2.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>Use the fallback prop to modify </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-box-main mb-2">
                  <div className="chat-box-main_daytime flex justify-end">
                    <span className="text-anovatext1 text-xs">04:00 AM</span>
                  </div>
                  <div className="chat-box-main_chatCollection flex flex-col mt-2">
                    {/* user list chat 1 */}
                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c1.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>Use the fallback prop to modify </span>
                        </div>
                      </div>
                    </div>

                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c2.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>Use the fallback prop to modify </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="chat-box-main mb-2">
                  <div className="chat-box-main_daytime flex justify-end">
                    <span className="text-anovatext1 text-xs">04:00 AM</span>
                  </div>
                  <div className="chat-box-main_chatCollection flex flex-col mt-2">
                    {/* user list chat 1 */}
                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c3.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>
                            Use the fallback prop to replace the file{" "}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c4.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>
                            Use the fallback prop to replace the file{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Authenticated User or You */}
                    <div className="chat-box-main_chatCollection_user flex flex-row-reverse items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c5.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              You
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>
                            Use the fallback prop to replace the file{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c1.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>
                            Use the fallback prop to replace the file{" "}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c3.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>
                            Use the fallback prop to replace the file{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c2.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>Use the fallback prop to modify </span>
                        </div>
                      </div>
                    </div>

                    {/* Authenticated User or You */}
                    <div className="chat-box-main_chatCollection_user flex flex-row-reverse items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c5.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              You
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>
                            Use the fallback prop to replace the file{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>

              <div className="chat-writing-box mt-1">
                <form className="flex items-center">
                  <input
                    className="text-xs bg-anova5 w-72 px-1 py-2 rounded"
                    placeholder="Type your messages here"
                  />
                  <button className="bg-green-600 ml-2 p-2 rounded">
                    <FiSend />
                  </button>
                </form>
              </div>
            </Tabs.Content>

            <Tabs.Content className="bg-anova2 p-2 mt-4" value="help">
              <ScrollArea
                className="ScrollArea"
                type="always"
                scrollbars="vertical"
              >
                <div className="chat-box-main mb-2">
                  <div className="chat-box-main_daytime flex justify-end">
                    <span className="text-anovatext1 text-xs">04:00 AM</span>
                  </div>
                  <div className="chat-box-main_chatCollection flex flex-col mt-2">
                    {/* user list chat 1 */}
                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c3.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>
                            Use the fallback prop to replace the file{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Authenticated User or You */}
                    <div className="chat-box-main_chatCollection_user flex flex-row-reverse items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c5.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              You
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>
                            Use the fallback prop to replace the file{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c4.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>
                            Use the fallback prop to replace the file{" "}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c1.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>
                            Use the fallback prop to replace the file{" "}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c3.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>
                            Use the fallback prop to replace the file{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="chat-box-main_chatCollection_user flex items-center gap-3 mb-2 text-xs">
                      <div className="chat-box-main_chatCollection_user_image">
                        <Avatar
                          radius="full"
                          src="/images/chat/c2.jpg"
                          fallback="A"
                        />
                      </div>
                      <div className="chat-box-main_chatCollection_user_messagebox w-full rounded-lg bg-anova6 text-anovatext1  px-2 py-2">
                        <div className="chat-box-main_chatCollection_user_messagebox-details flex justify-between mb-1">
                          <div className="chat-box-main_chatCollection_user_messagebox-details-name">
                            <span className="text-white font-semibold">
                              Alex Larry
                            </span>
                          </div>

                          <div className="chat-box-main_chatCollection_user_messagebox-details-others flex gap-2 items-center">
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-time">
                              <span>03:21 am</span>
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-emoji">
                              <MdEmojiEmotions />
                            </div>
                            <div className="chat-box-main_chatCollection_user_messagebox-details-others-share">
                              <MdOutlineShare />
                            </div>
                          </div>
                        </div>
                        <div className="chat-box-main_chatCollection_user_messagebox-chat">
                          <span>Use the fallback prop to modify </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>

              <div className="chat-writing-box mt-1">
                <form className="flex items-center">
                  <input
                    className="text-xs bg-anova5 w-72 px-1 py-2 rounded"
                    placeholder="Type your messages here"
                  />
                  <button className="bg-green-600 ml-2 p-2 rounded">
                    <FiSend />
                  </button>
                </form>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
};

export default Chat;
