import { generateClasses } from "@formkit/themes";

const text = {
  label: "block mb-1 font-bold",
  inner:
    "border-2 border-primary rounded-lg focus-within:rounded-none mb-1 overflow-hidden focus-within:border-primary-bright duration-500",
  input:
    "w-full h-10 px-3 border-none text-text placeholder-slate-400 bg-transparent",
};

const button = {
  input:
    "py-3 px-8 rounded-full border-2 border-primary hover:bg-primary focus:bg-primary text-text duration-200 disabled:bg-transparent disabled:text-primary",
};

export default {
  config: {
    classes: generateClasses({
      global: {
        outer: "mb-5 formkit-disabled:opacity-50",
        help: "text-xs text-gray-500",
        messages: "list-none p-0 mt-1 mb-0",
        message: "text-red-500 mb-1 text-xs",
      },
      text: text,
      email: text,
      textarea: {
        ...text,
        input:
          text.input +
          " min-h-[8rem] block w-full h-32 py-2 border-none placeholder-gray-400 focus:shadow-outline",
      },
      submit: {
        ...button,
        outer: "mb-0 mt-10",
        wrapper: "flex justify-center",
        input: button.input + " [transition:padding width 2s]",
      },
    }),
  },
};
