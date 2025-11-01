  "use client";

  import { Search, Mail, User, Phone, MessageSquareText } from "lucide-react";
  import { useState } from "react";

  interface InputWithIconProps {
    type?: string;
    placeholder?: string;
    icon?: "search" | "mail" | "user" | "phone" | "message";
    multiline?: boolean;
  }

  export default function InputWithIcon({
    type = "text",
    placeholder = "Enter text...",
    icon = "search",
    multiline = false,
  }: InputWithIconProps) {
    const [focused, setFocused] = useState(false);

    const Icon =
      icon === "mail"
        ? Mail
        : icon === "user"
        ? User
        : icon === "phone"
        ? Phone
        : icon === "message"
        ? MessageSquareText
        : Search;

    return (
      <div
        className={`relative flex  w-full max-w-4xl rounded border px-4 py-3 transition-all duration-300 ${multiline ? "items-start" : "items-center"} ${
          focused
            ? "border-brandBlue shadow-[0_0_12px_rgba(37,99,235,0.4)]"
            : "border-gray-300"
        } bg-white`}
      >
        <Icon
          className={`w-5 h-5 transition-colors ${
            focused ? "text-brandBlue" : "text-gray-400"
          }`}
        />
        {multiline ? (
          <textarea
            placeholder={placeholder}
            className="flex-1 bg-transparent outline-none px-3 text-gray-800 dark:text-gray-100 placeholder-gray-400 resize-none"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            rows={4}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className="flex-1 bg-transparent outline-none px-3 text-gray-800 dark:text-gray-100 placeholder-gray-400"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        )}
      </div>
    );
  }
