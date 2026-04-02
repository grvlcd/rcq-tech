"use client";

import { useEffect, useRef } from "react";
import "@n8n/chat/style.css";
import "./n8n-chat-theme.css";

export function N8nChat() {
  const startedRef = useRef(false);

  const webhookUrl = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL;
  if (!webhookUrl) return;

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;

    void import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl,
        mode: isMobileViewport ? "window" : "fullscreen",
        showWelcomeScreen: true,
        initialMessages: [
          "Hi — welcome to RCQ Tech.",
          "What are you trying to build or automate?",
        ],
        i18n: {
          en: {
            title: "RCQ Tech",
            subtitle: "AI workflows, automation, and custom apps — ask anything.",
            footer: "",
            getStarted: "New conversation",
            inputPlaceholder: "Type your message…",
            closeButtonTooltip: "Close",
          },
        },
        metadata: {
          source: "rcq-tech-site",
        },
      });
    });
  }, []);

  return <div id="n8n-chat" />;
}

