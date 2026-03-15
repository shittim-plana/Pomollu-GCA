(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode('/* Use layers to avoid style conflicts */\n*, ::before, ::after {\n    --tw-border-spacing-x: 0;\n    --tw-border-spacing-y: 0;\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    --tw-pan-x:  ;\n    --tw-pan-y:  ;\n    --tw-pinch-zoom:  ;\n    --tw-scroll-snap-strictness: proximity;\n    --tw-gradient-from-position:  ;\n    --tw-gradient-via-position:  ;\n    --tw-gradient-to-position:  ;\n    --tw-ordinal:  ;\n    --tw-slashed-zero:  ;\n    --tw-numeric-figure:  ;\n    --tw-numeric-spacing:  ;\n    --tw-numeric-fraction:  ;\n    --tw-ring-inset:  ;\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgb(59 130 246 / 0.5);\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    --tw-blur:  ;\n    --tw-brightness:  ;\n    --tw-contrast:  ;\n    --tw-grayscale:  ;\n    --tw-hue-rotate:  ;\n    --tw-invert:  ;\n    --tw-saturate:  ;\n    --tw-sepia:  ;\n    --tw-drop-shadow:  ;\n    --tw-backdrop-blur:  ;\n    --tw-backdrop-brightness:  ;\n    --tw-backdrop-contrast:  ;\n    --tw-backdrop-grayscale:  ;\n    --tw-backdrop-hue-rotate:  ;\n    --tw-backdrop-invert:  ;\n    --tw-backdrop-opacity:  ;\n    --tw-backdrop-saturate:  ;\n    --tw-backdrop-sepia:  ;\n    --tw-contain-size:  ;\n    --tw-contain-layout:  ;\n    --tw-contain-paint:  ;\n    --tw-contain-style:  \n}\n::backdrop {\n    --tw-border-spacing-x: 0;\n    --tw-border-spacing-y: 0;\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    --tw-pan-x:  ;\n    --tw-pan-y:  ;\n    --tw-pinch-zoom:  ;\n    --tw-scroll-snap-strictness: proximity;\n    --tw-gradient-from-position:  ;\n    --tw-gradient-via-position:  ;\n    --tw-gradient-to-position:  ;\n    --tw-ordinal:  ;\n    --tw-slashed-zero:  ;\n    --tw-numeric-figure:  ;\n    --tw-numeric-spacing:  ;\n    --tw-numeric-fraction:  ;\n    --tw-ring-inset:  ;\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgb(59 130 246 / 0.5);\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    --tw-blur:  ;\n    --tw-brightness:  ;\n    --tw-contrast:  ;\n    --tw-grayscale:  ;\n    --tw-hue-rotate:  ;\n    --tw-invert:  ;\n    --tw-saturate:  ;\n    --tw-sepia:  ;\n    --tw-drop-shadow:  ;\n    --tw-backdrop-blur:  ;\n    --tw-backdrop-brightness:  ;\n    --tw-backdrop-contrast:  ;\n    --tw-backdrop-grayscale:  ;\n    --tw-backdrop-hue-rotate:  ;\n    --tw-backdrop-invert:  ;\n    --tw-backdrop-opacity:  ;\n    --tw-backdrop-saturate:  ;\n    --tw-backdrop-sepia:  ;\n    --tw-contain-size:  ;\n    --tw-contain-layout:  ;\n    --tw-contain-paint:  ;\n    --tw-contain-style:  \n}\n.container {\n    width: 100%\n}\n@media (min-width: 640px) {\n    .container {\n        max-width: 640px\n    }\n}\n@media (min-width: 768px) {\n    .container {\n        max-width: 768px\n    }\n}\n@media (min-width: 1024px) {\n    .container {\n        max-width: 1024px\n    }\n}\n@media (min-width: 1280px) {\n    .container {\n        max-width: 1280px\n    }\n}\n@media (min-width: 1536px) {\n    .container {\n        max-width: 1536px\n    }\n}\n#pomollu-gca-container .sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border-width: 0\n}\n#pomollu-gca-container .pointer-events-none {\n    pointer-events: none\n}\n#pomollu-gca-container .pointer-events-auto {\n    pointer-events: auto\n}\n#pomollu-gca-container .static {\n    position: static\n}\n#pomollu-gca-container .fixed {\n    position: fixed\n}\n#pomollu-gca-container .absolute {\n    position: absolute\n}\n#pomollu-gca-container .relative {\n    position: relative\n}\n#pomollu-gca-container .inset-0 {\n    inset: 0px\n}\n#pomollu-gca-container .inset-y-0 {\n    top: 0px;\n    bottom: 0px\n}\n#pomollu-gca-container .left-0 {\n    left: 0px\n}\n#pomollu-gca-container .right-0 {\n    right: 0px\n}\n#pomollu-gca-container .z-10 {\n    z-index: 10\n}\n#pomollu-gca-container .z-50 {\n    z-index: 50\n}\n#pomollu-gca-container .z-\\[100\\] {\n    z-index: 100\n}\n#pomollu-gca-container .mx-1 {\n    margin-left: 0.25rem;\n    margin-right: 0.25rem\n}\n#pomollu-gca-container .mx-auto {\n    margin-left: auto;\n    margin-right: auto\n}\n#pomollu-gca-container .my-1 {\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem\n}\n#pomollu-gca-container .my-2 {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem\n}\n#pomollu-gca-container .mb-3 {\n    margin-bottom: 0.75rem\n}\n#pomollu-gca-container .ml-1 {\n    margin-left: 0.25rem\n}\n#pomollu-gca-container .mt-0\\.5 {\n    margin-top: 0.125rem\n}\n#pomollu-gca-container .mt-2 {\n    margin-top: 0.5rem\n}\n#pomollu-gca-container .mt-4 {\n    margin-top: 1rem\n}\n#pomollu-gca-container .block {\n    display: block\n}\n#pomollu-gca-container .inline-block {\n    display: inline-block\n}\n#pomollu-gca-container .flex {\n    display: flex\n}\n#pomollu-gca-container .inline-flex {\n    display: inline-flex\n}\n#pomollu-gca-container .grid {\n    display: grid\n}\n#pomollu-gca-container .contents {\n    display: contents\n}\n#pomollu-gca-container .hidden {\n    display: none\n}\n#pomollu-gca-container .h-1\\.5 {\n    height: 0.375rem\n}\n#pomollu-gca-container .h-2 {\n    height: 0.5rem\n}\n#pomollu-gca-container .h-3\\.5 {\n    height: 0.875rem\n}\n#pomollu-gca-container .h-4 {\n    height: 1rem\n}\n#pomollu-gca-container .h-5 {\n    height: 1.25rem\n}\n#pomollu-gca-container .h-6 {\n    height: 1.5rem\n}\n#pomollu-gca-container .h-8 {\n    height: 2rem\n}\n#pomollu-gca-container .h-full {\n    height: 100%\n}\n#pomollu-gca-container .max-h-60 {\n    max-height: 15rem\n}\n#pomollu-gca-container .w-1\\.5 {\n    width: 0.375rem\n}\n#pomollu-gca-container .w-11 {\n    width: 2.75rem\n}\n#pomollu-gca-container .w-3\\.5 {\n    width: 0.875rem\n}\n#pomollu-gca-container .w-4 {\n    width: 1rem\n}\n#pomollu-gca-container .w-5 {\n    width: 1.25rem\n}\n#pomollu-gca-container .w-56 {\n    width: 14rem\n}\n#pomollu-gca-container .w-6 {\n    width: 1.5rem\n}\n#pomollu-gca-container .w-72 {\n    width: 18rem\n}\n#pomollu-gca-container .w-8 {\n    width: 2rem\n}\n#pomollu-gca-container .w-9 {\n    width: 2.25rem\n}\n#pomollu-gca-container .w-full {\n    width: 100%\n}\n#pomollu-gca-container .w-px {\n    width: 1px\n}\n#pomollu-gca-container .max-w-3xl {\n    max-width: 48rem\n}\n#pomollu-gca-container .max-w-sm {\n    max-width: 24rem\n}\n#pomollu-gca-container .flex-1 {\n    flex: 1 1 0%\n}\n#pomollu-gca-container .flex-shrink-0 {\n    flex-shrink: 0\n}\n#pomollu-gca-container .shrink-0 {\n    flex-shrink: 0\n}\n#pomollu-gca-container .translate-x-1 {\n    --tw-translate-x: 0.25rem;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}\n#pomollu-gca-container .translate-x-6 {\n    --tw-translate-x: 1.5rem;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}\n#pomollu-gca-container .rotate-180 {\n    --tw-rotate: 180deg;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}\n#pomollu-gca-container .transform {\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}\n#pomollu-gca-container .cursor-default {\n    cursor: default\n}\n#pomollu-gca-container .cursor-pointer {\n    cursor: pointer\n}\n#pomollu-gca-container .select-none {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none\n}\n#pomollu-gca-container .select-all {\n    -webkit-user-select: all;\n       -moz-user-select: all;\n            user-select: all\n}\n#pomollu-gca-container .resize-y {\n    resize: vertical\n}\n#pomollu-gca-container .appearance-none {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none\n}\n#pomollu-gca-container .grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr))\n}\n#pomollu-gca-container .flex-col {\n    flex-direction: column\n}\n#pomollu-gca-container .items-start {\n    align-items: flex-start\n}\n#pomollu-gca-container .items-center {\n    align-items: center\n}\n#pomollu-gca-container .justify-end {\n    justify-content: flex-end\n}\n#pomollu-gca-container .justify-center {\n    justify-content: center\n}\n#pomollu-gca-container .justify-between {\n    justify-content: space-between\n}\n#pomollu-gca-container .gap-1 {\n    gap: 0.25rem\n}\n#pomollu-gca-container .gap-2 {\n    gap: 0.5rem\n}\n#pomollu-gca-container .gap-2\\.5 {\n    gap: 0.625rem\n}\n#pomollu-gca-container .gap-3 {\n    gap: 0.75rem\n}\n#pomollu-gca-container .gap-4 {\n    gap: 1rem\n}\n#pomollu-gca-container .gap-6 {\n    gap: 1.5rem\n}\n#pomollu-gca-container :is(.space-x-1 > :not([hidden]) ~ :not([hidden])) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n    margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))\n}\n#pomollu-gca-container :is(.space-y-2 > :not([hidden]) ~ :not([hidden])) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse))\n}\n#pomollu-gca-container :is(.space-y-2\\.5 > :not([hidden]) ~ :not([hidden])) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0.625rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0.625rem * var(--tw-space-y-reverse))\n}\n#pomollu-gca-container :is(.space-y-3 > :not([hidden]) ~ :not([hidden])) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0.75rem * var(--tw-space-y-reverse))\n}\n#pomollu-gca-container :is(.space-y-4 > :not([hidden]) ~ :not([hidden])) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(1rem * var(--tw-space-y-reverse))\n}\n#pomollu-gca-container :is(.space-y-6 > :not([hidden]) ~ :not([hidden])) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(1.5rem * var(--tw-space-y-reverse))\n}\n#pomollu-gca-container .overflow-hidden {\n    overflow: hidden\n}\n#pomollu-gca-container .overflow-x-auto {\n    overflow-x: auto\n}\n#pomollu-gca-container .overflow-y-auto {\n    overflow-y: auto\n}\n#pomollu-gca-container .whitespace-nowrap {\n    white-space: nowrap\n}\n#pomollu-gca-container .whitespace-pre-wrap {\n    white-space: pre-wrap\n}\n#pomollu-gca-container .break-all {\n    word-break: break-all\n}\n#pomollu-gca-container .rounded {\n    border-radius: 0.25rem\n}\n#pomollu-gca-container .rounded-full {\n    border-radius: 9999px\n}\n#pomollu-gca-container .rounded-lg {\n    border-radius: 0.5rem\n}\n#pomollu-gca-container .rounded-md {\n    border-radius: 0.375rem\n}\n#pomollu-gca-container .rounded-xl {\n    border-radius: 0.75rem\n}\n#pomollu-gca-container .rounded-b-lg {\n    border-bottom-right-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem\n}\n#pomollu-gca-container .border {\n    border-width: 1px\n}\n#pomollu-gca-container .border-0 {\n    border-width: 0px\n}\n#pomollu-gca-container .border-b {\n    border-bottom-width: 1px\n}\n#pomollu-gca-container .border-t {\n    border-top-width: 1px\n}\n#pomollu-gca-container .border-zinc-700 {\n    --tw-border-opacity: 1;\n    border-color: rgb(63 63 70 / var(--tw-border-opacity, 1))\n}\n#pomollu-gca-container .border-zinc-700\\/50 {\n    border-color: rgb(63 63 70 / 0.5)\n}\n#pomollu-gca-container .border-zinc-700\\/60 {\n    border-color: rgb(63 63 70 / 0.6)\n}\n#pomollu-gca-container .border-zinc-800 {\n    --tw-border-opacity: 1;\n    border-color: rgb(39 39 42 / var(--tw-border-opacity, 1))\n}\n#pomollu-gca-container .bg-\\[\\#1e1e20\\] {\n    --tw-bg-opacity: 1;\n    background-color: rgb(30 30 32 / var(--tw-bg-opacity, 1))\n}\n#pomollu-gca-container .bg-\\[\\#202022\\] {\n    --tw-bg-opacity: 1;\n    background-color: rgb(32 32 34 / var(--tw-bg-opacity, 1))\n}\n#pomollu-gca-container .bg-\\[\\#252528\\] {\n    --tw-bg-opacity: 1;\n    background-color: rgb(37 37 40 / var(--tw-bg-opacity, 1))\n}\n#pomollu-gca-container .bg-\\[\\#2a2a2e\\] {\n    --tw-bg-opacity: 1;\n    background-color: rgb(42 42 46 / var(--tw-bg-opacity, 1))\n}\n#pomollu-gca-container .bg-black\\/60 {\n    background-color: rgb(0 0 0 / 0.6)\n}\n#pomollu-gca-container .bg-black\\/70 {\n    background-color: rgb(0 0 0 / 0.7)\n}\n#pomollu-gca-container .bg-blue-400 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(96 165 250 / var(--tw-bg-opacity, 1))\n}\n#pomollu-gca-container .bg-blue-500\\/10 {\n    background-color: rgb(59 130 246 / 0.1)\n}\n#pomollu-gca-container .bg-blue-600 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1))\n}\n#pomollu-gca-container .bg-blue-600\\/10 {\n    background-color: rgb(37 99 235 / 0.1)\n}\n#pomollu-gca-container .bg-white {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1))\n}\n#pomollu-gca-container .bg-zinc-600 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(82 82 91 / var(--tw-bg-opacity, 1))\n}\n#pomollu-gca-container .bg-zinc-700 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(63 63 70 / var(--tw-bg-opacity, 1))\n}\n#pomollu-gca-container .bg-zinc-700\\/50 {\n    background-color: rgb(63 63 70 / 0.5)\n}\n#pomollu-gca-container .bg-zinc-800 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1))\n}\n#pomollu-gca-container .bg-zinc-800\\/50 {\n    background-color: rgb(39 39 42 / 0.5)\n}\n#pomollu-gca-container .bg-zinc-900 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1))\n}\n#pomollu-gca-container .bg-zinc-900\\/50 {\n    background-color: rgb(24 24 27 / 0.5)\n}\n#pomollu-gca-container .bg-zinc-950 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(9 9 11 / var(--tw-bg-opacity, 1))\n}\n#pomollu-gca-container .p-0 {\n    padding: 0px\n}\n#pomollu-gca-container .p-1 {\n    padding: 0.25rem\n}\n#pomollu-gca-container .p-2 {\n    padding: 0.5rem\n}\n#pomollu-gca-container .p-4 {\n    padding: 1rem\n}\n#pomollu-gca-container .px-1\\.5 {\n    padding-left: 0.375rem;\n    padding-right: 0.375rem\n}\n#pomollu-gca-container .px-2 {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem\n}\n#pomollu-gca-container .px-3 {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem\n}\n#pomollu-gca-container .px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem\n}\n#pomollu-gca-container .px-5 {\n    padding-left: 1.25rem;\n    padding-right: 1.25rem\n}\n#pomollu-gca-container .py-0\\.5 {\n    padding-top: 0.125rem;\n    padding-bottom: 0.125rem\n}\n#pomollu-gca-container .py-1 {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem\n}\n#pomollu-gca-container .py-1\\.5 {\n    padding-top: 0.375rem;\n    padding-bottom: 0.375rem\n}\n#pomollu-gca-container .py-2 {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem\n}\n#pomollu-gca-container .py-2\\.5 {\n    padding-top: 0.625rem;\n    padding-bottom: 0.625rem\n}\n#pomollu-gca-container .py-3 {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem\n}\n#pomollu-gca-container .py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem\n}\n#pomollu-gca-container .pl-10 {\n    padding-left: 2.5rem\n}\n#pomollu-gca-container .pl-3 {\n    padding-left: 0.75rem\n}\n#pomollu-gca-container .pl-4 {\n    padding-left: 1rem\n}\n#pomollu-gca-container .pr-1 {\n    padding-right: 0.25rem\n}\n#pomollu-gca-container .pr-10 {\n    padding-right: 2.5rem\n}\n#pomollu-gca-container .pr-3 {\n    padding-right: 0.75rem\n}\n#pomollu-gca-container .pt-2 {\n    padding-top: 0.5rem\n}\n#pomollu-gca-container .text-left {\n    text-align: left\n}\n#pomollu-gca-container .font-mono {\n    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace\n}\n#pomollu-gca-container .text-base {\n    font-size: 1rem;\n    line-height: 1.5rem\n}\n#pomollu-gca-container .text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem\n}\n#pomollu-gca-container .text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem\n}\n#pomollu-gca-container .text-xs {\n    font-size: 0.75rem;\n    line-height: 1rem\n}\n#pomollu-gca-container .font-bold {\n    font-weight: 700\n}\n#pomollu-gca-container .font-medium {\n    font-weight: 500\n}\n#pomollu-gca-container .font-semibold {\n    font-weight: 600\n}\n#pomollu-gca-container .uppercase {\n    text-transform: uppercase\n}\n#pomollu-gca-container .leading-relaxed {\n    line-height: 1.625\n}\n#pomollu-gca-container .tracking-tight {\n    letter-spacing: -0.025em\n}\n#pomollu-gca-container .tracking-wider {\n    letter-spacing: 0.05em\n}\n#pomollu-gca-container .text-blue-400 {\n    --tw-text-opacity: 1;\n    color: rgb(96 165 250 / var(--tw-text-opacity, 1))\n}\n#pomollu-gca-container .text-purple-400 {\n    --tw-text-opacity: 1;\n    color: rgb(192 132 252 / var(--tw-text-opacity, 1))\n}\n#pomollu-gca-container .text-red-400 {\n    --tw-text-opacity: 1;\n    color: rgb(248 113 113 / var(--tw-text-opacity, 1))\n}\n#pomollu-gca-container .text-white {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity, 1))\n}\n#pomollu-gca-container .text-yellow-400 {\n    --tw-text-opacity: 1;\n    color: rgb(250 204 21 / var(--tw-text-opacity, 1))\n}\n#pomollu-gca-container .text-zinc-100 {\n    --tw-text-opacity: 1;\n    color: rgb(244 244 245 / var(--tw-text-opacity, 1))\n}\n#pomollu-gca-container .text-zinc-200 {\n    --tw-text-opacity: 1;\n    color: rgb(228 228 231 / var(--tw-text-opacity, 1))\n}\n#pomollu-gca-container .text-zinc-300 {\n    --tw-text-opacity: 1;\n    color: rgb(212 212 216 / var(--tw-text-opacity, 1))\n}\n#pomollu-gca-container .text-zinc-400 {\n    --tw-text-opacity: 1;\n    color: rgb(161 161 170 / var(--tw-text-opacity, 1))\n}\n#pomollu-gca-container .text-zinc-500 {\n    --tw-text-opacity: 1;\n    color: rgb(113 113 122 / var(--tw-text-opacity, 1))\n}\n#pomollu-gca-container .placeholder-zinc-500::-moz-placeholder {\n    --tw-placeholder-opacity: 1;\n    color: rgb(113 113 122 / var(--tw-placeholder-opacity, 1))\n}\n#pomollu-gca-container .placeholder-zinc-500::placeholder {\n    --tw-placeholder-opacity: 1;\n    color: rgb(113 113 122 / var(--tw-placeholder-opacity, 1))\n}\n#pomollu-gca-container .placeholder-zinc-600::-moz-placeholder {\n    --tw-placeholder-opacity: 1;\n    color: rgb(82 82 91 / var(--tw-placeholder-opacity, 1))\n}\n#pomollu-gca-container .placeholder-zinc-600::placeholder {\n    --tw-placeholder-opacity: 1;\n    color: rgb(82 82 91 / var(--tw-placeholder-opacity, 1))\n}\n#pomollu-gca-container .accent-blue-500 {\n    accent-color: #3b82f6\n}\n#pomollu-gca-container .opacity-50 {\n    opacity: 0.5\n}\n#pomollu-gca-container .shadow-2xl {\n    --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n    --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n#pomollu-gca-container .shadow-lg {\n    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n#pomollu-gca-container .shadow-sm {\n    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n#pomollu-gca-container .shadow-xl {\n    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n#pomollu-gca-container .shadow-blue-900\\/20 {\n    --tw-shadow-color: rgb(30 58 138 / 0.2);\n    --tw-shadow: var(--tw-shadow-colored)\n}\n#pomollu-gca-container .ring-0 {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)\n}\n#pomollu-gca-container .ring-1 {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)\n}\n#pomollu-gca-container .ring-2 {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)\n}\n#pomollu-gca-container .ring-blue-500\\/20 {\n    --tw-ring-color: rgb(59 130 246 / 0.2)\n}\n#pomollu-gca-container .ring-white\\/10 {\n    --tw-ring-color: rgb(255 255 255 / 0.1)\n}\n#pomollu-gca-container .ring-zinc-700 {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(63 63 70 / var(--tw-ring-opacity, 1))\n}\n#pomollu-gca-container .filter {\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)\n}\n#pomollu-gca-container .backdrop-blur-sm {\n    --tw-backdrop-blur: blur(4px);\n    backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)\n}\n#pomollu-gca-container .transition-all {\n    transition-property: all;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms\n}\n#pomollu-gca-container .transition-colors {\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms\n}\n#pomollu-gca-container .transition-transform {\n    transition-property: transform;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms\n}\n#pomollu-gca-container .duration-100 {\n    transition-duration: 100ms\n}\n#pomollu-gca-container .duration-200 {\n    transition-duration: 200ms\n}\n#pomollu-gca-container .hover\\:bg-blue-500:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(59 130 246 / var(--tw-bg-opacity, 1))\n}\n#pomollu-gca-container .hover\\:bg-blue-600:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1))\n}\n#pomollu-gca-container .hover\\:bg-blue-600\\/20:hover {\n    background-color: rgb(37 99 235 / 0.2)\n}\n#pomollu-gca-container .hover\\:bg-red-500\\/10:hover {\n    background-color: rgb(239 68 68 / 0.1)\n}\n#pomollu-gca-container .hover\\:bg-zinc-600:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(82 82 91 / var(--tw-bg-opacity, 1))\n}\n#pomollu-gca-container .hover\\:bg-zinc-700\\/50:hover {\n    background-color: rgb(63 63 70 / 0.5)\n}\n#pomollu-gca-container .hover\\:bg-zinc-800:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1))\n}\n#pomollu-gca-container .hover\\:text-red-300:hover {\n    --tw-text-opacity: 1;\n    color: rgb(252 165 165 / var(--tw-text-opacity, 1))\n}\n#pomollu-gca-container .hover\\:text-white:hover {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity, 1))\n}\n#pomollu-gca-container .hover\\:text-zinc-100:hover {\n    --tw-text-opacity: 1;\n    color: rgb(244 244 245 / var(--tw-text-opacity, 1))\n}\n#pomollu-gca-container .hover\\:text-zinc-200:hover {\n    --tw-text-opacity: 1;\n    color: rgb(228 228 231 / var(--tw-text-opacity, 1))\n}\n#pomollu-gca-container .hover\\:text-zinc-300:hover {\n    --tw-text-opacity: 1;\n    color: rgb(212 212 216 / var(--tw-text-opacity, 1))\n}\n#pomollu-gca-container .focus\\:border-blue-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(59 130 246 / var(--tw-border-opacity, 1))\n}\n#pomollu-gca-container .focus\\:border-purple-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(168 85 247 / var(--tw-border-opacity, 1))\n}\n#pomollu-gca-container .focus\\:border-zinc-600:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(82 82 91 / var(--tw-border-opacity, 1))\n}\n#pomollu-gca-container .focus\\:outline-none:focus {\n    outline: 2px solid transparent;\n    outline-offset: 2px\n}\n#pomollu-gca-container .focus\\:ring-1:focus {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)\n}\n#pomollu-gca-container .focus\\:ring-2:focus {\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)\n}\n#pomollu-gca-container .focus\\:ring-blue-500\\/50:focus {\n    --tw-ring-color: rgb(59 130 246 / 0.5)\n}\n#pomollu-gca-container .focus\\:ring-zinc-500:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(113 113 122 / var(--tw-ring-opacity, 1))\n}\n#pomollu-gca-container .focus\\:ring-zinc-600:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(82 82 91 / var(--tw-ring-opacity, 1))\n}\n#pomollu-gca-container :is(.group:focus-within .group-focus-within\\:text-blue-500) {\n    --tw-text-opacity: 1;\n    color: rgb(59 130 246 / var(--tw-text-opacity, 1))\n}\n#pomollu-gca-container :is(.group:hover .group-hover\\:text-white) {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity, 1))\n}\n#pomollu-gca-container :is(.group:hover .group-hover\\:ring-blue-500\\/50) {\n    --tw-ring-color: rgb(59 130 246 / 0.5)\n}\n@media (min-width: 640px) {\n    #pomollu-gca-container .sm\\:block {\n        display: block\n    }\n    #pomollu-gca-container .sm\\:inline {\n        display: inline\n    }\n    #pomollu-gca-container .sm\\:h-\\[90vh\\] {\n        height: 90vh\n    }\n    #pomollu-gca-container .sm\\:w-auto {\n        width: auto\n    }\n    #pomollu-gca-container .sm\\:max-w-4xl {\n        max-width: 56rem\n    }\n    #pomollu-gca-container .sm\\:flex-row {\n        flex-direction: row\n    }\n    #pomollu-gca-container .sm\\:items-center {\n        align-items: center\n    }\n    #pomollu-gca-container .sm\\:gap-0 {\n        gap: 0px\n    }\n    #pomollu-gca-container .sm\\:gap-3 {\n        gap: 0.75rem\n    }\n    #pomollu-gca-container :is(.sm\\:space-y-8 > :not([hidden]) ~ :not([hidden])) {\n        --tw-space-y-reverse: 0;\n        margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n        margin-bottom: calc(2rem * var(--tw-space-y-reverse))\n    }\n    #pomollu-gca-container .sm\\:rounded-xl {\n        border-radius: 0.75rem\n    }\n    #pomollu-gca-container .sm\\:border {\n        border-width: 1px\n    }\n    #pomollu-gca-container .sm\\:p-4 {\n        padding: 1rem\n    }\n    #pomollu-gca-container .sm\\:p-6 {\n        padding: 1.5rem\n    }\n    #pomollu-gca-container .sm\\:px-6 {\n        padding-left: 1.5rem;\n        padding-right: 1.5rem\n    }\n    #pomollu-gca-container .sm\\:ring-1 {\n        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)\n    }\n}\n@media (min-width: 768px) {\n    #pomollu-gca-container .md\\:block {\n        display: block\n    }\n    #pomollu-gca-container .md\\:w-56 {\n        width: 14rem\n    }\n    #pomollu-gca-container .md\\:flex-none {\n        flex: none\n    }\n    #pomollu-gca-container .md\\:grid-cols-2 {\n        grid-template-columns: repeat(2, minmax(0, 1fr))\n    }\n    #pomollu-gca-container .md\\:grid-cols-3 {\n        grid-template-columns: repeat(3, minmax(0, 1fr))\n    }\n    #pomollu-gca-container .md\\:flex-row {\n        flex-direction: row\n    }\n    #pomollu-gca-container .md\\:flex-col {\n        flex-direction: column\n    }\n    #pomollu-gca-container .md\\:justify-start {\n        justify-content: flex-start\n    }\n    #pomollu-gca-container .md\\:gap-0 {\n        gap: 0px\n    }\n    #pomollu-gca-container .md\\:gap-3 {\n        gap: 0.75rem\n    }\n    #pomollu-gca-container :is(.md\\:space-x-0 > :not([hidden]) ~ :not([hidden])) {\n        --tw-space-x-reverse: 0;\n        margin-right: calc(0px * var(--tw-space-x-reverse));\n        margin-left: calc(0px * calc(1 - var(--tw-space-x-reverse)))\n    }\n    #pomollu-gca-container :is(.md\\:space-y-1 > :not([hidden]) ~ :not([hidden])) {\n        --tw-space-y-reverse: 0;\n        margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n        margin-bottom: calc(0.25rem * var(--tw-space-y-reverse))\n    }\n    #pomollu-gca-container .md\\:overflow-y-auto {\n        overflow-y: auto\n    }\n    #pomollu-gca-container .md\\:border-b-0 {\n        border-bottom-width: 0px\n    }\n    #pomollu-gca-container .md\\:border-r {\n        border-right-width: 1px\n    }\n    #pomollu-gca-container .md\\:p-4 {\n        padding: 1rem\n    }\n    #pomollu-gca-container .md\\:py-2\\.5 {\n        padding-top: 0.625rem;\n        padding-bottom: 0.625rem\n    }\n}'));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
//@name pomollu-gca-v0.3.0-pre.1
//@display-name pomollu-gca
//@api 2.1
//@arg is_logged_in int
//@arg access_token string
//@arg access_token_expires string
//@arg refresh_token string
//@arg project_id string
//@arg service_tier string
//@arg opt_out int
//@arg model_config string
(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})(function() {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  var RisuArgType = /* @__PURE__ */ ((RisuArgType2) => {
    RisuArgType2["String"] = "string";
    RisuArgType2["Int"] = "int";
    return RisuArgType2;
  })(RisuArgType || {});
  const PLUGIN_TITLE = "pomollu-gca";
  const PLUGIN_VERSION = "v0.3.0-pre.1";
  const PLUGIN_NAME = `${PLUGIN_TITLE}-${PLUGIN_VERSION}`;
  const IS_LOGGED_IN = "is_logged_in";
  const ACCESS_TOKEN = "access_token";
  const ACCESS_TOKEN_EXPIRES = "access_token_expires";
  const REFRESH_TOKEN = "refresh_token";
  const PROJECT_ID = "project_id";
  const SERVICE_TIER = "service_tier";
  const OPT_OUT = "opt_out";
  const MODEL_CONFIG = "model_config";
  const RISU_ARGS = {
    [IS_LOGGED_IN]: "int",
    [ACCESS_TOKEN]: "string",
    [ACCESS_TOKEN_EXPIRES]: "string",
    [REFRESH_TOKEN]: "string",
    [PROJECT_ID]: "string",
    [SERVICE_TIER]: "string",
    [OPT_OUT]: "int",
    [MODEL_CONFIG]: "string"
    /* String */
  };
  function getAllArgNames() {
    return Object.keys(RISU_ARGS);
  }
  const rawAPI = {
    //@ts-ignore
    risuFetch,
    //@ts-ignore
    nativeFetch,
    //@ts-ignore
    getArg,
    //@ts-ignore
    setArg,
    //@ts-ignore
    getChar,
    //@ts-ignore
    setChar,
    //@ts-ignore
    addProvider,
    //@ts-ignore
    addRisuScriptHandler,
    //@ts-ignore
    removeRisuScriptHandler,
    //@ts-ignore
    addRisuReplacer,
    //@ts-ignore
    removeRisuReplacer,
    //@ts-ignore
    onUnload
  };
  function getFullName(name) {
    return `${PLUGIN_NAME}::${name}`;
  }
  class RisuAPI {
    static risuFetch(url, args) {
      return rawAPI.risuFetch(url, args);
    }
    static nativeFetch(url, args) {
      return rawAPI.nativeFetch(url, args);
    }
    static getArg(name) {
      if (RISU_ARGS[name] === void 0) return;
      switch (RISU_ARGS[name]) {
        case RisuArgType.Int:
          return Number(rawAPI.getArg(getFullName(name)));
        case RisuArgType.String:
          return String(rawAPI.getArg(getFullName(name)));
      }
    }
    static setArg(name, value) {
      if (RISU_ARGS[name] === void 0) return;
      switch (RISU_ARGS[name]) {
        case RisuArgType.Int:
          rawAPI.setArg(getFullName(name), Number(value));
          break;
        case RisuArgType.String:
          rawAPI.setArg(getFullName(name), String(value));
          break;
      }
    }
    static getChar() {
      return rawAPI.getChar();
    }
    static setChar(char) {
      rawAPI.setChar(char);
    }
    static addProvider(name, func2, options) {
      rawAPI.addProvider(name, func2, options);
    }
    static addRisuScriptHandler(mode, func2) {
      rawAPI.addRisuScriptHandler(mode, func2);
    }
    static removeRisuScriptHandler(mode, func2) {
      rawAPI.removeRisuScriptHandler(mode, func2);
    }
    static addRisuReplacer(type, func2) {
      rawAPI.addRisuReplacer(type, func2);
    }
    static removeRisuReplacer(type, func2) {
      rawAPI.removeRisuReplacer(type, func2);
    }
    static onUnload(callback) {
      rawAPI.onUnload(callback);
    }
  }
  class Logger {
    static log(...message) {
      console.log("[Pomollu]", ...message);
    }
    static error(...message) {
      console.error("[Pomollu]", ...message);
    }
    static warn(...message) {
      console.warn("[Pomollu]", ...message);
    }
    static info(...message) {
      console.info("[Pomollu]", ...message);
    }
    static debug(...message) {
      console.debug("[Pomollu]", ...message);
    }
  }
  function noop() {
  }
  const identity = (x) => x;
  function assign(tar, src) {
    for (const k in src) tar[k] = src[k];
    return (
      /** @type {T & S} */
      tar
    );
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return /* @__PURE__ */ Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
  }
  let src_url_equal_anchor;
  function src_url_equal(element_src, url) {
    if (element_src === url) return true;
    if (!src_url_equal_anchor) {
      src_url_equal_anchor = document.createElement("a");
    }
    src_url_equal_anchor.href = url;
    return element_src === src_url_equal_anchor.href;
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }
  function subscribe(store, ...callbacks) {
    if (store == null) {
      for (const callback of callbacks) {
        callback(void 0);
      }
      return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }
  function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
  }
  function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
      const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
      return definition[0](slot_ctx);
    }
  }
  function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
  }
  function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) ;
    return $$scope.dirty;
  }
  function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
      const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
      slot.p(slot_context, slot_changes);
    }
  }
  function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
      const dirty = [];
      const length = $$scope.ctx.length / 32;
      for (let i = 0; i < length; i++) {
        dirty[i] = -1;
      }
      return dirty;
    }
    return -1;
  }
  function exclude_internal_props(props) {
    const result = {};
    for (const k in props) if (k[0] !== "$") result[k] = props[k];
    return result;
  }
  function compute_rest_props(props, keys) {
    const rest = {};
    keys = new Set(keys);
    for (const k in props) if (!keys.has(k) && k[0] !== "$") rest[k] = props[k];
    return rest;
  }
  const is_client = typeof window !== "undefined";
  let now = is_client ? () => window.performance.now() : () => Date.now();
  let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
  const tasks = /* @__PURE__ */ new Set();
  function run_tasks(now2) {
    tasks.forEach((task) => {
      if (!task.c(now2)) {
        tasks.delete(task);
        task.f();
      }
    });
    if (tasks.size !== 0) raf(run_tasks);
  }
  function loop(callback) {
    let task;
    if (tasks.size === 0) raf(run_tasks);
    return {
      promise: new Promise((fulfill) => {
        tasks.add(task = { c: callback, f: fulfill });
      }),
      abort() {
        tasks.delete(task);
      }
    };
  }
  function append(target, node) {
    target.appendChild(node);
  }
  function get_root_for_style(node) {
    if (!node) return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && /** @type {ShadowRoot} */
    root.host) {
      return (
        /** @type {ShadowRoot} */
        root
      );
    }
    return node.ownerDocument;
  }
  function append_empty_stylesheet(node) {
    const style_element = element("style");
    style_element.textContent = "/* empty */";
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element.sheet;
  }
  function append_stylesheet(node, style) {
    append(
      /** @type {Document} */
      node.head || node,
      style
    );
    return style.sheet;
  }
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  function detach(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
  function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
      if (iterations[i]) iterations[i].d(detaching);
    }
  }
  function element(name) {
    return document.createElement(name);
  }
  function svg_element(name) {
    return document.createElementNS("http://www.w3.org/2000/svg", name);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
  }
  function empty() {
    return text("");
  }
  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }
  function stop_propagation(fn) {
    return function(event) {
      event.stopPropagation();
      return fn.call(this, event);
    };
  }
  function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }
  function set_svg_attributes(node, attributes) {
    for (const key in attributes) {
      attr(node, key, attributes[key]);
    }
  }
  function to_number(value) {
    return value === "" ? null : +value;
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_data(text2, data) {
    data = "" + data;
    if (text2.data === data) return;
    text2.data = /** @type {string} */
    data;
  }
  function set_input_value(input, value) {
    input.value = value == null ? "" : value;
  }
  function set_style(node, key, value, important) {
    if (value == null) {
      node.style.removeProperty(key);
    } else {
      node.style.setProperty(key, value, "");
    }
  }
  function select_option(select, value, mounting) {
    for (let i = 0; i < select.options.length; i += 1) {
      const option = select.options[i];
      if (option.__value === value) {
        option.selected = true;
        return;
      }
    }
    if (!mounting || value !== void 0) {
      select.selectedIndex = -1;
    }
  }
  function select_value(select) {
    const selected_option = select.querySelector(":checked");
    return selected_option && selected_option.__value;
  }
  function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
    return new CustomEvent(type, { detail, bubbles, cancelable });
  }
  const managed_styles = /* @__PURE__ */ new Map();
  let active = 0;
  function hash(str) {
    let hash2 = 5381;
    let i = str.length;
    while (i--) hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i);
    return hash2 >>> 0;
  }
  function create_style_information(doc, node) {
    const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
    managed_styles.set(doc, info);
    return info;
  }
  function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = "{\n";
    for (let p = 0; p <= 1; p += step) {
      const t = a + (b - a) * ease(p);
      keyframes += p * 100 + `%{${fn(t, 1 - t)}}
`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}
}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    const doc = get_root_for_style(node);
    const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
    if (!rules[name]) {
      rules[name] = true;
      stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || "";
    node.style.animation = `${animation ? `${animation}, ` : ""}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
  }
  function delete_rule(node, name) {
    const previous = (node.style.animation || "").split(", ");
    const next = previous.filter(
      name ? (anim) => anim.indexOf(name) < 0 : (anim) => anim.indexOf("__svelte") === -1
      // remove all Svelte animations
    );
    const deleted = previous.length - next.length;
    if (deleted) {
      node.style.animation = next.join(", ");
      active -= deleted;
      if (!active) clear_rules();
    }
  }
  function clear_rules() {
    raf(() => {
      if (active) return;
      managed_styles.forEach((info) => {
        const { ownerNode } = info.stylesheet;
        if (ownerNode) detach(ownerNode);
      });
      managed_styles.clear();
    });
  }
  let current_component;
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component) throw new Error("Function called outside component initialization");
    return current_component;
  }
  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }
  function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail, { cancelable = false } = {}) => {
      const callbacks = component.$$.callbacks[type];
      if (callbacks) {
        const event = custom_event(
          /** @type {string} */
          type,
          detail,
          { cancelable }
        );
        callbacks.slice().forEach((fn) => {
          fn.call(component, event);
        });
        return !event.defaultPrevented;
      }
      return true;
    };
  }
  function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
      callbacks.slice().forEach((fn) => fn.call(this, event));
    }
  }
  const dirty_components = [];
  const binding_callbacks = [];
  let render_callbacks = [];
  const flush_callbacks = [];
  const resolved_promise = /* @__PURE__ */ Promise.resolve();
  let update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  function add_flush_callback(fn) {
    flush_callbacks.push(fn);
  }
  const seen_callbacks = /* @__PURE__ */ new Set();
  let flushidx = 0;
  function flush() {
    if (flushidx !== 0) {
      return;
    }
    const saved_component = current_component;
    do {
      try {
        while (flushidx < dirty_components.length) {
          const component = dirty_components[flushidx];
          flushidx++;
          set_current_component(component);
          update(component.$$);
        }
      } catch (e) {
        dirty_components.length = 0;
        flushidx = 0;
        throw e;
      }
      set_current_component(null);
      dirty_components.length = 0;
      flushidx = 0;
      while (binding_callbacks.length) binding_callbacks.pop()();
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  function flush_render_callbacks(fns) {
    const filtered = [];
    const targets = [];
    render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
    targets.forEach((c) => c());
    render_callbacks = filtered;
  }
  let promise;
  function wait() {
    if (!promise) {
      promise = Promise.resolve();
      promise.then(() => {
        promise = null;
      });
    }
    return promise;
  }
  function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
  }
  const outroing = /* @__PURE__ */ new Set();
  let outros;
  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros
      // parent group
    };
  }
  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }
    outros = outros.p;
  }
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }
  function transition_out(block, local, detach2, callback) {
    if (block && block.o) {
      if (outroing.has(block)) return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);
        if (callback) {
          if (detach2) block.d(1);
          callback();
        }
      });
      block.o(local);
    } else if (callback) {
      callback();
    }
  }
  const null_transition = { duration: 0 };
  function create_bidirectional_transition(node, fn, params, intro) {
    const options = { direction: "both" };
    let config = fn(node, params, options);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    let original_inert_value;
    function clear_animation() {
      if (animation_name) delete_rule(node, animation_name);
    }
    function init2(program, duration) {
      const d = (
        /** @type {Program['d']} */
        program.b - t
      );
      duration *= Math.abs(d);
      return {
        a: t,
        b: program.b,
        d,
        duration,
        start: program.start,
        end: program.start + duration,
        group: program.group
      };
    }
    function go(b) {
      const {
        delay = 0,
        duration = 300,
        easing = identity,
        tick = noop,
        css
      } = config || null_transition;
      const program = {
        start: now() + delay,
        b
      };
      if (!b) {
        program.group = outros;
        outros.r += 1;
      }
      if ("inert" in node) {
        if (b) {
          if (original_inert_value !== void 0) {
            node.inert = original_inert_value;
          }
        } else {
          original_inert_value = /** @type {HTMLElement} */
          node.inert;
          node.inert = true;
        }
      }
      if (running_program || pending_program) {
        pending_program = program;
      } else {
        if (css) {
          clear_animation();
          animation_name = create_rule(node, t, b, duration, delay, easing, css);
        }
        if (b) tick(0, 1);
        running_program = init2(program, duration);
        add_render_callback(() => dispatch(node, b, "start"));
        loop((now2) => {
          if (pending_program && now2 > pending_program.start) {
            running_program = init2(pending_program, duration);
            pending_program = null;
            dispatch(node, running_program.b, "start");
            if (css) {
              clear_animation();
              animation_name = create_rule(
                node,
                t,
                running_program.b,
                running_program.duration,
                0,
                easing,
                config.css
              );
            }
          }
          if (running_program) {
            if (now2 >= running_program.end) {
              tick(t = running_program.b, 1 - t);
              dispatch(node, running_program.b, "end");
              if (!pending_program) {
                if (running_program.b) {
                  clear_animation();
                } else {
                  if (!--running_program.group.r) run_all(running_program.group.c);
                }
              }
              running_program = null;
            } else if (now2 >= running_program.start) {
              const p = now2 - running_program.start;
              t = running_program.a + running_program.d * easing(p / running_program.duration);
              tick(t, 1 - t);
            }
          }
          return !!(running_program || pending_program);
        });
      }
    }
    return {
      run(b) {
        if (is_function(config)) {
          wait().then(() => {
            const opts = { direction: b ? "in" : "out" };
            config = config(opts);
            go(b);
          });
        } else {
          go(b);
        }
      },
      end() {
        clear_animation();
        running_program = pending_program = null;
      }
    };
  }
  function ensure_array_like(array_like_or_iterator) {
    return (array_like_or_iterator == null ? void 0 : array_like_or_iterator.length) !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  function get_spread_update(levels, updates) {
    const update2 = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
      const o = levels[i];
      const n = updates[i];
      if (n) {
        for (const key in o) {
          if (!(key in n)) to_null_out[key] = 1;
        }
        for (const key in n) {
          if (!accounted_for[key]) {
            update2[key] = n[key];
            accounted_for[key] = 1;
          }
        }
        levels[i] = n;
      } else {
        for (const key in o) {
          accounted_for[key] = 1;
        }
      }
    }
    for (const key in to_null_out) {
      if (!(key in update2)) update2[key] = void 0;
    }
    return update2;
  }
  function get_spread_object(spread_props) {
    return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
  }
  function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== void 0) {
      component.$$.bound[index] = callback;
      callback(component.$$.ctx[index]);
    }
  }
  function create_component(block) {
    block && block.c();
  }
  function mount_component(component, target, anchor) {
    const { fragment, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    add_render_callback(() => {
      const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
      if (component.$$.on_destroy) {
        component.$$.on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      flush_render_callbacks($$.after_update);
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }
  function init(component, options, instance2, create_fragment2, not_equal, props, append_styles = null, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: [],
      // state
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      // everything else
      callbacks: blank_object(),
      dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
        if (ready) make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro) transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor);
      flush();
    }
    set_current_component(parent_component);
  }
  class SvelteComponent {
    constructor() {
      /**
       * ### PRIVATE API
       *
       * Do not use, may change at any time
       *
       * @type {any}
       */
      __publicField(this, "$$");
      /**
       * ### PRIVATE API
       *
       * Do not use, may change at any time
       *
       * @type {any}
       */
      __publicField(this, "$$set");
    }
    /** @returns {void} */
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    /**
     * @template {Extract<keyof Events, string>} K
     * @param {K} type
     * @param {((e: Events[K]) => void) | null | undefined} callback
     * @returns {() => void}
     */
    $on(type, callback) {
      if (!is_function(callback)) {
        return noop;
      }
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }
    /**
     * @param {Partial<Props>} props
     * @returns {void}
     */
    $set(props) {
      if (this.$$set && !is_empty(props)) {
        this.$$.skip_bound = true;
        this.$$set(props);
        this.$$.skip_bound = false;
      }
    }
  }
  const PUBLIC_VERSION = "4";
  const subscriber_queue = [];
  function writable(value, start = noop) {
    let stop;
    const subscribers = /* @__PURE__ */ new Set();
    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update2(fn) {
      set(fn(value));
    }
    function subscribe2(run2, invalidate = noop) {
      const subscriber = [run2, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set, update2) || noop;
      }
      run2(value);
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0 && stop) {
          stop();
          stop = null;
        }
      };
    }
    return { set, update: update2, subscribe: subscribe2 };
  }
  function createPopupStore() {
    const { subscribe: subscribe2, set } = writable(null);
    return {
      subscribe: subscribe2,
      alert: (message) => {
        return new Promise((resolve) => {
          set({
            type: "alert",
            message,
            onConfirm: () => {
              set(null);
              resolve();
            }
          });
        });
      },
      confirm: (message) => {
        return new Promise((resolve) => {
          set({
            type: "confirm",
            message,
            onConfirm: () => {
              set(null);
              resolve(true);
            },
            onCancel: () => {
              set(null);
              resolve(false);
            }
          });
        });
      },
      prompt: (message, defaultValue = "") => {
        return new Promise((resolve) => {
          set({
            type: "prompt",
            message,
            defaultValue,
            onConfirm: (value) => {
              set(null);
              resolve(value || null);
            },
            onCancel: () => {
              set(null);
              resolve(null);
            }
          });
        });
      },
      close: () => set(null)
    };
  }
  const popupStore = createPopupStore();
  if (typeof window !== "undefined")
    (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);
  /**
   * @license lucide-svelte v0.548.0 - ISC
   *
   * ISC License
   * 
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   * 
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   * 
   * ---
   * 
   * The MIT License (MIT) (for portions derived from Feather)
   * 
   * Copyright (c) 2013-2023 Cole Bemis
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
   */
  const defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };
  function get_each_context$2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[11] = list[i][0];
    child_ctx[12] = list[i][1];
    return child_ctx;
  }
  function create_dynamic_element(ctx) {
    let svelte_element;
    let svelte_element_levels = [
      /*attrs*/
      ctx[12]
    ];
    let svelte_element_data = {};
    for (let i = 0; i < svelte_element_levels.length; i += 1) {
      svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
    }
    return {
      c() {
        svelte_element = svg_element(
          /*tag*/
          ctx[11]
        );
        set_svg_attributes(svelte_element, svelte_element_data);
      },
      m(target, anchor) {
        insert(target, svelte_element, anchor);
      },
      p(ctx2, dirty) {
        set_svg_attributes(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [dirty & /*iconNode*/
        32 && /*attrs*/
        ctx2[12]]));
      },
      d(detaching) {
        if (detaching) {
          detach(svelte_element);
        }
      }
    };
  }
  function create_each_block$2(ctx) {
    let previous_tag = (
      /*tag*/
      ctx[11]
    );
    let svelte_element_anchor;
    let svelte_element = (
      /*tag*/
      ctx[11] && create_dynamic_element(ctx)
    );
    return {
      c() {
        if (svelte_element) svelte_element.c();
        svelte_element_anchor = empty();
      },
      m(target, anchor) {
        if (svelte_element) svelte_element.m(target, anchor);
        insert(target, svelte_element_anchor, anchor);
      },
      p(ctx2, dirty) {
        if (
          /*tag*/
          ctx2[11]
        ) {
          if (!previous_tag) {
            svelte_element = create_dynamic_element(ctx2);
            previous_tag = /*tag*/
            ctx2[11];
            svelte_element.c();
            svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
          } else if (safe_not_equal(
            previous_tag,
            /*tag*/
            ctx2[11]
          )) {
            svelte_element.d(1);
            svelte_element = create_dynamic_element(ctx2);
            previous_tag = /*tag*/
            ctx2[11];
            svelte_element.c();
            svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
          } else {
            svelte_element.p(ctx2, dirty);
          }
        } else if (previous_tag) {
          svelte_element.d(1);
          svelte_element = null;
          previous_tag = /*tag*/
          ctx2[11];
        }
      },
      d(detaching) {
        if (detaching) {
          detach(svelte_element_anchor);
        }
        if (svelte_element) svelte_element.d(detaching);
      }
    };
  }
  function create_fragment$9(ctx) {
    let svg;
    let each_1_anchor;
    let svg_stroke_width_value;
    let svg_class_value;
    let current;
    let each_value = ensure_array_like(
      /*iconNode*/
      ctx[5]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
    }
    const default_slot_template = (
      /*#slots*/
      ctx[10].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[9],
      null
    );
    let svg_levels = [
      defaultAttributes,
      /*$$restProps*/
      ctx[7],
      { width: (
        /*size*/
        ctx[2]
      ) },
      { height: (
        /*size*/
        ctx[2]
      ) },
      { stroke: (
        /*color*/
        ctx[1]
      ) },
      {
        "stroke-width": svg_stroke_width_value = /*absoluteStrokeWidth*/
        ctx[4] ? Number(
          /*strokeWidth*/
          ctx[3]
        ) * 24 / Number(
          /*size*/
          ctx[2]
        ) : (
          /*strokeWidth*/
          ctx[3]
        )
      },
      {
        class: svg_class_value = /*mergeClasses*/
        ctx[6](
          "lucide-icon",
          "lucide",
          /*name*/
          ctx[0] ? `lucide-${/*name*/
          ctx[0]}` : "",
          /*$$props*/
          ctx[8].class
        )
      }
    ];
    let svg_data = {};
    for (let i = 0; i < svg_levels.length; i += 1) {
      svg_data = assign(svg_data, svg_levels[i]);
    }
    return {
      c() {
        svg = svg_element("svg");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
        if (default_slot) default_slot.c();
        set_svg_attributes(svg, svg_data);
      },
      m(target, anchor) {
        insert(target, svg, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(svg, null);
          }
        }
        append(svg, each_1_anchor);
        if (default_slot) {
          default_slot.m(svg, null);
        }
        current = true;
      },
      p(ctx2, [dirty]) {
        if (dirty & /*iconNode*/
        32) {
          each_value = ensure_array_like(
            /*iconNode*/
            ctx2[5]
          );
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context$2(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block$2(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(svg, each_1_anchor);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/
          512)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[9],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[9]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[9],
                dirty,
                null
              ),
              null
            );
          }
        }
        set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
          defaultAttributes,
          dirty & /*$$restProps*/
          128 && /*$$restProps*/
          ctx2[7],
          (!current || dirty & /*size*/
          4) && { width: (
            /*size*/
            ctx2[2]
          ) },
          (!current || dirty & /*size*/
          4) && { height: (
            /*size*/
            ctx2[2]
          ) },
          (!current || dirty & /*color*/
          2) && { stroke: (
            /*color*/
            ctx2[1]
          ) },
          (!current || dirty & /*absoluteStrokeWidth, strokeWidth, size*/
          28 && svg_stroke_width_value !== (svg_stroke_width_value = /*absoluteStrokeWidth*/
          ctx2[4] ? Number(
            /*strokeWidth*/
            ctx2[3]
          ) * 24 / Number(
            /*size*/
            ctx2[2]
          ) : (
            /*strokeWidth*/
            ctx2[3]
          ))) && { "stroke-width": svg_stroke_width_value },
          (!current || dirty & /*name, $$props*/
          257 && svg_class_value !== (svg_class_value = /*mergeClasses*/
          ctx2[6](
            "lucide-icon",
            "lucide",
            /*name*/
            ctx2[0] ? `lucide-${/*name*/
            ctx2[0]}` : "",
            /*$$props*/
            ctx2[8].class
          ))) && { class: svg_class_value }
        ]));
      },
      i(local) {
        if (current) return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(svg);
        }
        destroy_each(each_blocks, detaching);
        if (default_slot) default_slot.d(detaching);
      }
    };
  }
  function instance$9($$self, $$props, $$invalidate) {
    const omit_props_names = ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    let { name = void 0 } = $$props;
    let { color = "currentColor" } = $$props;
    let { size = 24 } = $$props;
    let { strokeWidth = 2 } = $$props;
    let { absoluteStrokeWidth = false } = $$props;
    let { iconNode = [] } = $$props;
    const mergeClasses = (...classes) => classes.filter((className, index, array) => {
      return Boolean(className) && array.indexOf(className) === index;
    }).join(" ");
    $$self.$$set = ($$new_props) => {
      $$invalidate(8, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
      $$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("name" in $$new_props) $$invalidate(0, name = $$new_props.name);
      if ("color" in $$new_props) $$invalidate(1, color = $$new_props.color);
      if ("size" in $$new_props) $$invalidate(2, size = $$new_props.size);
      if ("strokeWidth" in $$new_props) $$invalidate(3, strokeWidth = $$new_props.strokeWidth);
      if ("absoluteStrokeWidth" in $$new_props) $$invalidate(4, absoluteStrokeWidth = $$new_props.absoluteStrokeWidth);
      if ("iconNode" in $$new_props) $$invalidate(5, iconNode = $$new_props.iconNode);
      if ("$$scope" in $$new_props) $$invalidate(9, $$scope = $$new_props.$$scope);
    };
    $$props = exclude_internal_props($$props);
    return [
      name,
      color,
      size,
      strokeWidth,
      absoluteStrokeWidth,
      iconNode,
      mergeClasses,
      $$restProps,
      $$props,
      $$scope,
      slots
    ];
  }
  class Icon extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$9, create_fragment$9, safe_not_equal, {
        name: 0,
        color: 1,
        size: 2,
        strokeWidth: 3,
        absoluteStrokeWidth: 4,
        iconNode: 5
      });
    }
  }
  function create_default_slot$2(ctx) {
    let current;
    const default_slot_template = (
      /*#slots*/
      ctx[2].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[3],
      null
    );
    return {
      c() {
        if (default_slot) default_slot.c();
      },
      m(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/
          8)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[3],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[3]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[3],
                dirty,
                null
              ),
              null
            );
          }
        }
      },
      i(local) {
        if (current) return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (default_slot) default_slot.d(detaching);
      }
    };
  }
  function create_fragment$8(ctx) {
    let icon;
    let current;
    const icon_spread_levels = [
      { name: "circle-alert" },
      /*$$props*/
      ctx[1],
      { iconNode: (
        /*iconNode*/
        ctx[0]
      ) }
    ];
    let icon_props = {
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    };
    for (let i = 0; i < icon_spread_levels.length; i += 1) {
      icon_props = assign(icon_props, icon_spread_levels[i]);
    }
    icon = new Icon({ props: icon_props });
    return {
      c() {
        create_component(icon.$$.fragment);
      },
      m(target, anchor) {
        mount_component(icon, target, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        const icon_changes = dirty & /*$$props, iconNode*/
        3 ? get_spread_update(icon_spread_levels, [
          icon_spread_levels[0],
          dirty & /*$$props*/
          2 && get_spread_object(
            /*$$props*/
            ctx2[1]
          ),
          dirty & /*iconNode*/
          1 && { iconNode: (
            /*iconNode*/
            ctx2[0]
          ) }
        ]) : {};
        if (dirty & /*$$scope*/
        8) {
          icon_changes.$$scope = { dirty, ctx: ctx2 };
        }
        icon.$set(icon_changes);
      },
      i(local) {
        if (current) return;
        transition_in(icon.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(icon.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(icon, detaching);
      }
    };
  }
  function instance$8($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    const iconNode = [
      ["circle", { "cx": "12", "cy": "12", "r": "10" }],
      [
        "line",
        {
          "x1": "12",
          "x2": "12",
          "y1": "8",
          "y2": "12"
        }
      ],
      [
        "line",
        {
          "x1": "12",
          "x2": "12.01",
          "y1": "16",
          "y2": "16"
        }
      ]
    ];
    $$self.$$set = ($$new_props) => {
      $$invalidate(1, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
      if ("$$scope" in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
    };
    $$props = exclude_internal_props($$props);
    return [iconNode, $$props, slots, $$scope];
  }
  class Circle_alert extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$8, create_fragment$8, safe_not_equal, {});
    }
  }
  function create_default_slot$1(ctx) {
    let current;
    const default_slot_template = (
      /*#slots*/
      ctx[2].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[3],
      null
    );
    return {
      c() {
        if (default_slot) default_slot.c();
      },
      m(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/
          8)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[3],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[3]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[3],
                dirty,
                null
              ),
              null
            );
          }
        }
      },
      i(local) {
        if (current) return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (default_slot) default_slot.d(detaching);
      }
    };
  }
  function create_fragment$7(ctx) {
    let icon;
    let current;
    const icon_spread_levels = [
      { name: "triangle-alert" },
      /*$$props*/
      ctx[1],
      { iconNode: (
        /*iconNode*/
        ctx[0]
      ) }
    ];
    let icon_props = {
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    };
    for (let i = 0; i < icon_spread_levels.length; i += 1) {
      icon_props = assign(icon_props, icon_spread_levels[i]);
    }
    icon = new Icon({ props: icon_props });
    return {
      c() {
        create_component(icon.$$.fragment);
      },
      m(target, anchor) {
        mount_component(icon, target, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        const icon_changes = dirty & /*$$props, iconNode*/
        3 ? get_spread_update(icon_spread_levels, [
          icon_spread_levels[0],
          dirty & /*$$props*/
          2 && get_spread_object(
            /*$$props*/
            ctx2[1]
          ),
          dirty & /*iconNode*/
          1 && { iconNode: (
            /*iconNode*/
            ctx2[0]
          ) }
        ]) : {};
        if (dirty & /*$$scope*/
        8) {
          icon_changes.$$scope = { dirty, ctx: ctx2 };
        }
        icon.$set(icon_changes);
      },
      i(local) {
        if (current) return;
        transition_in(icon.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(icon.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(icon, detaching);
      }
    };
  }
  function instance$7($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
        }
      ],
      ["path", { "d": "M12 9v4" }],
      ["path", { "d": "M12 17h.01" }]
    ];
    $$self.$$set = ($$new_props) => {
      $$invalidate(1, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
      if ("$$scope" in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
    };
    $$props = exclude_internal_props($$props);
    return [iconNode, $$props, slots, $$scope];
  }
  class Triangle_alert extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$7, create_fragment$7, safe_not_equal, {});
    }
  }
  function create_default_slot(ctx) {
    let current;
    const default_slot_template = (
      /*#slots*/
      ctx[2].default
    );
    const default_slot = create_slot(
      default_slot_template,
      ctx,
      /*$$scope*/
      ctx[3],
      null
    );
    return {
      c() {
        if (default_slot) default_slot.c();
      },
      m(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & /*$$scope*/
          8)) {
            update_slot_base(
              default_slot,
              default_slot_template,
              ctx2,
              /*$$scope*/
              ctx2[3],
              !current ? get_all_dirty_from_scope(
                /*$$scope*/
                ctx2[3]
              ) : get_slot_changes(
                default_slot_template,
                /*$$scope*/
                ctx2[3],
                dirty,
                null
              ),
              null
            );
          }
        }
      },
      i(local) {
        if (current) return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (default_slot) default_slot.d(detaching);
      }
    };
  }
  function create_fragment$6(ctx) {
    let icon;
    let current;
    const icon_spread_levels = [
      { name: "x" },
      /*$$props*/
      ctx[1],
      { iconNode: (
        /*iconNode*/
        ctx[0]
      ) }
    ];
    let icon_props = {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    };
    for (let i = 0; i < icon_spread_levels.length; i += 1) {
      icon_props = assign(icon_props, icon_spread_levels[i]);
    }
    icon = new Icon({ props: icon_props });
    return {
      c() {
        create_component(icon.$$.fragment);
      },
      m(target, anchor) {
        mount_component(icon, target, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        const icon_changes = dirty & /*$$props, iconNode*/
        3 ? get_spread_update(icon_spread_levels, [
          icon_spread_levels[0],
          dirty & /*$$props*/
          2 && get_spread_object(
            /*$$props*/
            ctx2[1]
          ),
          dirty & /*iconNode*/
          1 && { iconNode: (
            /*iconNode*/
            ctx2[0]
          ) }
        ]) : {};
        if (dirty & /*$$scope*/
        8) {
          icon_changes.$$scope = { dirty, ctx: ctx2 };
        }
        icon.$set(icon_changes);
      },
      i(local) {
        if (current) return;
        transition_in(icon.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(icon.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(icon, detaching);
      }
    };
  }
  function instance$6($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    const iconNode = [["path", { "d": "M18 6 6 18" }], ["path", { "d": "m6 6 12 12" }]];
    $$self.$$set = ($$new_props) => {
      $$invalidate(1, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
      if ("$$scope" in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
    };
    $$props = exclude_internal_props($$props);
    return [iconNode, $$props, slots, $$scope];
  }
  class X extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$6, create_fragment$6, safe_not_equal, {});
    }
  }
  function create_if_block$2(ctx) {
    let div5;
    let div4;
    let div1;
    let div0;
    let current_block_type_index;
    let if_block0;
    let t0;
    let h3;
    let t1;
    let button;
    let x;
    let t2;
    let div2;
    let p;
    let raw_value = (
      /*config*/
      ctx[1].message + ""
    );
    let t3;
    let t4;
    let div3;
    let current;
    let mounted;
    let dispose;
    const if_block_creators = [create_if_block_5$1, create_if_block_6$1, create_else_block_2];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (
        /*config*/
        ctx2[1].type === "alert"
      ) return 0;
      if (
        /*config*/
        ctx2[1].type === "confirm"
      ) return 1;
      return 2;
    }
    current_block_type_index = select_block_type(ctx);
    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    function select_block_type_1(ctx2, dirty) {
      if (
        /*config*/
        ctx2[1].type === "alert"
      ) return create_if_block_3$2;
      if (
        /*config*/
        ctx2[1].type === "confirm"
      ) return create_if_block_4$2;
      return create_else_block_1;
    }
    let current_block_type = select_block_type_1(ctx);
    let if_block1 = current_block_type(ctx);
    x = new X({ props: { size: 16 } });
    let if_block2 = (
      /*config*/
      ctx[1].type === "prompt" && create_if_block_2$2(ctx)
    );
    function select_block_type_2(ctx2, dirty) {
      if (
        /*config*/
        ctx2[1].type === "alert"
      ) return create_if_block_1$2;
      return create_else_block$2;
    }
    let current_block_type_1 = select_block_type_2(ctx);
    let if_block3 = current_block_type_1(ctx);
    return {
      c() {
        div5 = element("div");
        div4 = element("div");
        div1 = element("div");
        div0 = element("div");
        if_block0.c();
        t0 = space();
        h3 = element("h3");
        if_block1.c();
        t1 = space();
        button = element("button");
        create_component(x.$$.fragment);
        t2 = space();
        div2 = element("div");
        p = element("p");
        t3 = space();
        if (if_block2) if_block2.c();
        t4 = space();
        div3 = element("div");
        if_block3.c();
        attr(h3, "class", "text-base font-semibold text-zinc-100");
        attr(div0, "class", "flex items-center gap-2.5");
        attr(button, "class", "p-1 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors flex-shrink-0");
        attr(button, "title", "Close");
        attr(button, "type", "button");
        attr(div1, "class", "flex items-center justify-between px-5 py-3 border-b border-zinc-800");
        attr(p, "class", "text-zinc-300 whitespace-pre-wrap text-sm leading-relaxed");
        attr(div2, "class", "px-5 py-4 bg-zinc-900/50");
        attr(div3, "class", "flex items-center justify-end gap-2 px-5 py-2 bg-zinc-800/50 rounded-b-lg border-t border-zinc-800");
        attr(div4, "class", "bg-zinc-900 rounded-lg shadow-2xl border border-zinc-700/60 max-w-sm w-full pointer-events-auto");
        attr(div5, "class", "fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 pointer-events-auto");
      },
      m(target, anchor) {
        insert(target, div5, anchor);
        append(div5, div4);
        append(div4, div1);
        append(div1, div0);
        if_blocks[current_block_type_index].m(div0, null);
        append(div0, t0);
        append(div0, h3);
        if_block1.m(h3, null);
        append(div1, t1);
        append(div1, button);
        mount_component(x, button, null);
        append(div4, t2);
        append(div4, div2);
        append(div2, p);
        p.innerHTML = raw_value;
        append(div2, t3);
        if (if_block2) if_block2.m(div2, null);
        append(div4, t4);
        append(div4, div3);
        if_block3.m(div3, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen(button, "click", stop_propagation(
              /*click_handler_1*/
              ctx[9]
            )),
            listen(div4, "click", stop_propagation(
              /*click_handler*/
              ctx[8]
            )),
            listen(
              div5,
              "click",
              /*click_handler_2*/
              ctx[13]
            ),
            listen(div5, "keydown", stop_propagation(
              /*keydown_handler*/
              ctx[7]
            ))
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2);
        if (current_block_type_index !== previous_block_index) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block0 = if_blocks[current_block_type_index];
          if (!if_block0) {
            if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block0.c();
          }
          transition_in(if_block0, 1);
          if_block0.m(div0, t0);
        }
        if (current_block_type !== (current_block_type = select_block_type_1(ctx2))) {
          if_block1.d(1);
          if_block1 = current_block_type(ctx2);
          if (if_block1) {
            if_block1.c();
            if_block1.m(h3, null);
          }
        }
        if ((!current || dirty & /*config*/
        2) && raw_value !== (raw_value = /*config*/
        ctx2[1].message + "")) p.innerHTML = raw_value;
        if (
          /*config*/
          ctx2[1].type === "prompt"
        ) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
          } else {
            if_block2 = create_if_block_2$2(ctx2);
            if_block2.c();
            if_block2.m(div2, null);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
        if (current_block_type_1 === (current_block_type_1 = select_block_type_2(ctx2)) && if_block3) {
          if_block3.p(ctx2, dirty);
        } else {
          if_block3.d(1);
          if_block3 = current_block_type_1(ctx2);
          if (if_block3) {
            if_block3.c();
            if_block3.m(div3, null);
          }
        }
      },
      i(local) {
        if (current) return;
        transition_in(if_block0);
        transition_in(x.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(if_block0);
        transition_out(x.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div5);
        }
        if_blocks[current_block_type_index].d();
        if_block1.d();
        destroy_component(x);
        if (if_block2) if_block2.d();
        if_block3.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_else_block_2(ctx) {
    let alertcircle;
    let current;
    alertcircle = new Circle_alert({
      props: {
        size: 18,
        class: "text-zinc-400 flex-shrink-0"
      }
    });
    return {
      c() {
        create_component(alertcircle.$$.fragment);
      },
      m(target, anchor) {
        mount_component(alertcircle, target, anchor);
        current = true;
      },
      i(local) {
        if (current) return;
        transition_in(alertcircle.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(alertcircle.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(alertcircle, detaching);
      }
    };
  }
  function create_if_block_6$1(ctx) {
    let alerttriangle;
    let current;
    alerttriangle = new Triangle_alert({
      props: {
        size: 18,
        class: "text-yellow-400 flex-shrink-0"
      }
    });
    return {
      c() {
        create_component(alerttriangle.$$.fragment);
      },
      m(target, anchor) {
        mount_component(alerttriangle, target, anchor);
        current = true;
      },
      i(local) {
        if (current) return;
        transition_in(alerttriangle.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(alerttriangle.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(alerttriangle, detaching);
      }
    };
  }
  function create_if_block_5$1(ctx) {
    let alertcircle;
    let current;
    alertcircle = new Circle_alert({
      props: {
        size: 18,
        class: "text-zinc-400 flex-shrink-0"
      }
    });
    return {
      c() {
        create_component(alertcircle.$$.fragment);
      },
      m(target, anchor) {
        mount_component(alertcircle, target, anchor);
        current = true;
      },
      i(local) {
        if (current) return;
        transition_in(alertcircle.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(alertcircle.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(alertcircle, detaching);
      }
    };
  }
  function create_else_block_1(ctx) {
    let t;
    return {
      c() {
        t = text("Input");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(t);
        }
      }
    };
  }
  function create_if_block_4$2(ctx) {
    let t;
    return {
      c() {
        t = text("Confirm");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(t);
        }
      }
    };
  }
  function create_if_block_3$2(ctx) {
    let t;
    return {
      c() {
        t = text("Alert");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching) {
          detach(t);
        }
      }
    };
  }
  function create_if_block_2$2(ctx) {
    let input;
    let mounted;
    let dispose;
    return {
      c() {
        input = element("input");
        attr(input, "type", "text");
        attr(input, "id", "popup-prompt-input");
        attr(input, "class", "mt-4 w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 transition-colors");
      },
      m(target, anchor) {
        insert(target, input, anchor);
        ctx[10](input);
        set_input_value(
          input,
          /*inputValue*/
          ctx[2]
        );
        if (!mounted) {
          dispose = [
            listen(
              input,
              "input",
              /*input_input_handler*/
              ctx[11]
            ),
            listen(
              input,
              "keydown",
              /*keydown_handler_1*/
              ctx[12]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*inputValue*/
        4 && input.value !== /*inputValue*/
        ctx2[2]) {
          set_input_value(
            input,
            /*inputValue*/
            ctx2[2]
          );
        }
      },
      d(detaching) {
        if (detaching) {
          detach(input);
        }
        ctx[10](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_else_block$2(ctx) {
    let button0;
    let t1;
    let button1;
    let mounted;
    let dispose;
    return {
      c() {
        button0 = element("button");
        button0.textContent = "확인";
        t1 = space();
        button1 = element("button");
        button1.textContent = "취소";
        attr(button0, "type", "button");
        attr(button0, "class", "px-4 py-2 rounded text-sm font-medium text-zinc-100 bg-zinc-700 hover:bg-zinc-600 transition-colors focus:outline-none focus:ring-1 focus:ring-zinc-500");
        attr(button1, "type", "button");
        attr(button1, "class", "px-4 py-2 rounded text-sm font-medium text-zinc-200 bg-zinc-700/50 hover:bg-zinc-600 transition-colors focus:outline-none focus:ring-1 focus:ring-zinc-500");
      },
      m(target, anchor) {
        insert(target, button0, anchor);
        insert(target, t1, anchor);
        insert(target, button1, anchor);
        if (!mounted) {
          dispose = [
            listen(button0, "click", stop_propagation(
              /*handleConfirm*/
              ctx[3]
            )),
            listen(button1, "click", stop_propagation(
              /*handleCancel*/
              ctx[4]
            ))
          ];
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching) {
          detach(button0);
          detach(t1);
          detach(button1);
        }
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_if_block_1$2(ctx) {
    let button;
    let mounted;
    let dispose;
    return {
      c() {
        button = element("button");
        button.textContent = "확인";
        attr(button, "type", "button");
        attr(button, "class", "px-4 py-2 rounded text-sm font-medium text-zinc-100 bg-zinc-700 hover:bg-zinc-600 transition-colors focus:outline-none focus:ring-1 focus:ring-zinc-500");
      },
      m(target, anchor) {
        insert(target, button, anchor);
        if (!mounted) {
          dispose = listen(button, "click", stop_propagation(
            /*handleConfirm*/
            ctx[3]
          ));
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching) {
          detach(button);
        }
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment$5(ctx) {
    let if_block_anchor;
    let current;
    let if_block = (
      /*config*/
      ctx[1] && create_if_block$2(ctx)
    );
    return {
      c() {
        if (if_block) if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (
          /*config*/
          ctx2[1]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & /*config*/
            2) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block$2(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(if_block_anchor);
        }
        if (if_block) if_block.d(detaching);
      }
    };
  }
  function instance$5($$self, $$props, $$invalidate) {
    let config;
    let $popupStore;
    component_subscribe($$self, popupStore, ($$value) => $$invalidate(6, $popupStore = $$value));
    let inputValue = "";
    let inputRef;
    let lastConfig = null;
    function handleConfirm() {
      if (config == null ? void 0 : config.onConfirm) {
        if (config.type === "prompt") {
          config.onConfirm(inputValue);
        } else {
          config.onConfirm();
        }
      }
    }
    function handleCancel() {
      if (config == null ? void 0 : config.onCancel) {
        config.onCancel();
      }
    }
    function handleKeydown(e) {
      if (e.key === "Escape") {
        if ((config == null ? void 0 : config.type) === "alert") {
          handleConfirm();
        } else {
          handleCancel();
        }
      } else if (e.key === "Enter" && (config == null ? void 0 : config.type) !== "prompt") {
        handleConfirm();
      }
    }
    onMount(() => {
      const handleGlobalKeydown = (e) => {
        if (config) {
          handleKeydown(e);
        }
      };
      window.addEventListener("keydown", handleGlobalKeydown);
      return () => window.removeEventListener("keydown", handleGlobalKeydown);
    });
    function keydown_handler(event) {
      bubble.call(this, $$self, event);
    }
    function click_handler(event) {
      bubble.call(this, $$self, event);
    }
    const click_handler_1 = () => config.type === "alert" ? handleConfirm() : handleCancel();
    function input_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        inputRef = $$value;
        $$invalidate(0, inputRef);
      });
    }
    function input_input_handler() {
      inputValue = this.value;
      $$invalidate(2, inputValue), $$invalidate(1, config), $$invalidate(5, lastConfig), $$invalidate(0, inputRef), $$invalidate(6, $popupStore);
    }
    const keydown_handler_1 = (e) => {
      if (e.key === "Enter") {
        handleConfirm();
      } else if (e.key === "Escape") {
        handleCancel();
      }
    };
    const click_handler_2 = () => config.type === "alert" ? handleConfirm() : handleCancel();
    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*$popupStore*/
      64) {
        $$invalidate(1, config = $popupStore);
      }
      if ($$self.$$.dirty & /*config, lastConfig, inputRef*/
      35) {
        if (config !== lastConfig) {
          $$invalidate(5, lastConfig = config);
          if (config && config.type === "prompt") {
            $$invalidate(2, inputValue = config.defaultValue || "");
            setTimeout(
              () => {
                inputRef == null ? void 0 : inputRef.focus();
                inputRef == null ? void 0 : inputRef.select();
              },
              0
            );
          }
        }
      }
    };
    return [
      inputRef,
      config,
      inputValue,
      handleConfirm,
      handleCancel,
      lastConfig,
      $popupStore,
      keydown_handler,
      click_handler,
      click_handler_1,
      input_binding,
      input_input_handler,
      keydown_handler_1,
      click_handler_2
    ];
  }
  class Popup extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$5, create_fragment$5, safe_not_equal, {});
    }
  }
  const alert = (message) => popupStore.alert(message);
  const confirm = (message) => popupStore.confirm(message);
  const prompt = (message, defaultValue) => popupStore.prompt(message, "");
  class EventEmitter {
    constructor() {
      __publicField(this, "events", /* @__PURE__ */ new Map());
    }
    on(event, listener) {
      if (!this.events.has(event)) {
        this.events.set(event, []);
      }
      this.events.get(event).push(listener);
    }
    off(event, listener) {
      if (!this.events.has(event)) return;
      const listeners = this.events.get(event);
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
    emit(event, ...args) {
      if (!this.events.has(event)) return;
      const listeners = this.events.get(event);
      for (const listener of listeners) {
        listener(...args);
      }
    }
    once(event, listener) {
      const onceWrapper = (...args) => {
        listener(...args);
        this.off(event, onceWrapper);
      };
      this.on(event, onceWrapper);
    }
  }
  const eventEmitter = new EventEmitter();
  var AppEvent = /* @__PURE__ */ ((AppEvent2) => {
    AppEvent2["USER_LOGOUT"] = "user:logout";
    AppEvent2["BACKUP_RESTORE"] = "backup:restore";
    return AppEvent2;
  })(AppEvent || {});
  const CODE_ASSIST_ENDPOINT = "https://cloudcode-pa.googleapis.com/v1internal";
  const _GCAManager = class _GCAManager {
    /**
     * Ensures the user is initialized for GCA (onboarded, project ID loaded, opt-out checked).
     * Returns the Project ID.
     */
    static async ensureInitialized() {
      if (this.projectId) {
        if (!this.serviceTier) this.serviceTier = RisuAPI.getArg(SERVICE_TIER);
        if (this.optOut === void 0) this.optOut = RisuAPI.getArg(OPT_OUT) === 1;
        return this.projectId;
      }
      const storedProjectId = RisuAPI.getArg(PROJECT_ID);
      if (storedProjectId) {
        this.projectId = storedProjectId;
        this.serviceTier = RisuAPI.getArg(SERVICE_TIER);
        this.optOut = RisuAPI.getArg(OPT_OUT) === 1;
        if (!this.optOut) {
          this.checkAndOptOutDataCollection().catch((e) => Logger.error(e));
        }
        return storedProjectId;
      }
      await this.initializeUser();
      if (!this.projectId) {
        throw new Error("Failed to initialize Gemini Code Assist project ID.");
      }
      return this.projectId;
    }
    static async initializeUser() {
      var _a, _b, _c, _d;
      const loadData = await this.fetchGCA("loadCodeAssist", {
        metadata: {
          ideType: "IDE_UNSPECIFIED",
          platform: "PLATFORM_UNSPECIFIED",
          pluginType: "GEMINI"
        }
      });
      let pid = loadData.cloudaicompanionProject;
      let tierId = (_a = loadData.currentTier) == null ? void 0 : _a.id;
      if (!loadData.currentTier) {
        Logger.log("User not onboarded. Starting onboarding...");
        const defaultTier = (_b = loadData.allowedTiers) == null ? void 0 : _b.find((t) => t.isDefault);
        tierId = (defaultTier == null ? void 0 : defaultTier.id) || "free-tier";
        const onboardReq = {
          tierId,
          cloudaicompanionProject: void 0,
          metadata: {
            ideType: "IDE_UNSPECIFIED",
            platform: "PLATFORM_UNSPECIFIED",
            pluginType: "GEMINI"
          }
        };
        let onboarded = false;
        while (!onboarded) {
          const lro = await this.fetchGCA("onboardUser", onboardReq);
          if (lro.done) {
            onboarded = true;
            pid = (_d = (_c = lro.response) == null ? void 0 : _c.cloudaicompanionProject) == null ? void 0 : _d.id;
          } else {
            await new Promise((resolve) => setTimeout(resolve, 2e3));
          }
        }
      }
      if (pid) {
        this.projectId = pid;
        RisuAPI.setArg(PROJECT_ID, pid);
      }
      if (tierId) {
        this.serviceTier = tierId;
        RisuAPI.setArg(SERVICE_TIER, tierId);
      }
      await this.checkAndOptOutDataCollection();
    }
    static async checkAndOptOutDataCollection() {
      try {
        const settings = await this.fetchGCA("getCodeAssistGlobalUserSetting", null, "GET");
        if (settings.freeTierDataCollectionOptin == true) {
          Logger.log("Opting out of data collection...");
          await this.fetchGCA("setCodeAssistGlobalUserSetting", {
            freeTierDataCollectionOptin: false
          });
        }
        this.optOut = true;
        RisuAPI.setArg(OPT_OUT, 1);
      } catch (e) {
        Logger.warn("Failed to update data collection settings:", e);
      }
    }
    static getCachedInfo() {
      return {
        projectId: this.projectId,
        serviceTier: this.serviceTier,
        optOut: this.optOut
      };
    }
    static clearCache() {
      this.projectId = void 0;
      this.serviceTier = void 0;
      this.optOut = void 0;
    }
    // Helper for fetch with Auth
    static async fetchGCA(path, body, method = "POST") {
      const url = `${CODE_ASSIST_ENDPOINT}:${path}`;
      const token = await AuthManager.getAccessToken();
      const options = {
        method,
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          "User-Agent": "GeminiCLI/1.0"
        }
      };
      if (body) {
        options.body = JSON.stringify(body);
      }
      const res = await fetch(url, options);
      if (!res.ok) {
        const text2 = await res.text();
        throw new Error(`GCA API Error (${res.status}): ${text2}`);
      }
      return res.json();
    }
    static async nativeFetchGCA(path, args) {
      const url = `${CODE_ASSIST_ENDPOINT}:${path}`;
      const token = await AuthManager.getAccessToken();
      const headers = { ...args.headers };
      headers["Authorization"] = `Bearer ${token}`;
      headers["User-Agent"] = "GeminiCLI/1.0";
      let body = args.body;
      const projectId = await this.ensureInitialized();
      if (typeof body === "string") {
        const parsed = JSON.parse(body);
        parsed.project = projectId;
        body = JSON.stringify(parsed);
      } else {
        Logger.warn("Cannot inject project ID into non-string body");
      }
      return RisuAPI.nativeFetch(url, {
        ...args,
        body,
        headers
      });
    }
    static async risuFetchGCA(path, args = {}) {
      const url = `${CODE_ASSIST_ENDPOINT}:${path}`;
      const token = await AuthManager.getAccessToken();
      const headers = { ...args.headers };
      headers["Authorization"] = `Bearer ${token}`;
      headers["User-Agent"] = "GeminiCLI/1.0";
      let body = args.body;
      const projectId = await this.ensureInitialized();
      if (typeof body === "object" && body !== null) {
        body = { ...body, project: projectId };
      } else {
        Logger.warn("Cannot inject project ID into non-object body");
      }
      return RisuAPI.risuFetch(url, {
        ...args,
        body,
        headers
      });
    }
  };
  __publicField(_GCAManager, "projectId");
  __publicField(_GCAManager, "serviceTier");
  __publicField(_GCAManager, "optOut");
  eventEmitter.on(AppEvent.USER_LOGOUT, () => _GCAManager.clearCache());
  eventEmitter.on(AppEvent.BACKUP_RESTORE, () => _GCAManager.clearCache());
  let GCAManager = _GCAManager;
  const CLIENT_ID = "681255809395-oo8ft2oprdrnp9e3aqf6av3hmdib135j.apps.googleusercontent.com";
  const CLIENT_SECRET = "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";
  const SCOPES = [
    "https://www.googleapis.com/auth/cloud-platform",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile"
  ].join(" ");
  const _AuthManager = class _AuthManager {
    static async getAccessToken() {
      if (!this.isLoggedIn()) {
        throw new Error("User is not logged in");
      }
      const accessToken = RisuAPI.getArg(ACCESS_TOKEN);
      const accessTokenExpiresStr = RisuAPI.getArg(ACCESS_TOKEN_EXPIRES);
      if (!accessToken || !accessTokenExpiresStr) {
        return await this.login();
      }
      const accessTokenExpires = new Date(accessTokenExpiresStr);
      if ((/* @__PURE__ */ new Date()).getTime() + 60 * 1e3 < accessTokenExpires.getTime()) {
        return accessToken;
      }
      try {
        Logger.log("Token expired, refreshing...");
        return await this.refreshAccessToken();
      } catch (e) {
        Logger.log("Refresh failed, prompting user...", e);
        return await this.login();
      }
    }
    static isLoggedIn() {
      return RisuAPI.getArg(IS_LOGGED_IN) === 1;
    }
    static async login() {
      return new Promise((resolve, reject) => {
        const redirectUri = "http://localhost:3000/oauth2callback";
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${encodeURIComponent(SCOPES)}&access_type=offline&prompt=consent`;
        try {
          const width = 600;
          const height = 600;
          const left = window.screen.width / 2 - width / 2;
          const top = window.screen.height / 2 - height / 2;
          window.open(
            authUrl,
            "google_auth",
            `width=${width},height=${height},top=${top},left=${left}`
          );
        } catch (e) {
          Logger.error("Failed to open auth window", e);
        }
        setTimeout(async () => {
          const message = `Log in to Google and PASTE the full URL you were redirected to.

If the window did not open, please copy the URL below and open it in your browser:
<a href="${authUrl}" target="_blank" class="block p-2 bg-zinc-950 rounded border border-zinc-800 break-all select-all cursor-pointer font-mono text-xs my-2 text-zinc-400 hover:text-zinc-300">${authUrl}</a>`;
          const pastedUrl = await prompt(message);
          if (pastedUrl) {
            try {
              let code = pastedUrl.trim();
              if (code.includes("code=")) {
                const match = code.match(/[?&]code=([^&]+)/);
                if (match) {
                  code = match[1];
                } else {
                  reject(new Error("Could not find code in URL"));
                  return;
                }
              }
              if (code && code.length > 10) {
                _AuthManager.exchangeCodeForToken(code, redirectUri).then((tokens) => resolve(tokens.access_token)).catch((e) => reject(e));
              } else {
                reject(new Error("Could not find valid code"));
              }
            } catch (e) {
              Logger.error("Login error:", e);
              reject(new Error(`Invalid URL or code: ${e}`));
            }
          } else {
            reject(new Error("Login cancelled"));
          }
        }, 100);
      });
    }
    static async exchangeCodeForToken(code, redirectUri) {
      const params = new URLSearchParams();
      params.append("code", code);
      params.append("client_id", CLIENT_ID);
      params.append("client_secret", CLIENT_SECRET);
      params.append("redirect_uri", redirectUri);
      params.append("grant_type", "authorization_code");
      const response = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to exchange code for token: ${errorText}`);
      }
      const tokens = await response.json();
      this.saveTokens(tokens);
      return tokens;
    }
    static async refreshAccessToken() {
      const refreshToken = RisuAPI.getArg(REFRESH_TOKEN);
      if (!refreshToken) {
        throw new Error("No refresh token available");
      }
      const params = new URLSearchParams();
      params.append("refresh_token", refreshToken);
      params.append("client_id", CLIENT_ID);
      params.append("client_secret", CLIENT_SECRET);
      params.append("grant_type", "refresh_token");
      const response = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to refresh token: ${errorText}`);
      }
      const tokens = await response.json();
      this.saveTokens(tokens);
      return tokens.access_token;
    }
    static saveTokens(tokens) {
      const expiresIn = tokens.expires_in;
      const expiresAt = new Date((/* @__PURE__ */ new Date()).getTime() + expiresIn * 1e3);
      RisuAPI.setArg(IS_LOGGED_IN, 1);
      RisuAPI.setArg(ACCESS_TOKEN, tokens.access_token);
      RisuAPI.setArg(ACCESS_TOKEN_EXPIRES, expiresAt.toISOString());
      if (tokens.refresh_token) {
        RisuAPI.setArg(REFRESH_TOKEN, tokens.refresh_token);
      }
    }
    static logout() {
      this.userProfileCache = null;
      RisuAPI.setArg(IS_LOGGED_IN, 0);
      RisuAPI.setArg(ACCESS_TOKEN, "");
      RisuAPI.setArg(ACCESS_TOKEN_EXPIRES, "");
      RisuAPI.setArg(REFRESH_TOKEN, "");
      RisuAPI.setArg(PROJECT_ID, "");
      RisuAPI.setArg(SERVICE_TIER, "");
      RisuAPI.setArg(OPT_OUT, 0);
      eventEmitter.emit(AppEvent.USER_LOGOUT);
    }
    static async fetchUserProfile() {
      if (this.userProfileCache) {
        return this.userProfileCache;
      }
      try {
        const token = await this.getAccessToken();
        const res = await fetch(
          "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        if (res.ok) {
          this.userProfileCache = await res.json();
          return this.userProfileCache;
        }
      } catch (e) {
        Logger.error("Failed to fetch user profile:", e);
      }
      return null;
    }
  };
  __publicField(_AuthManager, "userProfileCache", null);
  eventEmitter.on(AppEvent.BACKUP_RESTORE, () => _AuthManager.userProfileCache = null);
  eventEmitter.on(AppEvent.USER_LOGOUT, () => _AuthManager.userProfileCache = null);
  let AuthManager = _AuthManager;
  var RequestType = /* @__PURE__ */ ((RequestType2) => {
    RequestType2["Chat"] = "chat";
    RequestType2["Memory"] = "memory";
    RequestType2["Emotion"] = "emotion";
    RequestType2["Translate"] = "translate";
    RequestType2["Other"] = "other";
    RequestType2["Unknown"] = "unknown";
    return RequestType2;
  })(RequestType || {});
  function downloadFile(content, fileName, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  function readFileAsText(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = () => {
        reject(reader.error);
      };
      reader.readAsText(file);
    });
  }
  function debounce(func2, wait2) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        func2.apply(context, args);
      }, wait2);
    };
  }
  function parseRequestType(mode) {
    switch (mode) {
      case "model":
        return RequestType.Chat;
      case "memory":
        return RequestType.Memory;
      case "emotion":
        return RequestType.Emotion;
      case "translate":
        return RequestType.Translate;
      case "otherAx":
      case "submodel":
        return RequestType.Other;
      default:
        return RequestType.Unknown;
    }
  }
  const _ModelManager = class _ModelManager {
    static init() {
      try {
        const storedMap = RisuAPI.getArg(MODEL_CONFIG);
        this.config = storedMap ? JSON.parse(storedMap) : {};
      } catch (e) {
        this.config = {};
        this.debouncedSave();
      }
    }
    static getConfig(type) {
      if (!this.config[type]) {
        this.config[type] = { model_id: "gemini-3-flash-preview", parameters: {} };
        this.debouncedSave();
      }
      return this.config[type];
    }
    static setConfig(type, { model_id, parameters }) {
      this.config[type] = { model_id, parameters };
      this.debouncedSave();
    }
  };
  __publicField(_ModelManager, "config", {});
  __publicField(_ModelManager, "DEBOUNCE_WAIT", 500);
  eventEmitter.on(AppEvent.BACKUP_RESTORE, () => _ModelManager.init());
  __publicField(_ModelManager, "debouncedSave", debounce(() => {
    RisuAPI.setArg(MODEL_CONFIG, JSON.stringify(_ModelManager.config));
  }, _ModelManager.DEBOUNCE_WAIT));
  let ModelManager = _ModelManager;
  function getPluginParams(args) {
    return {
      frequency_penalty: args.frequency_penalty,
      presence_penalty: args.presence_penalty,
      repetition_penalty: args.repetition_penalty,
      min_p: args.min_p,
      top_k: args.top_k,
      top_p: args.top_p,
      temperature: args.temperature,
      max_tokens: args.max_tokens
    };
  }
  function applyPluginParams(params, pluginParams) {
    const newParams = { ...params };
    for (const [key, value] of Object.entries(pluginParams)) {
      if (value !== void 0 && !(key in newParams)) {
        newParams[key] = value;
      }
    }
    return newParams;
  }
  function getGenerationConfig(params) {
    const generationConfig = {};
    if (params.frequency_penalty) generationConfig.frequencyPenalty = params.frequency_penalty;
    if (params.presence_penalty) generationConfig.presencePenalty = params.presence_penalty;
    if (params.repetition_penalty) generationConfig.repetitionPenalty = params.repetition_penalty;
    if (params.min_p) generationConfig.minP = params.min_p;
    if (params.top_k) generationConfig.topK = params.top_k;
    if (params.top_p) generationConfig.topP = params.top_p;
    if (params.temperature) generationConfig.temperature = params.temperature;
    if (params.max_tokens) generationConfig.maxOutputTokens = params.max_tokens;
    if (params.seed !== void 0) generationConfig.seed = params.seed;
    generationConfig.thinkingConfig = { includeThoughts: true };
    if (params.thinking_level) generationConfig.thinkingConfig.thinkingLevel = params.thinking_level;
    if (params.thinking_tokens) generationConfig.thinkingConfig.thinkingBudget = params.thinking_tokens;
    if (params.media_resolution) generationConfig.mediaResolution = params.media_resolution;
    if (params.stop_sequences) generationConfig.stopSequences = params.stop_sequences;
    return generationConfig;
  }
  function getSafetySettings() {
    return [
      {
        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        threshold: "BLOCK_NONE"
      },
      {
        category: "HARM_CATEGORY_HATE_SPEECH",
        threshold: "BLOCK_NONE"
      },
      {
        category: "HARM_CATEGORY_HARASSMENT",
        threshold: "BLOCK_NONE"
      },
      {
        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
        threshold: "BLOCK_NONE"
      },
      {
        category: "HARM_CATEGORY_CIVIC_INTEGRITY",
        threshold: "BLOCK_NONE"
      }
    ];
  }
  var SegmentType = /* @__PURE__ */ ((SegmentType2) => {
    SegmentType2["Text"] = "text";
    SegmentType2["Expr"] = "expr";
    SegmentType2["Comment"] = "comment";
    SegmentType2["CloseBlock"] = "close";
    SegmentType2["CatchAll"] = "catch_all";
    return SegmentType2;
  })(SegmentType || {});
  function tokenize(source) {
    const segments = [];
    let i = 0;
    let textStart = 0;
    while (i < source.length) {
      if (source[i] === "{" && i + 1 < source.length && source[i + 1] === "{") {
        if (i > textStart) {
          segments.push({ type: "text", value: source.slice(textStart, i), pos: textStart });
        }
        const tagStart = i;
        i += 2;
        if (source[i] === "-" && source[i + 1] === "-") {
          i += 2;
          const closeIdx = source.indexOf("--}}", i);
          if (closeIdx === -1) {
            segments.push({ type: "text", value: source.slice(tagStart), pos: tagStart });
            i = source.length;
          } else {
            segments.push({ type: "comment", value: source.slice(i, closeIdx).trim(), pos: tagStart });
            i = closeIdx + 4;
          }
          textStart = i;
          continue;
        }
        let depth = 1;
        let exprStart = i;
        while (i < source.length && depth > 0) {
          if (source[i] === "{" && i + 1 < source.length && source[i + 1] === "{") {
            depth++;
            i += 2;
          } else if (source[i] === "}" && i + 1 < source.length && source[i + 1] === "}") {
            depth--;
            if (depth === 0) break;
            i += 2;
          } else {
            i++;
          }
        }
        const inner = source.slice(exprStart, i).trim();
        i += 2;
        if (inner === "/") {
          segments.push({ type: "close", value: "/", pos: tagStart });
        } else if (inner === "_") {
          segments.push({ type: "catch_all", value: "_", pos: tagStart });
        } else {
          segments.push({ type: "expr", value: inner, pos: tagStart });
        }
        textStart = i;
      } else {
        i++;
      }
    }
    if (textStart < source.length) {
      segments.push({ type: "text", value: source.slice(textStart), pos: textStart });
    }
    return segments;
  }
  var ExprTokenType = /* @__PURE__ */ ((ExprTokenType2) => {
    ExprTokenType2["Ident"] = "ident";
    ExprTokenType2["ContextRef"] = "context_ref";
    ExprTokenType2["VarRef"] = "var_ref";
    ExprTokenType2["String"] = "string";
    ExprTokenType2["Number"] = "number";
    ExprTokenType2["Bool"] = "bool";
    ExprTokenType2["Pipe"] = "pipe";
    ExprTokenType2["Dot"] = "dot";
    ExprTokenType2["LParen"] = "lparen";
    ExprTokenType2["RParen"] = "rparen";
    ExprTokenType2["Comma"] = "comma";
    ExprTokenType2["Arrow"] = "arrow";
    ExprTokenType2["Eq"] = "eq";
    ExprTokenType2["Neq"] = "neq";
    ExprTokenType2["Lt"] = "lt";
    ExprTokenType2["Gt"] = "gt";
    ExprTokenType2["Lte"] = "lte";
    ExprTokenType2["Gte"] = "gte";
    ExprTokenType2["And"] = "and";
    ExprTokenType2["Or"] = "or";
    ExprTokenType2["Not"] = "not";
    ExprTokenType2["Plus"] = "plus";
    ExprTokenType2["Minus"] = "minus";
    ExprTokenType2["Star"] = "star";
    ExprTokenType2["Slash"] = "slash";
    ExprTokenType2["Percent"] = "percent";
    ExprTokenType2["Assign"] = "assign";
    ExprTokenType2["In"] = "in";
    ExprTokenType2["Underscore"] = "underscore";
    ExprTokenType2["EOF"] = "eof";
    return ExprTokenType2;
  })(ExprTokenType || {});
  const KEYWORDS = {
    "true": "bool",
    "false": "bool",
    "in": "in"
    /* In */
  };
  function tokenizeExpr(source) {
    const tokens = [];
    let i = 0;
    while (i < source.length) {
      if (/\s/.test(source[i])) {
        i++;
        continue;
      }
      const pos = i;
      if (source[i] === "@") {
        i++;
        let name = "";
        while (i < source.length && /[a-zA-Z0-9_]/.test(source[i])) {
          name += source[i++];
        }
        tokens.push({ type: "context_ref", value: name, pos });
        continue;
      }
      if (source[i] === "$") {
        i++;
        let name = "";
        while (i < source.length && /[a-zA-Z0-9_]/.test(source[i])) {
          name += source[i++];
        }
        tokens.push({ type: "var_ref", value: name, pos });
        continue;
      }
      if (source[i] === '"' || source[i] === "'") {
        const quote = source[i++];
        let str = "";
        while (i < source.length && source[i] !== quote) {
          if (source[i] === "\\" && i + 1 < source.length) {
            i++;
            switch (source[i]) {
              case "n":
                str += "\n";
                break;
              case "t":
                str += "	";
                break;
              case "\\":
                str += "\\";
                break;
              default:
                str += source[i];
                break;
            }
          } else {
            str += source[i];
          }
          i++;
        }
        i++;
        tokens.push({ type: "string", value: str, pos });
        continue;
      }
      if (/[0-9]/.test(source[i]) || source[i] === "-" && i + 1 < source.length && /[0-9]/.test(source[i + 1])) {
        let num = "";
        if (source[i] === "-") num += source[i++];
        while (i < source.length && /[0-9.]/.test(source[i])) {
          num += source[i++];
        }
        tokens.push({ type: "number", value: num, pos });
        continue;
      }
      if (i + 1 < source.length) {
        const two = source[i] + source[i + 1];
        const twoCharOps = {
          "==": "eq",
          "!=": "neq",
          "<=": "lte",
          ">=": "gte",
          "&&": "and",
          "||": "or",
          "->": "arrow"
          /* Arrow */
        };
        if (twoCharOps[two]) {
          tokens.push({ type: twoCharOps[two], value: two, pos });
          i += 2;
          continue;
        }
      }
      const singleCharOps = {
        "|": "pipe",
        ".": "dot",
        "(": "lparen",
        ")": "rparen",
        ",": "comma",
        "<": "lt",
        ">": "gt",
        "!": "not",
        "+": "plus",
        "-": "minus",
        "*": "star",
        "/": "slash",
        "%": "percent",
        "=": "assign",
        "_": "underscore"
        /* Underscore */
      };
      if (singleCharOps[source[i]]) {
        if (source[i] === "_" && i + 1 < source.length && /[a-zA-Z0-9_]/.test(source[i + 1])) ;
        else if (singleCharOps[source[i]]) {
          tokens.push({ type: singleCharOps[source[i]], value: source[i], pos });
          i++;
          continue;
        }
      }
      if (/[a-zA-Z_]/.test(source[i])) {
        let ident = "";
        while (i < source.length && /[a-zA-Z0-9_]/.test(source[i])) {
          ident += source[i++];
        }
        if (KEYWORDS[ident]) {
          tokens.push({ type: KEYWORDS[ident], value: ident, pos });
        } else {
          tokens.push({ type: "ident", value: ident, pos });
        }
        continue;
      }
      i++;
    }
    tokens.push({ type: "eof", value: "", pos: i });
    return tokens;
  }
  var NodeKind = /* @__PURE__ */ ((NodeKind2) => {
    NodeKind2["Text"] = "text";
    NodeKind2["Expr"] = "expr";
    NodeKind2["Iteration"] = "iteration";
    NodeKind2["Match"] = "match";
    NodeKind2["Comment"] = "comment";
    return NodeKind2;
  })(NodeKind || {});
  var ExprKind = /* @__PURE__ */ ((ExprKind2) => {
    ExprKind2["Literal"] = "literal";
    ExprKind2["ContextRef"] = "context_ref";
    ExprKind2["Variable"] = "variable";
    ExprKind2["FieldAccess"] = "field_access";
    ExprKind2["Pipe"] = "pipe";
    ExprKind2["Lambda"] = "lambda";
    ExprKind2["FnCall"] = "fn_call";
    ExprKind2["BinaryOp"] = "binary_op";
    ExprKind2["UnaryOp"] = "unary_op";
    ExprKind2["CatchAll"] = "catch_all";
    return ExprKind2;
  })(ExprKind || {});
  function parse(source) {
    const segments = tokenize(source);
    return parseSegments(segments, 0).nodes;
  }
  function parseSegments(segments, start) {
    const nodes = [];
    let i = start;
    while (i < segments.length) {
      const seg = segments[i];
      switch (seg.type) {
        case SegmentType.Text:
          nodes.push({ kind: NodeKind.Text, value: seg.value });
          i++;
          break;
        case SegmentType.Comment:
          nodes.push({ kind: NodeKind.Comment, value: seg.value });
          i++;
          break;
        case SegmentType.CloseBlock:
          return { nodes, consumed: i - start + 1 };
        case SegmentType.CatchAll:
          return { nodes, consumed: i - start };
        case SegmentType.Expr: {
          const exprStr = seg.value;
          const iterMatch = exprStr.match(/^(\w+)\s+in\s+(.+)$/);
          if (iterMatch) {
            const binding = iterMatch[1];
            const iterableExpr = parseExpr(iterMatch[2]);
            i++;
            const bodyResult = parseSegments(segments, i);
            i += bodyResult.consumed;
            nodes.push({
              kind: NodeKind.Iteration,
              binding,
              iterable: iterableExpr,
              body: bodyResult.nodes
            });
            break;
          }
          const matchPatternMatch = exprStr.match(/^(.+?)\s*=\s*(.*)$/);
          if (matchPatternMatch && !exprStr.includes("==") && !exprStr.includes("!=") && !exprStr.includes("<=") && !exprStr.includes(">=")) {
            const subjectStr = matchPatternMatch[2].trim();
            const patternStr = matchPatternMatch[1].trim();
            const subject = subjectStr ? parseExpr(subjectStr) : null;
            const branches = [];
            const firstPattern = parseExpr(patternStr);
            i++;
            const firstBody = parseSegments(segments, i);
            i += firstBody.consumed;
            branches.push({ pattern: firstPattern, body: firstBody.nodes });
            while (i < segments.length) {
              const nextSeg = segments[i];
              if (nextSeg.type === SegmentType.CloseBlock) {
                i++;
                break;
              }
              if (nextSeg.type === SegmentType.CatchAll) {
                i++;
                const catchBody = parseSegments(segments, i);
                i += catchBody.consumed;
                branches.push({ pattern: null, body: catchBody.nodes });
                if (i < segments.length && segments[i].type === SegmentType.CloseBlock) {
                  i++;
                }
                break;
              }
              if (nextSeg.type === SegmentType.Expr) {
                const branchMatch = nextSeg.value.match(/^(.+?)\s*=\s*$/);
                if (branchMatch) {
                  const branchPattern = parseExpr(branchMatch[1].trim());
                  i++;
                  const branchBody = parseSegments(segments, i);
                  i += branchBody.consumed;
                  branches.push({ pattern: branchPattern, body: branchBody.nodes });
                  continue;
                }
              }
              break;
            }
            const matchSubject = subject || { kind: ExprKind.ContextRef, name: "input" };
            nodes.push({
              kind: NodeKind.Match,
              subject: matchSubject,
              branches
            });
            break;
          }
          const expr = parseExpr(exprStr);
          nodes.push({ kind: NodeKind.Expr, expr });
          i++;
          break;
        }
        default:
          i++;
          break;
      }
    }
    return { nodes, consumed: i - start };
  }
  function parseExpr(source) {
    const tokens = tokenizeExpr(source);
    const parser = new ExprParser(tokens);
    return parser.parseExpression();
  }
  class ExprParser {
    constructor(tokens) {
      __publicField(this, "tokens");
      __publicField(this, "pos", 0);
      this.tokens = tokens;
    }
    peek() {
      return this.tokens[this.pos] || { type: ExprTokenType.EOF, value: "", pos: -1 };
    }
    advance() {
      const token = this.tokens[this.pos];
      this.pos++;
      return token;
    }
    expect(type) {
      const token = this.advance();
      if (token.type !== type) {
        throw new Error(`Expected ${type} but got ${token.type} (${token.value}) at pos ${token.pos}`);
      }
      return token;
    }
    parseExpression() {
      return this.parsePipe();
    }
    /** pipe: or_expr ("|" ident ("(" args ")")?)* */
    parsePipe() {
      let left = this.parseLambda();
      while (this.peek().type === ExprTokenType.Pipe) {
        this.advance();
        const fnName = this.expect(ExprTokenType.Ident).value;
        let args = [];
        if (this.peek().type === ExprTokenType.LParen) {
          this.advance();
          args = this.parseArgList();
          this.expect(ExprTokenType.RParen);
        }
        left = {
          kind: ExprKind.Pipe,
          input: left,
          fn: fnName,
          args
        };
      }
      return left;
    }
    /** lambda: or_expr ("->" lambda | or_expr)? */
    parseLambda() {
      const expr = this.parseOr();
      if (this.peek().type === ExprTokenType.Arrow) {
        this.advance();
        let paramName;
        if (expr.kind === ExprKind.Variable) {
          paramName = expr.name;
        } else if (expr.kind === ExprKind.ContextRef) {
          paramName = expr.name;
        } else if (expr.kind === ExprKind.Literal && typeof expr.value === "string") {
          paramName = expr.value;
        } else {
          throw new Error(`Invalid lambda parameter: expected identifier, got ${expr.kind}`);
        }
        const body = this.parseLambda();
        return { kind: ExprKind.Lambda, param: paramName, body };
      }
      return expr;
    }
    /** or: and ("||" and)* */
    parseOr() {
      let left = this.parseAnd();
      while (this.peek().type === ExprTokenType.Or) {
        this.advance();
        const right = this.parseAnd();
        left = { kind: ExprKind.BinaryOp, op: "||", left, right };
      }
      return left;
    }
    /** and: equality ("&&" equality)* */
    parseAnd() {
      let left = this.parseEquality();
      while (this.peek().type === ExprTokenType.And) {
        this.advance();
        const right = this.parseEquality();
        left = { kind: ExprKind.BinaryOp, op: "&&", left, right };
      }
      return left;
    }
    /** equality: comparison (("==" | "!=") comparison)* */
    parseEquality() {
      let left = this.parseComparison();
      while (this.peek().type === ExprTokenType.Eq || this.peek().type === ExprTokenType.Neq) {
        const op = this.advance().type === ExprTokenType.Eq ? "==" : "!=";
        const right = this.parseComparison();
        left = { kind: ExprKind.BinaryOp, op, left, right };
      }
      return left;
    }
    /** comparison: addition (("<" | ">" | "<=" | ">=") addition)* */
    parseComparison() {
      let left = this.parseAddition();
      const compOps = [ExprTokenType.Lt, ExprTokenType.Gt, ExprTokenType.Lte, ExprTokenType.Gte];
      while (compOps.includes(this.peek().type)) {
        const token = this.advance();
        const opMap = {
          [ExprTokenType.Lt]: "<",
          [ExprTokenType.Gt]: ">",
          [ExprTokenType.Lte]: "<=",
          [ExprTokenType.Gte]: ">="
        };
        const right = this.parseAddition();
        left = { kind: ExprKind.BinaryOp, op: opMap[token.type], left, right };
      }
      return left;
    }
    /** addition: multiplication (("+" | "-") multiplication)* */
    parseAddition() {
      let left = this.parseMultiplication();
      while (this.peek().type === ExprTokenType.Plus || this.peek().type === ExprTokenType.Minus) {
        const op = this.advance().type === ExprTokenType.Plus ? "+" : "-";
        const right = this.parseMultiplication();
        left = { kind: ExprKind.BinaryOp, op, left, right };
      }
      return left;
    }
    /** multiplication: unary (("*" | "/" | "%") unary)* */
    parseMultiplication() {
      let left = this.parseUnary();
      while (this.peek().type === ExprTokenType.Star || this.peek().type === ExprTokenType.Slash || this.peek().type === ExprTokenType.Percent) {
        const token = this.advance();
        const opMap = {
          [ExprTokenType.Star]: "*",
          [ExprTokenType.Slash]: "/",
          [ExprTokenType.Percent]: "%"
        };
        const right = this.parseUnary();
        left = { kind: ExprKind.BinaryOp, op: opMap[token.type], left, right };
      }
      return left;
    }
    /** unary: "!" unary | postfix */
    parseUnary() {
      if (this.peek().type === ExprTokenType.Not) {
        this.advance();
        const operand = this.parseUnary();
        return { kind: ExprKind.UnaryOp, op: "!", operand };
      }
      return this.parsePostfix();
    }
    /** postfix: primary ("." ident)* */
    parsePostfix() {
      let expr = this.parsePrimary();
      while (this.peek().type === ExprTokenType.Dot) {
        this.advance();
        const field = this.expect(ExprTokenType.Ident).value;
        expr = { kind: ExprKind.FieldAccess, object: expr, field };
      }
      return expr;
    }
    /** primary: literal | context_ref | var_ref | ident | "(" expr ")" | "_" */
    parsePrimary() {
      const token = this.peek();
      switch (token.type) {
        case ExprTokenType.String:
          this.advance();
          return { kind: ExprKind.Literal, value: token.value };
        case ExprTokenType.Number:
          this.advance();
          return { kind: ExprKind.Literal, value: parseFloat(token.value) };
        case ExprTokenType.Bool:
          this.advance();
          return { kind: ExprKind.Literal, value: token.value === "true" };
        case ExprTokenType.ContextRef:
          this.advance();
          return { kind: ExprKind.ContextRef, name: token.value };
        case ExprTokenType.VarRef:
          this.advance();
          return { kind: ExprKind.Variable, name: token.value };
        case ExprTokenType.Ident: {
          this.advance();
          const name = token.value;
          if (this.peek().type === ExprTokenType.LParen) {
            this.advance();
            const args = this.parseArgList();
            this.expect(ExprTokenType.RParen);
            return { kind: ExprKind.FnCall, name, args };
          }
          return { kind: ExprKind.Variable, name };
        }
        case ExprTokenType.Underscore:
          this.advance();
          return { kind: ExprKind.CatchAll };
        case ExprTokenType.LParen: {
          this.advance();
          const expr = this.parseExpression();
          this.expect(ExprTokenType.RParen);
          return expr;
        }
        default:
          return { kind: ExprKind.Literal, value: "" };
      }
    }
    parseArgList() {
      const args = [];
      if (this.peek().type === ExprTokenType.RParen) return args;
      args.push(this.parseExpression());
      while (this.peek().type === ExprTokenType.Comma) {
        this.advance();
        args.push(this.parseExpression());
      }
      return args;
    }
  }
  const builtins = {
    // Type conversion
    to_string: (input) => {
      if (input === null) return "null";
      if (Array.isArray(input)) return JSON.stringify(input);
      if (typeof input === "object") return JSON.stringify(input);
      return String(input);
    },
    to_int: (input) => {
      if (typeof input === "number") return Math.floor(input);
      if (typeof input === "string") return parseInt(input, 10) || 0;
      if (typeof input === "boolean") return input ? 1 : 0;
      return 0;
    },
    to_float: (input) => {
      if (typeof input === "number") return input;
      if (typeof input === "string") return parseFloat(input) || 0;
      return 0;
    },
    // String operations
    trim: (input) => {
      return typeof input === "string" ? input.trim() : input;
    },
    trim_start: (input) => {
      return typeof input === "string" ? input.trimStart() : input;
    },
    trim_end: (input) => {
      return typeof input === "string" ? input.trimEnd() : input;
    },
    upper: (input) => {
      return typeof input === "string" ? input.toUpperCase() : input;
    },
    lower: (input) => {
      return typeof input === "string" ? input.toLowerCase() : input;
    },
    replace_str: (input, from, to) => {
      if (typeof input !== "string") return input;
      return input.replaceAll(String(from), String(to));
    },
    split_str: (input, separator) => {
      if (typeof input !== "string") return [];
      return input.split(String(separator));
    },
    contains_str: (input, search) => {
      if (typeof input !== "string") return false;
      return input.includes(String(search));
    },
    starts_with_str: (input, prefix) => {
      if (typeof input !== "string") return false;
      return input.startsWith(String(prefix));
    },
    ends_with_str: (input, suffix) => {
      if (typeof input !== "string") return false;
      return input.endsWith(String(suffix));
    },
    substring: (input, start, end) => {
      if (typeof input !== "string") return input;
      const s = typeof start === "number" ? start : 0;
      const e = typeof end === "number" ? end : void 0;
      return input.substring(s, e);
    },
    len_str: (input) => {
      if (typeof input !== "string") return 0;
      return input.length;
    },
    repeat_str: (input, count) => {
      if (typeof input !== "string") return input;
      return input.repeat(typeof count === "number" ? count : 0);
    },
    // List operations
    len: (input) => {
      if (Array.isArray(input)) return input.length;
      if (typeof input === "string") return input.length;
      return 0;
    },
    filter: (input, predicate) => {
      if (!Array.isArray(input) || typeof predicate !== "function") return input;
      return input.filter(predicate);
    },
    map: (input, mapper) => {
      if (!Array.isArray(input) || typeof mapper !== "function") return input;
      return input.map(mapper);
    },
    find: (input, predicate) => {
      if (!Array.isArray(input) || typeof predicate !== "function") return null;
      return input.find(predicate) ?? null;
    },
    reduce: (input, reducer, initial) => {
      if (!Array.isArray(input) || typeof reducer !== "function") return input;
      return initial !== void 0 ? input.reduce(reducer, initial) : input.reduce(reducer);
    },
    any: (input, predicate) => {
      if (!Array.isArray(input) || typeof predicate !== "function") return false;
      return input.some(predicate);
    },
    all: (input, predicate) => {
      if (!Array.isArray(input) || typeof predicate !== "function") return false;
      return input.every(predicate);
    },
    reverse: (input) => {
      if (!Array.isArray(input)) return input;
      return [...input].reverse();
    },
    flatten: (input) => {
      if (!Array.isArray(input)) return input;
      return input.flat();
    },
    join: (input, separator) => {
      if (!Array.isArray(input)) return input;
      const sep = typeof separator === "string" ? separator : "";
      return input.map((v) => v === null ? "" : String(v)).join(sep);
    },
    contains: (input, value) => {
      if (!Array.isArray(input)) return false;
      return input.includes(value);
    },
    // Utility
    unwrap: (input) => {
      return input === null ? "" : input;
    }
  };
  function getBuiltin(name) {
    return builtins[name];
  }
  function evaluateTemplate(nodes, context) {
    const env = new EvalEnv(context);
    return env.evalNodes(nodes);
  }
  class EvalEnv {
    constructor(context) {
      __publicField(this, "context");
      __publicField(this, "variables", /* @__PURE__ */ new Map());
      this.context = context;
    }
    evalNodes(nodes) {
      let output = "";
      for (const node of nodes) {
        output += this.evalNode(node);
      }
      return output;
    }
    evalNode(node) {
      switch (node.kind) {
        case NodeKind.Text:
          return node.value;
        case NodeKind.Comment:
          return "";
        case NodeKind.Expr: {
          const value = this.evalExpr(node.expr);
          return this.valueToString(value);
        }
        case NodeKind.Iteration: {
          const iterable = this.evalExpr(node.iterable);
          if (!Array.isArray(iterable)) return "";
          let output = "";
          for (const item of iterable) {
            this.variables.set(node.binding, item);
            output += this.evalNodes(node.body);
          }
          this.variables.delete(node.binding);
          return output;
        }
        case NodeKind.Match: {
          const subject = this.evalExpr(node.subject);
          for (const branch of node.branches) {
            if (branch.pattern === null) {
              return this.evalNodes(branch.body);
            }
            const pattern = this.evalExpr(branch.pattern);
            if (this.valuesEqual(subject, pattern)) {
              return this.evalNodes(branch.body);
            }
          }
          return "";
        }
      }
    }
    evalExpr(expr) {
      switch (expr.kind) {
        case ExprKind.Literal:
          return expr.value;
        case ExprKind.ContextRef:
          return this.context[expr.name] ?? null;
        case ExprKind.Variable: {
          if (this.variables.has(expr.name)) {
            return this.variables.get(expr.name);
          }
          return this.context[expr.name] ?? null;
        }
        case ExprKind.FieldAccess: {
          const obj = this.evalExpr(expr.object);
          if (obj !== null && typeof obj === "object" && !Array.isArray(obj)) {
            return obj[expr.field] ?? null;
          }
          return null;
        }
        case ExprKind.Pipe: {
          const input = this.evalExpr(expr.input);
          const builtin = getBuiltin(expr.fn);
          if (builtin) {
            const args = expr.args.map((a) => this.evalExprOrLambda(a));
            return builtin(input, ...args);
          }
          return input;
        }
        case ExprKind.FnCall: {
          const builtin = getBuiltin(expr.name);
          if (builtin) {
            const args = expr.args.map((a) => this.evalExprOrLambda(a));
            if (args.length > 0) {
              return builtin(args[0], ...args.slice(1));
            }
            return builtin(null);
          }
          return null;
        }
        case ExprKind.Lambda:
          return this.makeLambda(expr.param, expr.body);
        case ExprKind.BinaryOp:
          return this.evalBinaryOp(expr.op, expr.left, expr.right);
        case ExprKind.UnaryOp:
          if (expr.op === "!") {
            return !this.isTruthy(this.evalExpr(expr.operand));
          }
          return null;
        case ExprKind.CatchAll:
          return true;
      }
    }
    evalExprOrLambda(expr) {
      if (expr.kind === ExprKind.Lambda) {
        return this.makeLambda(expr.param, expr.body);
      }
      return this.evalExpr(expr);
    }
    makeLambda(param, body) {
      return (item) => {
        const prev = this.variables.get(param);
        this.variables.set(param, item);
        const result = this.evalExpr(body);
        if (prev !== void 0) {
          this.variables.set(param, prev);
        } else {
          this.variables.delete(param);
        }
        return result;
      };
    }
    evalBinaryOp(op, left, right) {
      const l = this.evalExpr(left);
      const r = this.evalExpr(right);
      switch (op) {
        case "==":
          return this.valuesEqual(l, r);
        case "!=":
          return !this.valuesEqual(l, r);
        case "<":
          return typeof l === "number" && typeof r === "number" ? l < r : false;
        case ">":
          return typeof l === "number" && typeof r === "number" ? l > r : false;
        case "<=":
          return typeof l === "number" && typeof r === "number" ? l <= r : false;
        case ">=":
          return typeof l === "number" && typeof r === "number" ? l >= r : false;
        case "&&":
          return this.isTruthy(l) && this.isTruthy(r);
        case "||":
          return this.isTruthy(l) || this.isTruthy(r);
        case "+":
          if (typeof l === "number" && typeof r === "number") return l + r;
          return String(l ?? "") + String(r ?? "");
        case "-":
          return typeof l === "number" && typeof r === "number" ? l - r : 0;
        case "*":
          return typeof l === "number" && typeof r === "number" ? l * r : 0;
        case "/":
          return typeof l === "number" && typeof r === "number" && r !== 0 ? l / r : 0;
        case "%":
          return typeof l === "number" && typeof r === "number" && r !== 0 ? l % r : 0;
        default:
          return null;
      }
    }
    valuesEqual(a, b) {
      if (a === b) return true;
      if (a === null || b === null) return false;
      if (typeof a !== typeof b) return String(a) === String(b);
      if (typeof a === "object" && typeof b === "object") {
        return JSON.stringify(a) === JSON.stringify(b);
      }
      return a === b;
    }
    isTruthy(value) {
      if (value === null || value === false || value === 0 || value === "") return false;
      if (Array.isArray(value)) return value.length > 0;
      return true;
    }
    valueToString(value) {
      if (value === null) return "";
      if (typeof value === "string") return value;
      if (typeof value === "number" || typeof value === "boolean") return String(value);
      if (Array.isArray(value)) return value.map((v) => this.valueToString(v)).join("");
      if (typeof value === "object") return JSON.stringify(value);
      return String(value);
    }
  }
  function evaluate(source, context = {}) {
    try {
      const nodes = parse(source);
      const output = evaluateTemplate(nodes, context);
      return { output };
    } catch (e) {
      return { output: "", error: String(e) };
    }
  }
  function analyze(source) {
    try {
      const nodes = parse(source);
      const contextRefs = /* @__PURE__ */ new Set();
      const variables = /* @__PURE__ */ new Set();
      collectRefs(nodes, contextRefs, variables);
      return {
        contextRefs: [...contextRefs],
        variables: [...variables]
      };
    } catch {
      return { contextRefs: [], variables: [] };
    }
  }
  function collectRefs(nodes, contextRefs, variables) {
    for (const node of nodes) {
      switch (node.kind) {
        case NodeKind.Expr:
          collectExprRefs(node.expr, contextRefs, variables);
          break;
        case NodeKind.Iteration:
          collectExprRefs(node.iterable, contextRefs, variables);
          collectRefs(node.body, contextRefs, variables);
          break;
        case NodeKind.Match:
          collectExprRefs(node.subject, contextRefs, variables);
          for (const branch of node.branches) {
            if (branch.pattern) collectExprRefs(branch.pattern, contextRefs, variables);
            collectRefs(branch.body, contextRefs, variables);
          }
          break;
      }
    }
  }
  function collectExprRefs(expr, contextRefs, variables) {
    switch (expr.kind) {
      case ExprKind.ContextRef:
        contextRefs.add(expr.name);
        break;
      case ExprKind.Variable:
        variables.add(expr.name);
        break;
      case ExprKind.FieldAccess:
        collectExprRefs(expr.object, contextRefs, variables);
        break;
      case ExprKind.Pipe:
        collectExprRefs(expr.input, contextRefs, variables);
        for (const arg of expr.args) collectExprRefs(arg, contextRefs, variables);
        break;
      case ExprKind.Lambda:
        collectExprRefs(expr.body, contextRefs, variables);
        break;
      case ExprKind.FnCall:
        for (const arg of expr.args) collectExprRefs(arg, contextRefs, variables);
        break;
      case ExprKind.BinaryOp:
        collectExprRefs(expr.left, contextRefs, variables);
        collectExprRefs(expr.right, contextRefs, variables);
        break;
      case ExprKind.UnaryOp:
        collectExprRefs(expr.operand, contextRefs, variables);
        break;
    }
  }
  function parseGeminiRole(role) {
    switch (role) {
      case "system":
      case "user":
        return "user";
      case "assistant":
        return "model";
      case "function":
        return "function";
      default:
        return "user";
    }
  }
  function buildTemplateContext(msg, messages) {
    return {
      content: msg.content,
      role: msg.role,
      name: msg.name || "",
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
        name: m.name || ""
      })),
      message_count: messages.length
    };
  }
  function applyTemplate(template, content, context) {
    if (!template || !template.trim()) return content;
    const result = evaluate(template, { ...context, input: content });
    return result.error ? content : result.output;
  }
  function parseGeminiChat(messages, templates) {
    const chats = [];
    const templateEnabled = (templates == null ? void 0 : templates.enabled) === true;
    for (const msg of messages) {
      const role = parseGeminiRole(msg.role);
      let parts = [];
      let lastChat = chats.length > 0 ? chats[chats.length - 1] : null;
      if (lastChat && lastChat.role === role) {
        parts = lastChat.parts;
        chats.pop();
      }
      let content = msg.content;
      if (templateEnabled) {
        const ctx = buildTemplateContext(msg, messages);
        if (msg.role === "system") {
          content = applyTemplate(templates.system_template, content, ctx);
        } else if (msg.role === "user") {
          content = applyTemplate(templates.user_template, content, ctx);
        }
      }
      parts.push({ text: content });
      if (msg.multimodals) {
        for (const modal of msg.multimodals) {
          const dataurl = modal.base64;
          const base64 = dataurl.split(",")[1];
          const mediaType = dataurl.split(";")[0].split(":")[1];
          parts.push({
            inlineData: {
              mimeType: mediaType,
              data: base64
            }
          });
        }
      }
      chats.push({ role, parts });
    }
    return chats;
  }
  function extractContent(response) {
    let content = "";
    let thoughts = "";
    if (response.candidates && response.candidates.length > 0) {
      const candidate = response.candidates[0];
      if (candidate.content && candidate.content.parts) {
        for (const part of candidate.content.parts) {
          if (part.text) {
            if (part.thought) {
              thoughts += part.text;
            } else {
              content += part.text;
            }
          }
        }
      }
    }
    return { content, thoughts };
  }
  function formatResult(content, thoughts, outputTemplate) {
    let result = "";
    if (thoughts.trim()) {
      result += `<Thoughts>

${thoughts.trim()}

</Thoughts>

`;
    }
    result += content;
    if (outputTemplate && outputTemplate.trim()) {
      const templateResult = evaluate(outputTemplate, {
        input: result,
        content,
        thoughts
      });
      if (!templateResult.error) {
        return templateResult.output;
      }
    }
    return result;
  }
  async function requestGenerateContent(body, abortSignal) {
    return GCAManager.risuFetchGCA("generateContent", {
      method: "POST",
      body,
      headers: { "Content-Type": "application/json" },
      abortSignal
    });
  }
  async function requestGenerateStreamContent(body, abortSignal) {
    return GCAManager.nativeFetchGCA("streamGenerateContent?alt=sse", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
      signal: abortSignal
    });
  }
  function handleResponse(result, templates) {
    if (!result.ok) {
      return { success: false, content: `Error: ${result.status} ${JSON.stringify(result.data)}` };
    }
    const response = result.data.response;
    const { content, thoughts } = extractContent(response);
    if (!content && !thoughts) {
      return { success: false, content: "Empty response from model" };
    }
    const outputTemplate = (templates == null ? void 0 : templates.enabled) ? templates.output_template : void 0;
    return { success: true, content: formatResult(content, thoughts, outputTemplate) };
  }
  async function handleStreamResponse(response) {
    if (!response.ok) {
      const text2 = await response.text();
      return { success: false, content: `Error: ${response.status} ${text2}` };
    }
    if (!response.body) {
      return { success: false, content: "No response body" };
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let thinking = false;
    const stream = new ReadableStream({
      async start(controller) {
        let buffer = "";
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";
            for (const line of lines) {
              const trimmedLine = line.trim();
              if (!trimmedLine.startsWith("data: ")) continue;
              const dataStr = trimmedLine.slice(6).trim();
              if (dataStr === "[DONE]") continue;
              try {
                const data = JSON.parse(dataStr);
                const responseData = data.response;
                if (responseData.candidates && responseData.candidates.length > 0) {
                  const candidate = responseData.candidates[0];
                  if (candidate.content && candidate.content.parts) {
                    for (const part of candidate.content.parts) {
                      if (part.text) {
                        if (part.thought) {
                          if (!thinking) {
                            thinking = true;
                            controller.enqueue("<Thoughts>\n\n");
                          }
                          controller.enqueue(part.text);
                        } else {
                          if (thinking) {
                            thinking = false;
                            controller.enqueue("\n\n</Thoughts>\n\n");
                          }
                          controller.enqueue(part.text);
                        }
                      }
                    }
                  }
                }
              } catch (e) {
                Logger.error("Stream parse error", e);
              }
            }
          }
          if (thinking) {
            controller.enqueue("\n\n</Thoughts>\n\n");
          }
          controller.close();
        } catch (e) {
          Logger.error("Stream error", e);
          controller.error(e);
        }
      }
    });
    return { success: true, content: stream };
  }
  async function handleRequest(args, abortSignal) {
    const requestType = parseRequestType(args.mode);
    const config = ModelManager.getConfig(requestType);
    const model = config.model_id;
    const params = config.parameters;
    const pluginParams = getPluginParams(args);
    const newParams = applyPluginParams(params, pluginParams);
    const stream = newParams.use_stream === true && requestType === RequestType.Chat;
    const contents = parseGeminiChat(args.prompt_chat, newParams.templates);
    const generationConfig = getGenerationConfig(newParams);
    const safetySettings = getSafetySettings();
    const activeTools = newParams.active_tools || [];
    const tools = [];
    if (activeTools.includes("google_search")) {
      tools.push({ google_search: {} });
    }
    if (activeTools.includes("googleMaps")) {
      tools.push({ googleMaps: {} });
    }
    if (activeTools.includes("url_context")) {
      tools.push({ url_context: {} });
    }
    if (activeTools.includes("code_execution")) {
      tools.push({ code_execution: {} });
    }
    const body = {
      model,
      request: {
        contents,
        generationConfig,
        safetySettings,
        tools
      }
    };
    if (stream) {
      const res = await requestGenerateStreamContent(body, abortSignal);
      return await handleStreamResponse(res);
    } else {
      const res = await requestGenerateContent(body, abortSignal);
      return handleResponse(res, newParams.templates);
    }
  }
  class BackupManager {
    static async backup() {
      try {
        const backupData = await this.gatherData();
        await this.saveToIndexedDB(backupData);
        return true;
      } catch (e) {
        Logger.error("Backup failed:", e);
        return false;
      }
    }
    static async restore() {
      try {
        const backupData = await this.loadFromIndexedDB();
        if (!backupData) {
          Logger.warn("No backup found");
          return false;
        }
        await this.applyData(backupData);
        return true;
      } catch (e) {
        Logger.error("Restore failed:", e);
        return false;
      }
    }
    static async exportBackupToFile() {
      try {
        const backupData = await this.gatherData();
        const jsonString = JSON.stringify(backupData, null, 2);
        const date = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        downloadFile(jsonString, `risu-usage-tracker-backup-${date}.json`, "application/json");
        return true;
      } catch (e) {
        Logger.error("Export failed:", e);
        return false;
      }
    }
    static async importBackupFromFile(file) {
      try {
        const jsonString = await readFileAsText(file);
        const backupData = JSON.parse(jsonString);
        if (!backupData || backupData.version !== this.VERSION || !backupData.data) {
          throw new Error("Invalid or incompatible backup file.");
        }
        await this.applyData(backupData);
        return true;
      } catch (e) {
        Logger.error("Import failed:", e);
        return false;
      }
    }
    static async gatherData() {
      const backupData = {
        version: this.VERSION,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        data: {}
      };
      const argNames = getAllArgNames();
      for (const argName of argNames) {
        const value = RisuAPI.getArg(argName);
        if (value !== void 0) {
          backupData.data[argName] = String(value);
        }
      }
      return backupData;
    }
    static async applyData(backupData) {
      for (const [argName, value] of Object.entries(backupData.data)) {
        if (this.isValidArgName(argName)) {
          RisuAPI.setArg(argName, value);
        }
      }
      eventEmitter.emit(AppEvent.BACKUP_RESTORE);
    }
    static async hasBackup() {
      try {
        const backupData = await this.loadFromIndexedDB();
        return backupData !== null;
      } catch (e) {
        return false;
      }
    }
    static async getBackupTimestamp() {
      try {
        const backupData = await this.loadFromIndexedDB();
        return (backupData == null ? void 0 : backupData.timestamp) || null;
      } catch (e) {
        return null;
      }
    }
    static saveToIndexedDB(backupData) {
      return new Promise((resolve, reject) => {
        try {
          const request = indexedDB.open(this.DB_NAME, 1);
          request.onerror = () => reject(request.error);
          request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction([this.STORE_NAME], "readwrite");
            const store = transaction.objectStore(this.STORE_NAME);
            const putRequest = store.put(backupData, this.BACKUP_KEY);
            putRequest.onerror = () => reject(putRequest.error);
            putRequest.onsuccess = () => resolve();
          };
          request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(this.STORE_NAME)) {
              db.createObjectStore(this.STORE_NAME);
            }
          };
        } catch (e) {
          reject(e);
        }
      });
    }
    static loadFromIndexedDB() {
      return new Promise((resolve, reject) => {
        try {
          const request = indexedDB.open(this.DB_NAME, 1);
          request.onerror = () => reject(request.error);
          request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction([this.STORE_NAME], "readonly");
            const store = transaction.objectStore(this.STORE_NAME);
            const getRequest = store.get(this.BACKUP_KEY);
            getRequest.onerror = () => reject(getRequest.error);
            getRequest.onsuccess = () => resolve(getRequest.result || null);
          };
          request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(this.STORE_NAME)) {
              db.createObjectStore(this.STORE_NAME);
            }
          };
        } catch (e) {
          reject(e);
        }
      });
    }
    static isValidArgName(argName) {
      return argName in RISU_ARGS;
    }
    static async clearBackup() {
      try {
        await new Promise((resolve, reject) => {
          const request = indexedDB.open(this.DB_NAME, 1);
          request.onerror = () => reject(request.error);
          request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction([this.STORE_NAME], "readwrite");
            const store = transaction.objectStore(this.STORE_NAME);
            const deleteRequest = store.delete(this.BACKUP_KEY);
            deleteRequest.onerror = () => reject(deleteRequest.error);
            deleteRequest.onsuccess = () => resolve();
          };
          request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(this.STORE_NAME)) {
              db.createObjectStore(this.STORE_NAME);
            }
          };
        });
        return true;
      } catch (e) {
        Logger.error("Clear backup failed:", e);
        return false;
      }
    }
  }
  __publicField(BackupManager, "DB_NAME", PLUGIN_TITLE);
  __publicField(BackupManager, "STORE_NAME", "backups");
  __publicField(BackupManager, "BACKUP_KEY", "latest_backup");
  __publicField(BackupManager, "VERSION", "1.0");
  function create_if_block_4$1(ctx) {
    let div;
    let button0;
    let t1;
    let button1;
    let mounted;
    let dispose;
    return {
      c() {
        div = element("div");
        button0 = element("button");
        button0.textContent = "Backup to Browser";
        t1 = space();
        button1 = element("button");
        button1.textContent = "Export to File";
        attr(button0, "class", "w-full text-left px-4 py-2.5 text-sm text-zinc-300 hover:bg-blue-600 hover:text-white transition-colors flex items-center gap-2");
        attr(button1, "class", "w-full text-left px-4 py-2.5 text-sm text-zinc-300 hover:bg-blue-600 hover:text-white transition-colors flex items-center gap-2");
        attr(div, "class", "absolute right-0 mt-2 w-56 bg-[#252528] rounded-xl shadow-xl border border-zinc-700/50 py-1.5 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, button0);
        append(div, t1);
        append(div, button1);
        if (!mounted) {
          dispose = [
            listen(
              button0,
              "click",
              /*click_handler_4*/
              ctx[16]
            ),
            listen(
              button1,
              "click",
              /*click_handler_5*/
              ctx[17]
            ),
            listen(div, "click", stop_propagation(
              /*click_handler*/
              ctx[14]
            ))
          ];
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_if_block_3$1(ctx) {
    let div;
    let button0;
    let t1;
    let button1;
    let mounted;
    let dispose;
    return {
      c() {
        div = element("div");
        button0 = element("button");
        button0.textContent = "Restore from Browser";
        t1 = space();
        button1 = element("button");
        button1.textContent = "Import from File";
        attr(button0, "class", "w-full text-left px-4 py-2.5 text-sm text-zinc-300 hover:bg-blue-600 hover:text-white transition-colors flex items-center gap-2");
        attr(button1, "class", "w-full text-left px-4 py-2.5 text-sm text-zinc-300 hover:bg-blue-600 hover:text-white transition-colors flex items-center gap-2");
        attr(div, "class", "absolute right-0 mt-2 w-56 bg-[#252528] rounded-xl shadow-xl border border-zinc-700/50 py-1.5 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, button0);
        append(div, t1);
        append(div, button1);
        if (!mounted) {
          dispose = [
            listen(
              button0,
              "click",
              /*click_handler_7*/
              ctx[19]
            ),
            listen(
              button1,
              "click",
              /*click_handler_8*/
              ctx[20]
            ),
            listen(div, "click", stop_propagation(
              /*click_handler_1*/
              ctx[13]
            ))
          ];
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_else_block$1(ctx) {
    let button;
    let mounted;
    let dispose;
    return {
      c() {
        button = element("button");
        button.innerHTML = `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path></svg> <span class="hidden sm:inline">Sign in</span>`;
        attr(button, "class", "flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-all shadow-lg shadow-blue-900/20");
      },
      m(target, anchor) {
        insert(target, button, anchor);
        if (!mounted) {
          dispose = listen(
            button,
            "click",
            /*click_handler_11*/
            ctx[24]
          );
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching) {
          detach(button);
        }
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block$1(ctx) {
    let div;
    let button;
    let span;
    let t0_value = (
      /*userProfile*/
      ctx[1].name + ""
    );
    let t0;
    let t1;
    let img;
    let img_src_value;
    let t2;
    let mounted;
    let dispose;
    let if_block = (
      /*showProfileDropdown*/
      ctx[8] && create_if_block_1$1(ctx)
    );
    return {
      c() {
        div = element("div");
        button = element("button");
        span = element("span");
        t0 = text(t0_value);
        t1 = space();
        img = element("img");
        t2 = space();
        if (if_block) if_block.c();
        attr(span, "class", "text-sm font-medium text-zinc-300 group-hover:text-white transition-colors hidden sm:block");
        if (!src_url_equal(img.src, img_src_value = /*userProfile*/
        ctx[1].picture)) attr(img, "src", img_src_value);
        attr(img, "alt", "Profile");
        attr(img, "class", "w-8 h-8 rounded-full ring-2 ring-zinc-700 group-hover:ring-blue-500/50 transition-all");
        attr(button, "class", "flex items-center gap-3 pl-4 pr-1 py-1 rounded-full hover:bg-zinc-700/50 transition-all duration-200 group");
        attr(div, "class", "relative");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, button);
        append(button, span);
        append(span, t0);
        append(button, t1);
        append(button, img);
        append(div, t2);
        if (if_block) if_block.m(div, null);
        if (!mounted) {
          dispose = listen(button, "click", stop_propagation(
            /*click_handler_9*/
            ctx[22]
          ));
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*userProfile*/
        2 && t0_value !== (t0_value = /*userProfile*/
        ctx2[1].name + "")) set_data(t0, t0_value);
        if (dirty & /*userProfile*/
        2 && !src_url_equal(img.src, img_src_value = /*userProfile*/
        ctx2[1].picture)) {
          attr(img, "src", img_src_value);
        }
        if (
          /*showProfileDropdown*/
          ctx2[8]
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_1$1(ctx2);
            if_block.c();
            if_block.m(div, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        if (if_block) if_block.d();
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_1$1(ctx) {
    let div5;
    let div0;
    let p0;
    let t0_value = (
      /*userProfile*/
      ctx[1].name + ""
    );
    let t0;
    let t1;
    let p1;
    let t2_value = (
      /*userProfile*/
      ctx[1].email + ""
    );
    let t2;
    let t3;
    let div3;
    let div1;
    let span0;
    let t5;
    let span1;
    let t6_value = (
      /*projectId*/
      (ctx[2] || "N/A") + ""
    );
    let t6;
    let t7;
    let div2;
    let span2;
    let t9;
    let span3;
    let t10_value = formatServiceTier(
      /*serviceTier*/
      ctx[3]
    ) + "";
    let t10;
    let t11;
    let t12;
    let div4;
    let button;
    let mounted;
    let dispose;
    let if_block = (
      /*serviceTier*/
      (ctx[3] === "free-tier" || /*serviceTier*/
      ctx[3] === "free") && create_if_block_2$1(ctx)
    );
    return {
      c() {
        div5 = element("div");
        div0 = element("div");
        p0 = element("p");
        t0 = text(t0_value);
        t1 = space();
        p1 = element("p");
        t2 = text(t2_value);
        t3 = space();
        div3 = element("div");
        div1 = element("div");
        span0 = element("span");
        span0.textContent = "Project ID";
        t5 = space();
        span1 = element("span");
        t6 = text(t6_value);
        t7 = space();
        div2 = element("div");
        span2 = element("span");
        span2.textContent = "Tier";
        t9 = space();
        span3 = element("span");
        t10 = text(t10_value);
        t11 = space();
        if (if_block) if_block.c();
        t12 = space();
        div4 = element("div");
        button = element("button");
        button.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                Sign out`;
        attr(p0, "class", "text-sm font-semibold text-white");
        attr(p1, "class", "text-xs text-zinc-400 mt-0.5");
        attr(div0, "class", "px-5 py-3 border-b border-zinc-700/50");
        attr(span0, "class", "text-zinc-500");
        attr(span1, "class", "text-zinc-300 font-mono text-xs bg-zinc-800 px-2 py-1 rounded");
        attr(div1, "class", "flex justify-between items-center");
        attr(span2, "class", "text-zinc-500");
        attr(span3, "class", "text-zinc-300 font-medium");
        attr(div2, "class", "flex justify-between items-center");
        attr(div3, "class", "px-5 py-3 text-sm space-y-2.5");
        attr(button, "class", "w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-colors flex items-center gap-2");
        attr(div4, "class", "border-t border-zinc-700/50 mt-2 py-2 px-2");
        attr(div5, "class", "absolute right-0 mt-2 w-72 bg-[#252528] rounded-xl shadow-xl border border-zinc-700/50 z-50 animate-in fade-in zoom-in-95 duration-100");
      },
      m(target, anchor) {
        insert(target, div5, anchor);
        append(div5, div0);
        append(div0, p0);
        append(p0, t0);
        append(div0, t1);
        append(div0, p1);
        append(p1, t2);
        append(div5, t3);
        append(div5, div3);
        append(div3, div1);
        append(div1, span0);
        append(div1, t5);
        append(div1, span1);
        append(span1, t6);
        append(div3, t7);
        append(div3, div2);
        append(div2, span2);
        append(div2, t9);
        append(div2, span3);
        append(span3, t10);
        append(div3, t11);
        if (if_block) if_block.m(div3, null);
        append(div5, t12);
        append(div5, div4);
        append(div4, button);
        if (!mounted) {
          dispose = [
            listen(
              button,
              "click",
              /*click_handler_10*/
              ctx[23]
            ),
            listen(div5, "click", stop_propagation(
              /*click_handler_2*/
              ctx[12]
            ))
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty & /*userProfile*/
        2 && t0_value !== (t0_value = /*userProfile*/
        ctx2[1].name + "")) set_data(t0, t0_value);
        if (dirty & /*userProfile*/
        2 && t2_value !== (t2_value = /*userProfile*/
        ctx2[1].email + "")) set_data(t2, t2_value);
        if (dirty & /*projectId*/
        4 && t6_value !== (t6_value = /*projectId*/
        (ctx2[2] || "N/A") + "")) set_data(t6, t6_value);
        if (dirty & /*serviceTier*/
        8 && t10_value !== (t10_value = formatServiceTier(
          /*serviceTier*/
          ctx2[3]
        ) + "")) set_data(t10, t10_value);
        if (
          /*serviceTier*/
          ctx2[3] === "free-tier" || /*serviceTier*/
          ctx2[3] === "free"
        ) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_2$1(ctx2);
            if_block.c();
            if_block.m(div3, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(div5);
        }
        if (if_block) if_block.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_if_block_2$1(ctx) {
    let div;
    let span0;
    let t1;
    let span1;
    let t2_value = (
      /*optOut*/
      ctx[4] ? "Yes" : "No"
    );
    let t2;
    return {
      c() {
        div = element("div");
        span0 = element("span");
        span0.textContent = "Opt-out";
        t1 = space();
        span1 = element("span");
        t2 = text(t2_value);
        attr(span0, "class", "text-zinc-500");
        attr(span1, "class", "text-zinc-300");
        attr(div, "class", "flex justify-between items-center");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, span0);
        append(div, t1);
        append(div, span1);
        append(span1, t2);
      },
      p(ctx2, dirty) {
        if (dirty & /*optOut*/
        16 && t2_value !== (t2_value = /*optOut*/
        ctx2[4] ? "Yes" : "No")) set_data(t2, t2_value);
      },
      d(detaching) {
        if (detaching) {
          detach(div);
        }
      }
    };
  }
  function create_fragment$4(ctx) {
    let div7;
    let div2;
    let t4;
    let div6;
    let div3;
    let button0;
    let t5;
    let t6;
    let div4;
    let button1;
    let t7;
    let t8;
    let input;
    let t9;
    let div5;
    let t10;
    let t11;
    let button2;
    let mounted;
    let dispose;
    let if_block0 = (
      /*showBackupDropdown*/
      ctx[6] && create_if_block_4$1(ctx)
    );
    let if_block1 = (
      /*showRestoreDropdown*/
      ctx[7] && create_if_block_3$1(ctx)
    );
    function select_block_type(ctx2, dirty) {
      if (
        /*isLoggedIn*/
        ctx2[0] && /*userProfile*/
        ctx2[1]
      ) return create_if_block$1;
      return create_else_block$1;
    }
    let current_block_type = select_block_type(ctx);
    let if_block2 = current_block_type(ctx);
    return {
      c() {
        div7 = element("div");
        div2 = element("div");
        div2.innerHTML = `<div class="p-2 bg-blue-500/10 rounded-lg shrink-0"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z"></path></svg></div> <div><h2 class="text-lg font-bold text-zinc-100 tracking-tight">Pomollu</h2> <p class="text-xs text-zinc-500 font-medium">Gemini Code Assist Integration</p></div>`;
        t4 = space();
        div6 = element("div");
        div3 = element("div");
        button0 = element("button");
        button0.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>`;
        t5 = space();
        if (if_block0) if_block0.c();
        t6 = space();
        div4 = element("div");
        button1 = element("button");
        button1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>`;
        t7 = space();
        if (if_block1) if_block1.c();
        t8 = space();
        input = element("input");
        t9 = space();
        div5 = element("div");
        t10 = space();
        if_block2.c();
        t11 = space();
        button2 = element("button");
        button2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
        attr(div2, "class", "flex items-center gap-4");
        attr(button0, "class", "p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700/50 rounded-lg transition-all duration-200");
        attr(button0, "title", "Backup");
        attr(div3, "class", "relative");
        attr(button1, "class", "p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700/50 rounded-lg transition-all duration-200");
        attr(button1, "title", "Restore");
        attr(input, "type", "file");
        attr(input, "class", "hidden");
        attr(input, "accept", ".json");
        attr(div4, "class", "relative");
        attr(div5, "class", "h-6 w-px bg-zinc-700/50 mx-1");
        attr(button2, "class", "p-2 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-lg transition-all duration-200 ml-1");
        attr(div6, "class", "flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end");
        attr(div7, "class", "flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-3 bg-[#252528] border-b border-zinc-800 select-none shadow-2xl gap-4 sm:gap-0");
      },
      m(target, anchor) {
        insert(target, div7, anchor);
        append(div7, div2);
        append(div7, t4);
        append(div7, div6);
        append(div6, div3);
        append(div3, button0);
        append(div3, t5);
        if (if_block0) if_block0.m(div3, null);
        append(div6, t6);
        append(div6, div4);
        append(div4, button1);
        append(div4, t7);
        if (if_block1) if_block1.m(div4, null);
        append(div4, t8);
        append(div4, input);
        ctx[21](input);
        append(div6, t9);
        append(div6, div5);
        append(div6, t10);
        if_block2.m(div6, null);
        append(div6, t11);
        append(div6, button2);
        if (!mounted) {
          dispose = [
            listen(button0, "click", stop_propagation(
              /*click_handler_3*/
              ctx[15]
            )),
            listen(button1, "click", stop_propagation(
              /*click_handler_6*/
              ctx[18]
            )),
            listen(
              input,
              "change",
              /*handleFileChange*/
              ctx[11]
            ),
            listen(
              button2,
              "click",
              /*click_handler_12*/
              ctx[25]
            ),
            listen(div7, "click", stop_propagation(
              /*closeAllDropdowns*/
              ctx[5]
            ))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (
          /*showBackupDropdown*/
          ctx2[6]
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_4$1(ctx2);
            if_block0.c();
            if_block0.m(div3, null);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (
          /*showRestoreDropdown*/
          ctx2[7]
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block_3$1(ctx2);
            if_block1.c();
            if_block1.m(div4, t8);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2.d(1);
          if_block2 = current_block_type(ctx2);
          if (if_block2) {
            if_block2.c();
            if_block2.m(div6, t11);
          }
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div7);
        }
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
        ctx[21](null);
        if_block2.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function formatServiceTier(tier) {
    if (!tier) return "Unknown Tier";
    return tier.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  function instance$4($$self, $$props, $$invalidate) {
    let { isLoggedIn = false } = $$props;
    let { userProfile = null } = $$props;
    let { projectId = "" } = $$props;
    let { serviceTier = "" } = $$props;
    let { optOut = false } = $$props;
    const dispatch2 = createEventDispatcher();
    let showBackupDropdown = false;
    let showRestoreDropdown = false;
    let showProfileDropdown = false;
    let fileInput;
    function handleFileChange(e) {
      const target = e.target;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        dispatch2("importFile", file);
      }
      target.value = "";
    }
    function closeAllDropdowns() {
      $$invalidate(6, showBackupDropdown = false);
      $$invalidate(7, showRestoreDropdown = false);
      $$invalidate(8, showProfileDropdown = false);
    }
    function click_handler_2(event) {
      bubble.call(this, $$self, event);
    }
    function click_handler_1(event) {
      bubble.call(this, $$self, event);
    }
    function click_handler(event) {
      bubble.call(this, $$self, event);
    }
    const click_handler_3 = () => {
      const wasOpen = showBackupDropdown;
      closeAllDropdowns();
      $$invalidate(6, showBackupDropdown = !wasOpen);
    };
    const click_handler_4 = () => {
      dispatch2("quickBackup");
      $$invalidate(6, showBackupDropdown = false);
    };
    const click_handler_5 = () => {
      dispatch2("export");
      $$invalidate(6, showBackupDropdown = false);
    };
    const click_handler_6 = () => {
      const wasOpen = showRestoreDropdown;
      closeAllDropdowns();
      $$invalidate(7, showRestoreDropdown = !wasOpen);
    };
    const click_handler_7 = () => {
      dispatch2("quickRestore");
      $$invalidate(7, showRestoreDropdown = false);
    };
    const click_handler_8 = () => {
      fileInput.click();
      $$invalidate(7, showRestoreDropdown = false);
    };
    function input_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        fileInput = $$value;
        $$invalidate(9, fileInput);
      });
    }
    const click_handler_9 = () => {
      const wasOpen = showProfileDropdown;
      closeAllDropdowns();
      $$invalidate(8, showProfileDropdown = !wasOpen);
    };
    const click_handler_10 = () => dispatch2("logout");
    const click_handler_11 = () => dispatch2("login");
    const click_handler_12 = () => dispatch2("close");
    $$self.$$set = ($$props2) => {
      if ("isLoggedIn" in $$props2) $$invalidate(0, isLoggedIn = $$props2.isLoggedIn);
      if ("userProfile" in $$props2) $$invalidate(1, userProfile = $$props2.userProfile);
      if ("projectId" in $$props2) $$invalidate(2, projectId = $$props2.projectId);
      if ("serviceTier" in $$props2) $$invalidate(3, serviceTier = $$props2.serviceTier);
      if ("optOut" in $$props2) $$invalidate(4, optOut = $$props2.optOut);
    };
    return [
      isLoggedIn,
      userProfile,
      projectId,
      serviceTier,
      optOut,
      closeAllDropdowns,
      showBackupDropdown,
      showRestoreDropdown,
      showProfileDropdown,
      fileInput,
      dispatch2,
      handleFileChange,
      click_handler_2,
      click_handler_1,
      click_handler,
      click_handler_3,
      click_handler_4,
      click_handler_5,
      click_handler_6,
      click_handler_7,
      click_handler_8,
      input_binding,
      click_handler_9,
      click_handler_10,
      click_handler_11,
      click_handler_12
    ];
  }
  class ModalHeader extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$4, create_fragment$4, safe_not_equal, {
        isLoggedIn: 0,
        userProfile: 1,
        projectId: 2,
        serviceTier: 3,
        optOut: 4,
        closeAllDropdowns: 5
      });
    }
    get closeAllDropdowns() {
      return this.$$.ctx[5];
    }
  }
  function get_each_context$1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[4] = list[i];
    return child_ctx;
  }
  function create_each_block$1(ctx) {
    let button;
    let div;
    let div_class_value;
    let t0;
    let t1_value = (
      /*type*/
      ctx[4].charAt(0).toUpperCase() + /*type*/
      ctx[4].slice(1) + ""
    );
    let t1;
    let t2;
    let button_class_value;
    let mounted;
    let dispose;
    function click_handler() {
      return (
        /*click_handler*/
        ctx[3](
          /*type*/
          ctx[4]
        )
      );
    }
    return {
      c() {
        button = element("button");
        div = element("div");
        t0 = space();
        t1 = text(t1_value);
        t2 = space();
        attr(div, "class", div_class_value = "w-1.5 h-1.5 rounded-full shrink-0 " + /*activeTab*/
        (ctx[1] === /*type*/
        ctx[4] ? "bg-blue-400" : "bg-zinc-600"));
        attr(button, "class", button_class_value = "whitespace-nowrap flex-1 md:flex-none px-3 py-2 md:py-2.5 text-left rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center md:justify-start gap-2 md:gap-3 " + /*activeTab*/
        (ctx[1] === /*type*/
        ctx[4] ? "bg-blue-600/10 text-blue-400 shadow-sm ring-1 ring-blue-500/20" : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"));
      },
      m(target, anchor) {
        insert(target, button, anchor);
        append(button, div);
        append(button, t0);
        append(button, t1);
        append(button, t2);
        if (!mounted) {
          dispose = listen(button, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*activeTab, requestTypes*/
        3 && div_class_value !== (div_class_value = "w-1.5 h-1.5 rounded-full shrink-0 " + /*activeTab*/
        (ctx[1] === /*type*/
        ctx[4] ? "bg-blue-400" : "bg-zinc-600"))) {
          attr(div, "class", div_class_value);
        }
        if (dirty & /*requestTypes*/
        1 && t1_value !== (t1_value = /*type*/
        ctx[4].charAt(0).toUpperCase() + /*type*/
        ctx[4].slice(1) + "")) set_data(t1, t1_value);
        if (dirty & /*activeTab, requestTypes*/
        3 && button_class_value !== (button_class_value = "whitespace-nowrap flex-1 md:flex-none px-3 py-2 md:py-2.5 text-left rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center md:justify-start gap-2 md:gap-3 " + /*activeTab*/
        (ctx[1] === /*type*/
        ctx[4] ? "bg-blue-600/10 text-blue-400 shadow-sm ring-1 ring-blue-500/20" : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"))) {
          attr(button, "class", button_class_value);
        }
      },
      d(detaching) {
        if (detaching) {
          detach(button);
        }
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment$3(ctx) {
    let div2;
    let div1;
    let h3;
    let t1;
    let div0;
    let each_value = ensure_array_like(
      /*requestTypes*/
      ctx[0]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    }
    return {
      c() {
        div2 = element("div");
        div1 = element("div");
        h3 = element("h3");
        h3.textContent = "Request Types";
        t1 = space();
        div0 = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr(h3, "class", "hidden md:block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 px-2");
        attr(div0, "class", "flex md:flex-col space-x-1 md:space-x-0 md:space-y-1 w-full");
        attr(div1, "class", "p-2 md:p-4 flex md:flex-col gap-1 md:gap-0 w-full");
        attr(div2, "class", "w-full md:w-56 bg-[#202022] border-b md:border-b-0 md:border-r border-zinc-800 flex md:flex-col overflow-x-auto md:overflow-y-auto shrink-0");
      },
      m(target, anchor) {
        insert(target, div2, anchor);
        append(div2, div1);
        append(div1, h3);
        append(div1, t1);
        append(div1, div0);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div0, null);
          }
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*activeTab, requestTypes, dispatch*/
        7) {
          each_value = ensure_array_like(
            /*requestTypes*/
            ctx2[0]
          );
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context$1(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block$1(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div0, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(div2);
        }
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function instance$3($$self, $$props, $$invalidate) {
    let { requestTypes = [] } = $$props;
    let { activeTab } = $$props;
    const dispatch2 = createEventDispatcher();
    const click_handler = (type) => dispatch2("tabChange", type);
    $$self.$$set = ($$props2) => {
      if ("requestTypes" in $$props2) $$invalidate(0, requestTypes = $$props2.requestTypes);
      if ("activeTab" in $$props2) $$invalidate(1, activeTab = $$props2.activeTab);
    };
    return [requestTypes, activeTab, dispatch2, click_handler];
  }
  class RequestTypeSidebar extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$3, create_fragment$3, safe_not_equal, { requestTypes: 0, activeTab: 1 });
    }
  }
  function cubicOut(t) {
    const f = t - 1;
    return f * f * f + 1;
  }
  function quintOut(t) {
    return --t * t * t * t * t + 1;
  }
  function slide(node, { delay = 0, duration = 400, easing = cubicOut, axis = "y" } = {}) {
    const style = getComputedStyle(node);
    const opacity = +style.opacity;
    const primary_property = axis === "y" ? "height" : "width";
    const primary_property_value = parseFloat(style[primary_property]);
    const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
    const capitalized_secondary_properties = secondary_properties.map(
      (e) => `${e[0].toUpperCase()}${e.slice(1)}`
    );
    const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
    const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
    const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
    const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
    const border_width_start_value = parseFloat(
      style[`border${capitalized_secondary_properties[0]}Width`]
    );
    const border_width_end_value = parseFloat(
      style[`border${capitalized_secondary_properties[1]}Width`]
    );
    return {
      delay,
      duration,
      easing,
      css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;`
    };
  }
  const MODELS = [
    "gemini-3-pro-preview",
    "gemini-3-flash-preview",
    "gemini-2.5-pro",
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite"
  ];
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[45] = list[i];
    return child_ctx;
  }
  function create_if_block_4(ctx) {
    let div1;
    let div0;
    let t;
    let show_if = !MODELS.includes(
      /*currentModelId*/
      ctx[1]
    ) && /*currentModelId*/
    ctx[1];
    let each_value = ensure_array_like(MODELS);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }
    let if_block = show_if && create_if_block_5(ctx);
    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t = space();
        if (if_block) if_block.c();
        attr(div0, "class", "max-h-60 overflow-y-auto py-1");
        attr(div1, "class", "absolute z-50 mt-2 w-full bg-[#2a2a2e] border border-zinc-700 rounded-xl shadow-xl overflow-hidden");
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(div0, null);
          }
        }
        append(div0, t);
        if (if_block) if_block.m(div0, null);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*currentModelId, selectModel*/
        4098) {
          each_value = ensure_array_like(MODELS);
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div0, t);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
        if (dirty[0] & /*currentModelId*/
        2) show_if = !MODELS.includes(
          /*currentModelId*/
          ctx2[1]
        ) && /*currentModelId*/
        ctx2[1];
        if (show_if) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_5(ctx2);
            if_block.c();
            if_block.m(div0, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(div1);
        }
        destroy_each(each_blocks, detaching);
        if (if_block) if_block.d();
      }
    };
  }
  function create_if_block_6(ctx) {
    let svg;
    let path;
    return {
      c() {
        svg = svg_element("svg");
        path = svg_element("path");
        attr(path, "stroke-linecap", "round");
        attr(path, "stroke-linejoin", "round");
        attr(path, "stroke-width", "2");
        attr(path, "d", "M5 13l4 4L19 7");
        attr(svg, "class", "h-4 w-4");
        attr(svg, "fill", "none");
        attr(svg, "viewBox", "0 0 24 24");
        attr(svg, "stroke", "currentColor");
      },
      m(target, anchor) {
        insert(target, svg, anchor);
        append(svg, path);
      },
      d(detaching) {
        if (detaching) {
          detach(svg);
        }
      }
    };
  }
  function create_each_block(ctx) {
    let button;
    let span;
    let t1;
    let button_class_value;
    let mounted;
    let dispose;
    let if_block = (
      /*currentModelId*/
      ctx[1] === /*model*/
      ctx[45] && create_if_block_6()
    );
    function click_handler() {
      return (
        /*click_handler*/
        ctx[21](
          /*model*/
          ctx[45]
        )
      );
    }
    return {
      c() {
        button = element("button");
        span = element("span");
        span.textContent = `${/*model*/
        ctx[45]}`;
        t1 = space();
        if (if_block) if_block.c();
        attr(button, "type", "button");
        attr(button, "class", button_class_value = "w-full px-4 py-2 text-left text-sm text-zinc-300 hover:bg-blue-600/20 hover:text-white transition-colors flex items-center justify-between " + /*currentModelId*/
        (ctx[1] === /*model*/
        ctx[45] ? "bg-blue-600/10 text-blue-400 font-medium" : ""));
      },
      m(target, anchor) {
        insert(target, button, anchor);
        append(button, span);
        append(button, t1);
        if (if_block) if_block.m(button, null);
        if (!mounted) {
          dispose = listen(button, "click", click_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (
          /*currentModelId*/
          ctx[1] === /*model*/
          ctx[45]
        ) {
          if (if_block) ;
          else {
            if_block = create_if_block_6();
            if_block.c();
            if_block.m(button, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
        if (dirty[0] & /*currentModelId*/
        2 && button_class_value !== (button_class_value = "w-full px-4 py-2 text-left text-sm text-zinc-300 hover:bg-blue-600/20 hover:text-white transition-colors flex items-center justify-between " + /*currentModelId*/
        (ctx[1] === /*model*/
        ctx[45] ? "bg-blue-600/10 text-blue-400 font-medium" : ""))) {
          attr(button, "class", button_class_value);
        }
      },
      d(detaching) {
        if (detaching) {
          detach(button);
        }
        if (if_block) if_block.d();
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_5(ctx) {
    let div0;
    let t0;
    let div1;
    let t2;
    let button;
    let svg;
    let path;
    let t3;
    let span;
    let t4;
    let mounted;
    let dispose;
    return {
      c() {
        div0 = element("div");
        t0 = space();
        div1 = element("div");
        div1.textContent = "Custom Model";
        t2 = space();
        button = element("button");
        svg = svg_element("svg");
        path = svg_element("path");
        t3 = space();
        span = element("span");
        t4 = text(
          /*currentModelId*/
          ctx[1]
        );
        attr(div0, "class", "border-t border-zinc-700/50 my-1");
        attr(div1, "class", "px-4 py-2 text-xs font-medium text-zinc-500 uppercase tracking-wider");
        attr(path, "stroke-linecap", "round");
        attr(path, "stroke-linejoin", "round");
        attr(path, "stroke-width", "2");
        attr(path, "d", "M12 4v16m8-8H4");
        attr(svg, "class", "h-4 w-4");
        attr(svg, "fill", "none");
        attr(svg, "viewBox", "0 0 24 24");
        attr(svg, "stroke", "currentColor");
        attr(button, "type", "button");
        attr(button, "class", "w-full px-4 py-2 text-left text-sm text-blue-400 bg-blue-600/10 font-medium flex items-center gap-2");
      },
      m(target, anchor) {
        insert(target, div0, anchor);
        insert(target, t0, anchor);
        insert(target, div1, anchor);
        insert(target, t2, anchor);
        insert(target, button, anchor);
        append(button, svg);
        append(svg, path);
        append(button, t3);
        append(button, span);
        append(span, t4);
        if (!mounted) {
          dispose = listen(
            button,
            "click",
            /*click_handler_1*/
            ctx[22]
          );
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*currentModelId*/
        2) set_data(
          t4,
          /*currentModelId*/
          ctx2[1]
        );
      },
      d(detaching) {
        if (detaching) {
          detach(div0);
          detach(t0);
          detach(div1);
          detach(t2);
          detach(button);
        }
        mounted = false;
        dispose();
      }
    };
  }
  function create_else_block(ctx) {
    let input;
    let mounted;
    let dispose;
    return {
      c() {
        input = element("input");
        attr(input, "type", "number");
        attr(input, "placeholder", "e.g. 4096");
        attr(input, "class", "w-full px-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors");
      },
      m(target, anchor) {
        insert(target, input, anchor);
        set_input_value(
          input,
          /*currentParams*/
          ctx[0].thinking_tokens
        );
        if (!mounted) {
          dispose = [
            listen(
              input,
              "input",
              /*input_input_handler*/
              ctx[35]
            ),
            listen(
              input,
              "change",
              /*onConfigChange*/
              ctx[10]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*currentParams*/
        1 && to_number(input.value) !== /*currentParams*/
        ctx2[0].thinking_tokens) {
          set_input_value(
            input,
            /*currentParams*/
            ctx2[0].thinking_tokens
          );
        }
      },
      d(detaching) {
        if (detaching) {
          detach(input);
        }
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_if_block_3(ctx) {
    let select;
    let option0;
    let t0;
    let option1;
    let option2;
    let option3;
    let mounted;
    let dispose;
    return {
      c() {
        select = element("select");
        option0 = element("option");
        t0 = text("Default");
        option1 = element("option");
        option1.textContent = "Low";
        option2 = element("option");
        option2.textContent = "Medium";
        option3 = element("option");
        option3.textContent = "High";
        option0.__value = void 0;
        set_input_value(option0, option0.__value);
        option1.__value = "low";
        set_input_value(option1, option1.__value);
        option2.__value = "medium";
        set_input_value(option2, option2.__value);
        option3.__value = "high";
        set_input_value(option3, option3.__value);
        attr(select, "class", "w-full px-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors");
        if (
          /*currentParams*/
          ctx[0].thinking_level === void 0
        ) add_render_callback(() => (
          /*select_change_handler*/
          ctx[34].call(select)
        ));
      },
      m(target, anchor) {
        insert(target, select, anchor);
        append(select, option0);
        append(option0, t0);
        append(select, option1);
        append(select, option2);
        append(select, option3);
        select_option(
          select,
          /*currentParams*/
          ctx[0].thinking_level,
          true
        );
        if (!mounted) {
          dispose = [
            listen(
              select,
              "change",
              /*select_change_handler*/
              ctx[34]
            ),
            listen(
              select,
              "change",
              /*onConfigChange*/
              ctx[10]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*currentParams*/
        1) {
          select_option(
            select,
            /*currentParams*/
            ctx2[0].thinking_level
          );
        }
      },
      d(detaching) {
        if (detaching) {
          detach(select);
        }
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_if_block(ctx) {
    let div5;
    let p;
    let t15;
    let div1;
    let div0;
    let label0;
    let t17;
    let t18;
    let textarea0;
    let textarea0_value_value;
    let t19;
    let div3;
    let div2;
    let label1;
    let t21;
    let t22;
    let textarea1;
    let textarea1_value_value;
    let t23;
    let div4;
    let label2;
    let t25;
    let textarea2;
    let textarea2_value_value;
    let div5_transition;
    let current;
    let mounted;
    let dispose;
    let if_block0 = (
      /*systemRefs*/
      ctx[7].length > 0 && create_if_block_2(ctx)
    );
    let if_block1 = (
      /*userRefs*/
      ctx[6].length > 0 && create_if_block_1(ctx)
    );
    return {
      c() {
        div5 = element("div");
        p = element("p");
        p.innerHTML = `Use acvus template syntax to transform messages. Available context: <code class="text-zinc-400">@input</code> (message text), <code class="text-zinc-400">@role</code>, <code class="text-zinc-400">@message_count</code>. Pipes: <code class="text-zinc-400">trim</code>, <code class="text-zinc-400">upper</code>, <code class="text-zinc-400">lower</code>, <code class="text-zinc-400">replace_str</code>, etc.`;
        t15 = space();
        div1 = element("div");
        div0 = element("div");
        label0 = element("label");
        label0.textContent = "System Template";
        t17 = space();
        if (if_block0) if_block0.c();
        t18 = space();
        textarea0 = element("textarea");
        t19 = space();
        div3 = element("div");
        div2 = element("div");
        label1 = element("label");
        label1.textContent = "User Template";
        t21 = space();
        if (if_block1) if_block1.c();
        t22 = space();
        textarea1 = element("textarea");
        t23 = space();
        div4 = element("div");
        label2 = element("label");
        label2.textContent = "Output Template";
        t25 = space();
        textarea2 = element("textarea");
        attr(p, "class", "text-xs text-zinc-500");
        attr(label0, "for", "system-template");
        attr(label0, "class", "text-sm font-medium text-zinc-300");
        attr(div0, "class", "flex items-center justify-between");
        attr(textarea0, "id", "system-template");
        textarea0.value = textarea0_value_value = /*templates*/
        ctx[3].system_template ?? "";
        attr(textarea0, "placeholder", "e.g. {{ @input | trim }}");
        attr(textarea0, "rows", "3");
        attr(textarea0, "class", "w-full px-3 py-2 bg-[#252528] border border-zinc-700 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm font-mono text-xs resize-y");
        attr(div1, "class", "space-y-2");
        attr(label1, "for", "user-template");
        attr(label1, "class", "text-sm font-medium text-zinc-300");
        attr(div2, "class", "flex items-center justify-between");
        attr(textarea1, "id", "user-template");
        textarea1.value = textarea1_value_value = /*templates*/
        ctx[3].user_template ?? "";
        attr(textarea1, "placeholder", "e.g. {{ @input }}");
        attr(textarea1, "rows", "3");
        attr(textarea1, "class", "w-full px-3 py-2 bg-[#252528] border border-zinc-700 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm font-mono text-xs resize-y");
        attr(div3, "class", "space-y-2");
        attr(label2, "for", "output-template");
        attr(label2, "class", "text-sm font-medium text-zinc-300");
        attr(textarea2, "id", "output-template");
        textarea2.value = textarea2_value_value = /*templates*/
        ctx[3].output_template ?? "";
        attr(textarea2, "placeholder", "e.g. {{ @input | trim }}");
        attr(textarea2, "rows", "3");
        attr(textarea2, "class", "w-full px-3 py-2 bg-[#252528] border border-zinc-700 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm font-mono text-xs resize-y");
        attr(div4, "class", "space-y-2");
        attr(div5, "class", "space-y-4");
      },
      m(target, anchor) {
        insert(target, div5, anchor);
        append(div5, p);
        append(div5, t15);
        append(div5, div1);
        append(div1, div0);
        append(div0, label0);
        append(div0, t17);
        if (if_block0) if_block0.m(div0, null);
        append(div1, t18);
        append(div1, textarea0);
        append(div5, t19);
        append(div5, div3);
        append(div3, div2);
        append(div2, label1);
        append(div2, t21);
        if (if_block1) if_block1.m(div2, null);
        append(div3, t22);
        append(div3, textarea1);
        append(div5, t23);
        append(div5, div4);
        append(div4, label2);
        append(div4, t25);
        append(div4, textarea2);
        current = true;
        if (!mounted) {
          dispose = [
            listen(
              textarea0,
              "input",
              /*input_handler_3*/
              ctx[41]
            ),
            listen(
              textarea1,
              "input",
              /*input_handler_4*/
              ctx[42]
            ),
            listen(
              textarea2,
              "input",
              /*input_handler_5*/
              ctx[43]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (
          /*systemRefs*/
          ctx2[7].length > 0
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_2(ctx2);
            if_block0.c();
            if_block0.m(div0, null);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (!current || dirty[0] & /*templates*/
        8 && textarea0_value_value !== (textarea0_value_value = /*templates*/
        ctx2[3].system_template ?? "")) {
          textarea0.value = textarea0_value_value;
        }
        if (
          /*userRefs*/
          ctx2[6].length > 0
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block_1(ctx2);
            if_block1.c();
            if_block1.m(div2, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (!current || dirty[0] & /*templates*/
        8 && textarea1_value_value !== (textarea1_value_value = /*templates*/
        ctx2[3].user_template ?? "")) {
          textarea1.value = textarea1_value_value;
        }
        if (!current || dirty[0] & /*templates*/
        8 && textarea2_value_value !== (textarea2_value_value = /*templates*/
        ctx2[3].output_template ?? "")) {
          textarea2.value = textarea2_value_value;
        }
      },
      i(local) {
        if (current) return;
        if (local) {
          add_render_callback(() => {
            if (!current) return;
            if (!div5_transition) div5_transition = create_bidirectional_transition(div5, slide, { duration: 200, easing: quintOut }, true);
            div5_transition.run(1);
          });
        }
        current = true;
      },
      o(local) {
        if (local) {
          if (!div5_transition) div5_transition = create_bidirectional_transition(div5, slide, { duration: 200, easing: quintOut }, false);
          div5_transition.run(0);
        }
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div5);
        }
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
        if (detaching && div5_transition) div5_transition.end();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_if_block_2(ctx) {
    let span;
    let t0;
    let t1_value = (
      /*systemRefs*/
      ctx[7].map(func).join(", ") + ""
    );
    let t1;
    return {
      c() {
        span = element("span");
        t0 = text("refs: ");
        t1 = text(t1_value);
        attr(span, "class", "text-xs text-zinc-500");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t0);
        append(span, t1);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*systemRefs*/
        128 && t1_value !== (t1_value = /*systemRefs*/
        ctx2[7].map(func).join(", ") + "")) set_data(t1, t1_value);
      },
      d(detaching) {
        if (detaching) {
          detach(span);
        }
      }
    };
  }
  function create_if_block_1(ctx) {
    let span;
    let t0;
    let t1_value = (
      /*userRefs*/
      ctx[6].map(func_1).join(", ") + ""
    );
    let t1;
    return {
      c() {
        span = element("span");
        t0 = text("refs: ");
        t1 = text(t1_value);
        attr(span, "class", "text-xs text-zinc-500");
      },
      m(target, anchor) {
        insert(target, span, anchor);
        append(span, t0);
        append(span, t1);
      },
      p(ctx2, dirty) {
        if (dirty[0] & /*userRefs*/
        64 && t1_value !== (t1_value = /*userRefs*/
        ctx2[6].map(func_1).join(", ") + "")) set_data(t1, t1_value);
      },
      d(detaching) {
        if (detaching) {
          detach(span);
        }
      }
    };
  }
  function create_fragment$2(ctx) {
    let div40;
    let div3;
    let label0;
    let t1;
    let div2;
    let div0;
    let t2;
    let div1;
    let input0;
    let t3;
    let button0;
    let svg1;
    let path1;
    let svg1_class_value;
    let t4;
    let t5;
    let div37;
    let div4;
    let label1;
    let t7;
    let button1;
    let span0;
    let t9;
    let span1;
    let span1_class_value;
    let button1_class_value;
    let t10;
    let div17;
    let div8;
    let div6;
    let div5;
    let label2;
    let t12;
    let button2;
    let span2;
    let t14;
    let span3;
    let span3_class_value;
    let button2_class_value;
    let t15;
    let span4;
    let t16_value = (
      /*currentParams*/
      (ctx[0].temperature ?? "Default") + ""
    );
    let t16;
    let t17;
    let div7;
    let input1;
    let input1_value_value;
    let div7_class_value;
    let t18;
    let div12;
    let div10;
    let div9;
    let label3;
    let t20;
    let button3;
    let span5;
    let t22;
    let span6;
    let button3_class_value;
    let t23;
    let span7;
    let t24_value = (
      /*currentParams*/
      (ctx[0].top_p ?? "Default") + ""
    );
    let t24;
    let t25;
    let div11;
    let input2;
    let input2_value_value;
    let div11_class_value;
    let t26;
    let div16;
    let div14;
    let div13;
    let label4;
    let t28;
    let button4;
    let span8;
    let t30;
    let span9;
    let button4_class_value;
    let t31;
    let span10;
    let t32_value = (
      /*currentParams*/
      (ctx[0].min_p ?? "Default") + ""
    );
    let t32;
    let t33;
    let div15;
    let input3;
    let input3_value_value;
    let div15_class_value;
    let t34;
    let div19;
    let div18;
    let t36;
    let input4;
    let t37;
    let div21;
    let div20;
    let t39;
    let input5;
    let t40;
    let div25;
    let div22;
    let label7;
    let t42;
    let input6;
    let t43;
    let div23;
    let label8;
    let t45;
    let input7;
    let t46;
    let div24;
    let label9;
    let t48;
    let input8;
    let t49;
    let div29;
    let div28;
    let div26;
    let t52;
    let div27;
    let button5;
    let t53;
    let button5_class_value;
    let t54;
    let button6;
    let t55;
    let button6_class_value;
    let t56;
    let t57;
    let div30;
    let label11;
    let t59;
    let select;
    let option0;
    let t60;
    let option1;
    let option2;
    let option3;
    let t64;
    let div36;
    let label12;
    let t66;
    let div35;
    let div31;
    let span11;
    let t68;
    let button7;
    let span12;
    let t70;
    let span13;
    let span13_class_value;
    let button7_class_value;
    let t71;
    let div32;
    let span14;
    let t73;
    let button8;
    let span15;
    let t75;
    let span16;
    let span16_class_value;
    let button8_class_value;
    let t76;
    let div33;
    let span17;
    let t78;
    let button9;
    let span18;
    let t80;
    let span19;
    let span19_class_value;
    let button9_class_value;
    let t81;
    let div34;
    let span20;
    let t83;
    let button10;
    let span21;
    let t85;
    let span22;
    let span22_class_value;
    let button10_class_value;
    let t86;
    let div39;
    let div38;
    let h3;
    let t88;
    let button11;
    let span23;
    let t90;
    let span24;
    let span24_class_value;
    let button11_class_value;
    let t91;
    let mounted;
    let dispose;
    let if_block0 = (
      /*isDropdownOpen*/
      ctx[4] && create_if_block_4(ctx)
    );
    function select_block_type(ctx2, dirty) {
      if (
        /*thinkingMode*/
        ctx2[2] === "level"
      ) return create_if_block_3;
      return create_else_block;
    }
    let current_block_type = select_block_type(ctx);
    let if_block1 = current_block_type(ctx);
    let if_block2 = (
      /*templates*/
      ctx[3].enabled && create_if_block(ctx)
    );
    return {
      c() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        div40 = element("div");
        div3 = element("div");
        label0 = element("label");
        label0.textContent = "Model Configuration";
        t1 = space();
        div2 = element("div");
        div0 = element("div");
        div0.innerHTML = `<svg class="h-5 w-5 text-zinc-500 group-focus-within:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>`;
        t2 = space();
        div1 = element("div");
        input0 = element("input");
        t3 = space();
        button0 = element("button");
        svg1 = svg_element("svg");
        path1 = svg_element("path");
        t4 = space();
        if (if_block0) if_block0.c();
        t5 = space();
        div37 = element("div");
        div4 = element("div");
        label1 = element("label");
        label1.textContent = "Streaming Response";
        t7 = space();
        button1 = element("button");
        span0 = element("span");
        span0.textContent = "Enable streaming";
        t9 = space();
        span1 = element("span");
        t10 = space();
        div17 = element("div");
        div8 = element("div");
        div6 = element("div");
        div5 = element("div");
        label2 = element("label");
        label2.textContent = "Temperature";
        t12 = space();
        button2 = element("button");
        span2 = element("span");
        span2.textContent = "Enable Temperature";
        t14 = space();
        span3 = element("span");
        t15 = space();
        span4 = element("span");
        t16 = text(t16_value);
        t17 = space();
        div7 = element("div");
        input1 = element("input");
        t18 = space();
        div12 = element("div");
        div10 = element("div");
        div9 = element("div");
        label3 = element("label");
        label3.textContent = "Top P";
        t20 = space();
        button3 = element("button");
        span5 = element("span");
        span5.textContent = "Enable Top P";
        t22 = space();
        span6 = element("span");
        t23 = space();
        span7 = element("span");
        t24 = text(t24_value);
        t25 = space();
        div11 = element("div");
        input2 = element("input");
        t26 = space();
        div16 = element("div");
        div14 = element("div");
        div13 = element("div");
        label4 = element("label");
        label4.textContent = "Min P";
        t28 = space();
        button4 = element("button");
        span8 = element("span");
        span8.textContent = "Enable Min P";
        t30 = space();
        span9 = element("span");
        t31 = space();
        span10 = element("span");
        t32 = text(t32_value);
        t33 = space();
        div15 = element("div");
        input3 = element("input");
        t34 = space();
        div19 = element("div");
        div18 = element("div");
        div18.innerHTML = `<label for="top-k" class="text-sm font-medium text-zinc-300">Top K</label>`;
        t36 = space();
        input4 = element("input");
        t37 = space();
        div21 = element("div");
        div20 = element("div");
        div20.innerHTML = `<label for="seed" class="text-sm font-medium text-zinc-300">Seed</label>`;
        t39 = space();
        input5 = element("input");
        t40 = space();
        div25 = element("div");
        div22 = element("div");
        label7 = element("label");
        label7.textContent = "Frequency Penalty";
        t42 = space();
        input6 = element("input");
        t43 = space();
        div23 = element("div");
        label8 = element("label");
        label8.textContent = "Presence Penalty";
        t45 = space();
        input7 = element("input");
        t46 = space();
        div24 = element("div");
        label9 = element("label");
        label9.textContent = "Repetition Penalty";
        t48 = space();
        input8 = element("input");
        t49 = space();
        div29 = element("div");
        div28 = element("div");
        div26 = element("div");
        div26.innerHTML = `<svg class="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg> <label for="thinking-mode" class="text-sm font-medium text-zinc-200">Thinking Configuration</label>`;
        t52 = space();
        div27 = element("div");
        button5 = element("button");
        t53 = text("Level");
        t54 = space();
        button6 = element("button");
        t55 = text("Tokens");
        t56 = space();
        if_block1.c();
        t57 = space();
        div30 = element("div");
        label11 = element("label");
        label11.textContent = "Media Resolution";
        t59 = space();
        select = element("select");
        option0 = element("option");
        t60 = text("Default");
        option1 = element("option");
        option1.textContent = "Low";
        option2 = element("option");
        option2.textContent = "Medium";
        option3 = element("option");
        option3.textContent = "High";
        t64 = space();
        div36 = element("div");
        label12 = element("label");
        label12.textContent = "Active Tools";
        t66 = space();
        div35 = element("div");
        div31 = element("div");
        span11 = element("span");
        span11.textContent = "Google Search";
        t68 = space();
        button7 = element("button");
        span12 = element("span");
        span12.textContent = "Toggle Google Search";
        t70 = space();
        span13 = element("span");
        t71 = space();
        div32 = element("div");
        span14 = element("span");
        span14.textContent = "Google Maps";
        t73 = space();
        button8 = element("button");
        span15 = element("span");
        span15.textContent = "Toggle Google Maps";
        t75 = space();
        span16 = element("span");
        t76 = space();
        div33 = element("div");
        span17 = element("span");
        span17.textContent = "URL Context";
        t78 = space();
        button9 = element("button");
        span18 = element("span");
        span18.textContent = "Toggle URL Context";
        t80 = space();
        span19 = element("span");
        t81 = space();
        div34 = element("div");
        span20 = element("span");
        span20.textContent = "Code Execution";
        t83 = space();
        button10 = element("button");
        span21 = element("span");
        span21.textContent = "Toggle Code Execution";
        t85 = space();
        span22 = element("span");
        t86 = space();
        div39 = element("div");
        div38 = element("div");
        h3 = element("h3");
        h3.innerHTML = `<svg class="h-4 w-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                Acvus Templates`;
        t88 = space();
        button11 = element("button");
        span23 = element("span");
        span23.textContent = "Enable Templates";
        t90 = space();
        span24 = element("span");
        t91 = space();
        if (if_block2) if_block2.c();
        attr(label0, "for", "model-config");
        attr(label0, "class", "block text-sm font-medium text-zinc-300");
        attr(div0, "class", "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10");
        attr(input0, "id", "model-config");
        attr(input0, "type", "text");
        attr(input0, "placeholder", "e.g. gemini-2.5-pro");
        attr(input0, "class", "w-full pl-10 pr-10 py-3 bg-[#252528] border border-zinc-700 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm");
        attr(path1, "stroke-linecap", "round");
        attr(path1, "stroke-linejoin", "round");
        attr(path1, "stroke-width", "2");
        attr(path1, "d", "M19 9l-7 7-7-7");
        attr(svg1, "class", svg1_class_value = "h-5 w-5 transform transition-transform " + /*isDropdownOpen*/
        (ctx[4] ? "rotate-180" : ""));
        attr(svg1, "fill", "none");
        attr(svg1, "viewBox", "0 0 24 24");
        attr(svg1, "stroke", "currentColor");
        attr(button0, "type", "button");
        attr(button0, "class", "absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors");
        attr(div1, "class", "relative");
        attr(div2, "class", "relative group");
        attr(div3, "class", "space-y-3");
        attr(label1, "for", "stream-toggle");
        attr(label1, "class", "text-sm font-medium text-zinc-200");
        attr(span0, "class", "sr-only");
        attr(span1, "class", span1_class_value = "inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm " + /*currentParams*/
        (ctx[0].use_stream ? "translate-x-6" : "translate-x-1"));
        attr(button1, "id", "stream-toggle");
        attr(button1, "class", button1_class_value = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*currentParams*/
        (ctx[0].use_stream ? "bg-blue-600" : "bg-zinc-700"));
        attr(div4, "class", "flex items-center justify-between px-4 py-3 bg-[#252528] rounded-xl border border-zinc-800 shadow-sm");
        attr(label2, "for", "temperature-toggle");
        attr(label2, "class", "text-sm font-medium text-zinc-300");
        attr(span2, "class", "sr-only");
        attr(span3, "class", span3_class_value = "inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform shadow-sm " + /*currentParams*/
        (ctx[0].temperature !== void 0 ? "translate-x-4.5" : "translate-x-1"));
        set_style(span3, "transform", "translateX(" + /*currentParams*/
        (ctx[0].temperature !== void 0 ? "18px" : "4px") + ")");
        attr(button2, "id", "temperature-toggle");
        attr(button2, "class", button2_class_value = "relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*currentParams*/
        (ctx[0].temperature !== void 0 ? "bg-blue-600" : "bg-zinc-700"));
        attr(div5, "class", "flex items-center gap-3");
        attr(span4, "class", "text-xs font-mono text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded");
        attr(div6, "class", "flex justify-between items-center");
        attr(input1, "type", "range");
        attr(input1, "min", "0");
        attr(input1, "max", "2");
        attr(input1, "step", "0.1");
        input1.value = input1_value_value = /*currentParams*/
        ctx[0].temperature ?? 1;
        attr(input1, "class", "flex-1 h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-blue-500");
        attr(div7, "class", div7_class_value = "flex gap-4 items-center " + /*currentParams*/
        (ctx[0].temperature === void 0 ? "opacity-50" : ""));
        attr(div8, "class", "space-y-3");
        attr(label3, "for", "top-p-toggle");
        attr(label3, "class", "text-sm font-medium text-zinc-300");
        attr(span5, "class", "sr-only");
        attr(span6, "class", "inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform shadow-sm");
        set_style(span6, "transform", "translateX(" + /*currentParams*/
        (ctx[0].top_p !== void 0 ? "18px" : "4px") + ")");
        attr(button3, "id", "top-p-toggle");
        attr(button3, "class", button3_class_value = "relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*currentParams*/
        (ctx[0].top_p !== void 0 ? "bg-blue-600" : "bg-zinc-700"));
        attr(div9, "class", "flex items-center gap-3");
        attr(span7, "class", "text-xs font-mono text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded");
        attr(div10, "class", "flex justify-between items-center");
        attr(input2, "type", "range");
        attr(input2, "min", "0");
        attr(input2, "max", "1");
        attr(input2, "step", "0.01");
        input2.value = input2_value_value = /*currentParams*/
        ctx[0].top_p ?? 1;
        attr(input2, "class", "flex-1 h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-blue-500");
        attr(div11, "class", div11_class_value = "flex gap-4 items-center " + /*currentParams*/
        (ctx[0].top_p === void 0 ? "opacity-50" : ""));
        attr(div12, "class", "space-y-3");
        attr(label4, "for", "min-p-toggle");
        attr(label4, "class", "text-sm font-medium text-zinc-300");
        attr(span8, "class", "sr-only");
        attr(span9, "class", "inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform shadow-sm");
        set_style(span9, "transform", "translateX(" + /*currentParams*/
        (ctx[0].min_p !== void 0 ? "18px" : "4px") + ")");
        attr(button4, "id", "min-p-toggle");
        attr(button4, "class", button4_class_value = "relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*currentParams*/
        (ctx[0].min_p !== void 0 ? "bg-blue-600" : "bg-zinc-700"));
        attr(div13, "class", "flex items-center gap-3");
        attr(span10, "class", "text-xs font-mono text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded");
        attr(div14, "class", "flex justify-between items-center");
        attr(input3, "type", "range");
        attr(input3, "min", "0");
        attr(input3, "max", "1");
        attr(input3, "step", "0.01");
        input3.value = input3_value_value = /*currentParams*/
        ctx[0].min_p ?? 0;
        attr(input3, "class", "flex-1 h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-blue-500");
        attr(div15, "class", div15_class_value = "flex gap-4 items-center " + /*currentParams*/
        (ctx[0].min_p === void 0 ? "opacity-50" : ""));
        attr(div16, "class", "space-y-3");
        attr(div17, "class", "grid grid-cols-1 gap-6");
        attr(div18, "class", "flex justify-between");
        attr(input4, "id", "top-k");
        attr(input4, "type", "number");
        attr(input4, "class", "w-full px-4 py-2.5 bg-[#252528] border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors");
        attr(div19, "class", "space-y-2");
        attr(div20, "class", "flex justify-between");
        attr(input5, "id", "seed");
        attr(input5, "type", "number");
        attr(input5, "class", "w-full px-4 py-2.5 bg-[#252528] border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors");
        attr(div21, "class", "space-y-2");
        attr(label7, "for", "frequency-penalty");
        attr(label7, "class", "text-sm font-medium text-zinc-300");
        attr(input6, "id", "frequency-penalty");
        attr(input6, "type", "number");
        attr(input6, "step", "0.1");
        attr(input6, "class", "w-full px-4 py-2.5 bg-[#252528] border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors");
        attr(div22, "class", "space-y-2");
        attr(label8, "for", "presence-penalty");
        attr(label8, "class", "text-sm font-medium text-zinc-300");
        attr(input7, "id", "presence-penalty");
        attr(input7, "type", "number");
        attr(input7, "step", "0.1");
        attr(input7, "class", "w-full px-4 py-2.5 bg-[#252528] border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors");
        attr(div23, "class", "space-y-2");
        attr(label9, "for", "repetition-penalty");
        attr(label9, "class", "text-sm font-medium text-zinc-300");
        attr(input8, "id", "repetition-penalty");
        attr(input8, "type", "number");
        attr(input8, "step", "0.1");
        attr(input8, "class", "w-full px-4 py-2.5 bg-[#252528] border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors");
        attr(div24, "class", "space-y-2");
        attr(div25, "class", "grid grid-cols-1 md:grid-cols-3 gap-4");
        attr(div26, "class", "flex items-center gap-2");
        attr(button5, "class", button5_class_value = "px-3 py-1 text-xs font-medium rounded-md transition-all " + /*thinkingMode*/
        (ctx[2] === "level" ? "bg-zinc-700 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"));
        attr(button6, "class", button6_class_value = "px-3 py-1 text-xs font-medium rounded-md transition-all " + /*thinkingMode*/
        (ctx[2] === "tokens" ? "bg-zinc-700 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"));
        attr(div27, "class", "flex bg-zinc-900 rounded-lg p-1 border border-zinc-800");
        attr(div28, "class", "flex items-center justify-between");
        attr(div29, "class", "space-y-3 px-5 py-3 bg-[#252528] rounded-xl border border-zinc-800 shadow-sm");
        attr(label11, "for", "media-resolution");
        attr(label11, "class", "text-sm font-medium text-zinc-300");
        option0.__value = void 0;
        set_input_value(option0, option0.__value);
        option1.__value = "media_resolution_low";
        set_input_value(option1, option1.__value);
        option2.__value = "media_resolution_medium";
        set_input_value(option2, option2.__value);
        option3.__value = "media_resolution_high";
        set_input_value(option3, option3.__value);
        attr(select, "id", "media-resolution");
        attr(select, "class", "w-full px-4 py-2.5 bg-[#252528] border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors");
        if (
          /*currentParams*/
          ctx[0].media_resolution === void 0
        ) add_render_callback(() => (
          /*select_change_handler_1*/
          ctx[36].call(select)
        ));
        attr(div30, "class", "space-y-2");
        attr(label12, "for", "active-tools");
        attr(label12, "class", "block text-sm font-medium text-zinc-300");
        attr(span11, "class", "text-sm font-medium text-zinc-200");
        attr(span12, "class", "sr-only");
        attr(span13, "class", span13_class_value = "inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm " + /*currentParams*/
        (((_a = ctx[0].active_tools) == null ? void 0 : _a.includes("google_search")) ? "translate-x-6" : "translate-x-1"));
        attr(button7, "type", "button");
        attr(button7, "class", button7_class_value = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*currentParams*/
        (((_b = ctx[0].active_tools) == null ? void 0 : _b.includes("google_search")) ? "bg-blue-600" : "bg-zinc-700"));
        attr(div31, "class", "flex items-center justify-between px-4 py-3 bg-[#252528] rounded-xl border border-zinc-800 shadow-sm");
        attr(span14, "class", "text-sm font-medium text-zinc-200");
        attr(span15, "class", "sr-only");
        attr(span16, "class", span16_class_value = "inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm " + /*currentParams*/
        (((_c = ctx[0].active_tools) == null ? void 0 : _c.includes("googleMaps")) ? "translate-x-6" : "translate-x-1"));
        attr(button8, "type", "button");
        attr(button8, "class", button8_class_value = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*currentParams*/
        (((_d = ctx[0].active_tools) == null ? void 0 : _d.includes("googleMaps")) ? "bg-blue-600" : "bg-zinc-700"));
        attr(div32, "class", "flex items-center justify-between px-4 py-3 bg-[#252528] rounded-xl border border-zinc-800 shadow-sm");
        attr(span17, "class", "text-sm font-medium text-zinc-200");
        attr(span18, "class", "sr-only");
        attr(span19, "class", span19_class_value = "inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm " + /*currentParams*/
        (((_e = ctx[0].active_tools) == null ? void 0 : _e.includes("url_context")) ? "translate-x-6" : "translate-x-1"));
        attr(button9, "type", "button");
        attr(button9, "class", button9_class_value = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*currentParams*/
        (((_f = ctx[0].active_tools) == null ? void 0 : _f.includes("url_context")) ? "bg-blue-600" : "bg-zinc-700"));
        attr(div33, "class", "flex items-center justify-between px-4 py-3 bg-[#252528] rounded-xl border border-zinc-800 shadow-sm");
        attr(span20, "class", "text-sm font-medium text-zinc-200");
        attr(span21, "class", "sr-only");
        attr(span22, "class", span22_class_value = "inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm " + /*currentParams*/
        (((_g = ctx[0].active_tools) == null ? void 0 : _g.includes("code_execution")) ? "translate-x-6" : "translate-x-1"));
        attr(button10, "type", "button");
        attr(button10, "class", button10_class_value = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*currentParams*/
        (((_h = ctx[0].active_tools) == null ? void 0 : _h.includes("code_execution")) ? "bg-blue-600" : "bg-zinc-700"));
        attr(div34, "class", "flex items-center justify-between px-4 py-3 bg-[#252528] rounded-xl border border-zinc-800 shadow-sm");
        attr(div35, "class", "grid grid-cols-1 md:grid-cols-2 gap-4");
        attr(div36, "class", "space-y-3");
        attr(div37, "class", "space-y-6");
        attr(h3, "class", "text-sm font-semibold text-zinc-300 uppercase tracking-wider flex items-center gap-2");
        attr(span23, "class", "sr-only");
        attr(span24, "class", span24_class_value = "inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm " + /*templates*/
        (ctx[3].enabled ? "translate-x-6" : "translate-x-1"));
        attr(button11, "type", "button");
        attr(button11, "class", button11_class_value = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*templates*/
        (ctx[3].enabled ? "bg-blue-600" : "bg-zinc-700"));
        attr(div38, "class", "flex items-center justify-between");
        attr(div39, "class", "space-y-4 pt-2");
        attr(div40, "class", "max-w-3xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8");
      },
      m(target, anchor) {
        insert(target, div40, anchor);
        append(div40, div3);
        append(div3, label0);
        append(div3, t1);
        append(div3, div2);
        append(div2, div0);
        append(div2, t2);
        append(div2, div1);
        append(div1, input0);
        set_input_value(
          input0,
          /*currentModelId*/
          ctx[1]
        );
        append(div1, t3);
        append(div1, button0);
        append(button0, svg1);
        append(svg1, path1);
        append(div2, t4);
        if (if_block0) if_block0.m(div2, null);
        ctx[23](div2);
        append(div40, t5);
        append(div40, div37);
        append(div37, div4);
        append(div4, label1);
        append(div4, t7);
        append(div4, button1);
        append(button1, span0);
        append(button1, t9);
        append(button1, span1);
        append(div37, t10);
        append(div37, div17);
        append(div17, div8);
        append(div8, div6);
        append(div6, div5);
        append(div5, label2);
        append(div5, t12);
        append(div5, button2);
        append(button2, span2);
        append(button2, t14);
        append(button2, span3);
        append(div6, t15);
        append(div6, span4);
        append(span4, t16);
        append(div8, t17);
        append(div8, div7);
        append(div7, input1);
        append(div17, t18);
        append(div17, div12);
        append(div12, div10);
        append(div10, div9);
        append(div9, label3);
        append(div9, t20);
        append(div9, button3);
        append(button3, span5);
        append(button3, t22);
        append(button3, span6);
        append(div10, t23);
        append(div10, span7);
        append(span7, t24);
        append(div12, t25);
        append(div12, div11);
        append(div11, input2);
        append(div17, t26);
        append(div17, div16);
        append(div16, div14);
        append(div14, div13);
        append(div13, label4);
        append(div13, t28);
        append(div13, button4);
        append(button4, span8);
        append(button4, t30);
        append(button4, span9);
        append(div14, t31);
        append(div14, span10);
        append(span10, t32);
        append(div16, t33);
        append(div16, div15);
        append(div15, input3);
        append(div37, t34);
        append(div37, div19);
        append(div19, div18);
        append(div19, t36);
        append(div19, input4);
        set_input_value(
          input4,
          /*currentParams*/
          ctx[0].top_k
        );
        append(div37, t37);
        append(div37, div21);
        append(div21, div20);
        append(div21, t39);
        append(div21, input5);
        set_input_value(
          input5,
          /*currentParams*/
          ctx[0].seed
        );
        append(div37, t40);
        append(div37, div25);
        append(div25, div22);
        append(div22, label7);
        append(div22, t42);
        append(div22, input6);
        set_input_value(
          input6,
          /*currentParams*/
          ctx[0].frequency_penalty
        );
        append(div25, t43);
        append(div25, div23);
        append(div23, label8);
        append(div23, t45);
        append(div23, input7);
        set_input_value(
          input7,
          /*currentParams*/
          ctx[0].presence_penalty
        );
        append(div25, t46);
        append(div25, div24);
        append(div24, label9);
        append(div24, t48);
        append(div24, input8);
        set_input_value(
          input8,
          /*currentParams*/
          ctx[0].repetition_penalty
        );
        append(div37, t49);
        append(div37, div29);
        append(div29, div28);
        append(div28, div26);
        append(div28, t52);
        append(div28, div27);
        append(div27, button5);
        append(button5, t53);
        append(div27, t54);
        append(div27, button6);
        append(button6, t55);
        append(div29, t56);
        if_block1.m(div29, null);
        append(div37, t57);
        append(div37, div30);
        append(div30, label11);
        append(div30, t59);
        append(div30, select);
        append(select, option0);
        append(option0, t60);
        append(select, option1);
        append(select, option2);
        append(select, option3);
        select_option(
          select,
          /*currentParams*/
          ctx[0].media_resolution,
          true
        );
        append(div37, t64);
        append(div37, div36);
        append(div36, label12);
        append(div36, t66);
        append(div36, div35);
        append(div35, div31);
        append(div31, span11);
        append(div31, t68);
        append(div31, button7);
        append(button7, span12);
        append(button7, t70);
        append(button7, span13);
        append(div35, t71);
        append(div35, div32);
        append(div32, span14);
        append(div32, t73);
        append(div32, button8);
        append(button8, span15);
        append(button8, t75);
        append(button8, span16);
        append(div35, t76);
        append(div35, div33);
        append(div33, span17);
        append(div33, t78);
        append(div33, button9);
        append(button9, span18);
        append(button9, t80);
        append(button9, span19);
        append(div35, t81);
        append(div35, div34);
        append(div34, span20);
        append(div34, t83);
        append(div34, button10);
        append(button10, span21);
        append(button10, t85);
        append(button10, span22);
        append(div40, t86);
        append(div40, div39);
        append(div39, div38);
        append(div38, h3);
        append(div38, t88);
        append(div38, button11);
        append(button11, span23);
        append(button11, t90);
        append(button11, span24);
        append(div39, t91);
        if (if_block2) if_block2.m(div39, null);
        if (!mounted) {
          dispose = [
            listen(
              input0,
              "input",
              /*input0_input_handler*/
              ctx[19]
            ),
            listen(
              input0,
              "change",
              /*onConfigChange*/
              ctx[10]
            ),
            listen(
              input0,
              "focus",
              /*focus_handler*/
              ctx[20]
            ),
            listen(
              button0,
              "click",
              /*toggleDropdown*/
              ctx[11]
            ),
            listen(
              button1,
              "click",
              /*toggleStream*/
              ctx[13]
            ),
            listen(
              button2,
              "click",
              /*toggleTemperature*/
              ctx[14]
            ),
            listen(
              input1,
              "input",
              /*input_handler*/
              ctx[24]
            ),
            listen(
              button3,
              "click",
              /*toggleTopP*/
              ctx[15]
            ),
            listen(
              input2,
              "input",
              /*input_handler_1*/
              ctx[25]
            ),
            listen(
              button4,
              "click",
              /*toggleMinP*/
              ctx[16]
            ),
            listen(
              input3,
              "input",
              /*input_handler_2*/
              ctx[26]
            ),
            listen(
              input4,
              "input",
              /*input4_input_handler*/
              ctx[27]
            ),
            listen(
              input4,
              "change",
              /*onConfigChange*/
              ctx[10]
            ),
            listen(
              input5,
              "input",
              /*input5_input_handler*/
              ctx[28]
            ),
            listen(
              input5,
              "change",
              /*onConfigChange*/
              ctx[10]
            ),
            listen(
              input6,
              "input",
              /*input6_input_handler*/
              ctx[29]
            ),
            listen(
              input6,
              "change",
              /*onConfigChange*/
              ctx[10]
            ),
            listen(
              input7,
              "input",
              /*input7_input_handler*/
              ctx[30]
            ),
            listen(
              input7,
              "change",
              /*onConfigChange*/
              ctx[10]
            ),
            listen(
              input8,
              "input",
              /*input8_input_handler*/
              ctx[31]
            ),
            listen(
              input8,
              "change",
              /*onConfigChange*/
              ctx[10]
            ),
            listen(
              button5,
              "click",
              /*click_handler_2*/
              ctx[32]
            ),
            listen(
              button6,
              "click",
              /*click_handler_3*/
              ctx[33]
            ),
            listen(
              select,
              "change",
              /*select_change_handler_1*/
              ctx[36]
            ),
            listen(
              select,
              "change",
              /*onConfigChange*/
              ctx[10]
            ),
            listen(
              button7,
              "click",
              /*click_handler_4*/
              ctx[37]
            ),
            listen(
              button8,
              "click",
              /*click_handler_5*/
              ctx[38]
            ),
            listen(
              button9,
              "click",
              /*click_handler_6*/
              ctx[39]
            ),
            listen(
              button10,
              "click",
              /*click_handler_7*/
              ctx[40]
            ),
            listen(
              button11,
              "click",
              /*toggleTemplates*/
              ctx[8]
            )
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (dirty[0] & /*currentModelId*/
        2 && input0.value !== /*currentModelId*/
        ctx2[1]) {
          set_input_value(
            input0,
            /*currentModelId*/
            ctx2[1]
          );
        }
        if (dirty[0] & /*isDropdownOpen*/
        16 && svg1_class_value !== (svg1_class_value = "h-5 w-5 transform transition-transform " + /*isDropdownOpen*/
        (ctx2[4] ? "rotate-180" : ""))) {
          attr(svg1, "class", svg1_class_value);
        }
        if (
          /*isDropdownOpen*/
          ctx2[4]
        ) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_4(ctx2);
            if_block0.c();
            if_block0.m(div2, null);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (dirty[0] & /*currentParams*/
        1 && span1_class_value !== (span1_class_value = "inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm " + /*currentParams*/
        (ctx2[0].use_stream ? "translate-x-6" : "translate-x-1"))) {
          attr(span1, "class", span1_class_value);
        }
        if (dirty[0] & /*currentParams*/
        1 && button1_class_value !== (button1_class_value = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*currentParams*/
        (ctx2[0].use_stream ? "bg-blue-600" : "bg-zinc-700"))) {
          attr(button1, "class", button1_class_value);
        }
        if (dirty[0] & /*currentParams*/
        1 && span3_class_value !== (span3_class_value = "inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform shadow-sm " + /*currentParams*/
        (ctx2[0].temperature !== void 0 ? "translate-x-4.5" : "translate-x-1"))) {
          attr(span3, "class", span3_class_value);
        }
        if (dirty[0] & /*currentParams*/
        1) {
          set_style(span3, "transform", "translateX(" + /*currentParams*/
          (ctx2[0].temperature !== void 0 ? "18px" : "4px") + ")");
        }
        if (dirty[0] & /*currentParams*/
        1 && button2_class_value !== (button2_class_value = "relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*currentParams*/
        (ctx2[0].temperature !== void 0 ? "bg-blue-600" : "bg-zinc-700"))) {
          attr(button2, "class", button2_class_value);
        }
        if (dirty[0] & /*currentParams*/
        1 && t16_value !== (t16_value = /*currentParams*/
        (ctx2[0].temperature ?? "Default") + "")) set_data(t16, t16_value);
        if (dirty[0] & /*currentParams*/
        1 && input1_value_value !== (input1_value_value = /*currentParams*/
        ctx2[0].temperature ?? 1)) {
          input1.value = input1_value_value;
        }
        if (dirty[0] & /*currentParams*/
        1 && div7_class_value !== (div7_class_value = "flex gap-4 items-center " + /*currentParams*/
        (ctx2[0].temperature === void 0 ? "opacity-50" : ""))) {
          attr(div7, "class", div7_class_value);
        }
        if (dirty[0] & /*currentParams*/
        1) {
          set_style(span6, "transform", "translateX(" + /*currentParams*/
          (ctx2[0].top_p !== void 0 ? "18px" : "4px") + ")");
        }
        if (dirty[0] & /*currentParams*/
        1 && button3_class_value !== (button3_class_value = "relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*currentParams*/
        (ctx2[0].top_p !== void 0 ? "bg-blue-600" : "bg-zinc-700"))) {
          attr(button3, "class", button3_class_value);
        }
        if (dirty[0] & /*currentParams*/
        1 && t24_value !== (t24_value = /*currentParams*/
        (ctx2[0].top_p ?? "Default") + "")) set_data(t24, t24_value);
        if (dirty[0] & /*currentParams*/
        1 && input2_value_value !== (input2_value_value = /*currentParams*/
        ctx2[0].top_p ?? 1)) {
          input2.value = input2_value_value;
        }
        if (dirty[0] & /*currentParams*/
        1 && div11_class_value !== (div11_class_value = "flex gap-4 items-center " + /*currentParams*/
        (ctx2[0].top_p === void 0 ? "opacity-50" : ""))) {
          attr(div11, "class", div11_class_value);
        }
        if (dirty[0] & /*currentParams*/
        1) {
          set_style(span9, "transform", "translateX(" + /*currentParams*/
          (ctx2[0].min_p !== void 0 ? "18px" : "4px") + ")");
        }
        if (dirty[0] & /*currentParams*/
        1 && button4_class_value !== (button4_class_value = "relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*currentParams*/
        (ctx2[0].min_p !== void 0 ? "bg-blue-600" : "bg-zinc-700"))) {
          attr(button4, "class", button4_class_value);
        }
        if (dirty[0] & /*currentParams*/
        1 && t32_value !== (t32_value = /*currentParams*/
        (ctx2[0].min_p ?? "Default") + "")) set_data(t32, t32_value);
        if (dirty[0] & /*currentParams*/
        1 && input3_value_value !== (input3_value_value = /*currentParams*/
        ctx2[0].min_p ?? 0)) {
          input3.value = input3_value_value;
        }
        if (dirty[0] & /*currentParams*/
        1 && div15_class_value !== (div15_class_value = "flex gap-4 items-center " + /*currentParams*/
        (ctx2[0].min_p === void 0 ? "opacity-50" : ""))) {
          attr(div15, "class", div15_class_value);
        }
        if (dirty[0] & /*currentParams*/
        1 && to_number(input4.value) !== /*currentParams*/
        ctx2[0].top_k) {
          set_input_value(
            input4,
            /*currentParams*/
            ctx2[0].top_k
          );
        }
        if (dirty[0] & /*currentParams*/
        1 && to_number(input5.value) !== /*currentParams*/
        ctx2[0].seed) {
          set_input_value(
            input5,
            /*currentParams*/
            ctx2[0].seed
          );
        }
        if (dirty[0] & /*currentParams*/
        1 && to_number(input6.value) !== /*currentParams*/
        ctx2[0].frequency_penalty) {
          set_input_value(
            input6,
            /*currentParams*/
            ctx2[0].frequency_penalty
          );
        }
        if (dirty[0] & /*currentParams*/
        1 && to_number(input7.value) !== /*currentParams*/
        ctx2[0].presence_penalty) {
          set_input_value(
            input7,
            /*currentParams*/
            ctx2[0].presence_penalty
          );
        }
        if (dirty[0] & /*currentParams*/
        1 && to_number(input8.value) !== /*currentParams*/
        ctx2[0].repetition_penalty) {
          set_input_value(
            input8,
            /*currentParams*/
            ctx2[0].repetition_penalty
          );
        }
        if (dirty[0] & /*thinkingMode*/
        4 && button5_class_value !== (button5_class_value = "px-3 py-1 text-xs font-medium rounded-md transition-all " + /*thinkingMode*/
        (ctx2[2] === "level" ? "bg-zinc-700 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"))) {
          attr(button5, "class", button5_class_value);
        }
        if (dirty[0] & /*thinkingMode*/
        4 && button6_class_value !== (button6_class_value = "px-3 py-1 text-xs font-medium rounded-md transition-all " + /*thinkingMode*/
        (ctx2[2] === "tokens" ? "bg-zinc-700 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"))) {
          attr(button6, "class", button6_class_value);
        }
        if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1.d(1);
          if_block1 = current_block_type(ctx2);
          if (if_block1) {
            if_block1.c();
            if_block1.m(div29, null);
          }
        }
        if (dirty[0] & /*currentParams*/
        1) {
          select_option(
            select,
            /*currentParams*/
            ctx2[0].media_resolution
          );
        }
        if (dirty[0] & /*currentParams*/
        1 && span13_class_value !== (span13_class_value = "inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm " + /*currentParams*/
        (((_a = ctx2[0].active_tools) == null ? void 0 : _a.includes("google_search")) ? "translate-x-6" : "translate-x-1"))) {
          attr(span13, "class", span13_class_value);
        }
        if (dirty[0] & /*currentParams*/
        1 && button7_class_value !== (button7_class_value = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*currentParams*/
        (((_b = ctx2[0].active_tools) == null ? void 0 : _b.includes("google_search")) ? "bg-blue-600" : "bg-zinc-700"))) {
          attr(button7, "class", button7_class_value);
        }
        if (dirty[0] & /*currentParams*/
        1 && span16_class_value !== (span16_class_value = "inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm " + /*currentParams*/
        (((_c = ctx2[0].active_tools) == null ? void 0 : _c.includes("googleMaps")) ? "translate-x-6" : "translate-x-1"))) {
          attr(span16, "class", span16_class_value);
        }
        if (dirty[0] & /*currentParams*/
        1 && button8_class_value !== (button8_class_value = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*currentParams*/
        (((_d = ctx2[0].active_tools) == null ? void 0 : _d.includes("googleMaps")) ? "bg-blue-600" : "bg-zinc-700"))) {
          attr(button8, "class", button8_class_value);
        }
        if (dirty[0] & /*currentParams*/
        1 && span19_class_value !== (span19_class_value = "inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm " + /*currentParams*/
        (((_e = ctx2[0].active_tools) == null ? void 0 : _e.includes("url_context")) ? "translate-x-6" : "translate-x-1"))) {
          attr(span19, "class", span19_class_value);
        }
        if (dirty[0] & /*currentParams*/
        1 && button9_class_value !== (button9_class_value = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*currentParams*/
        (((_f = ctx2[0].active_tools) == null ? void 0 : _f.includes("url_context")) ? "bg-blue-600" : "bg-zinc-700"))) {
          attr(button9, "class", button9_class_value);
        }
        if (dirty[0] & /*currentParams*/
        1 && span22_class_value !== (span22_class_value = "inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm " + /*currentParams*/
        (((_g = ctx2[0].active_tools) == null ? void 0 : _g.includes("code_execution")) ? "translate-x-6" : "translate-x-1"))) {
          attr(span22, "class", span22_class_value);
        }
        if (dirty[0] & /*currentParams*/
        1 && button10_class_value !== (button10_class_value = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*currentParams*/
        (((_h = ctx2[0].active_tools) == null ? void 0 : _h.includes("code_execution")) ? "bg-blue-600" : "bg-zinc-700"))) {
          attr(button10, "class", button10_class_value);
        }
        if (dirty[0] & /*templates*/
        8 && span24_class_value !== (span24_class_value = "inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm " + /*templates*/
        (ctx2[3].enabled ? "translate-x-6" : "translate-x-1"))) {
          attr(span24, "class", span24_class_value);
        }
        if (dirty[0] & /*templates*/
        8 && button11_class_value !== (button11_class_value = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 " + /*templates*/
        (ctx2[3].enabled ? "bg-blue-600" : "bg-zinc-700"))) {
          attr(button11, "class", button11_class_value);
        }
        if (
          /*templates*/
          ctx2[3].enabled
        ) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
            if (dirty[0] & /*templates*/
            8) {
              transition_in(if_block2, 1);
            }
          } else {
            if_block2 = create_if_block(ctx2);
            if_block2.c();
            transition_in(if_block2, 1);
            if_block2.m(div39, null);
          }
        } else if (if_block2) {
          group_outros();
          transition_out(if_block2, 1, 1, () => {
            if_block2 = null;
          });
          check_outros();
        }
      },
      i(local) {
        transition_in(if_block2);
      },
      o(local) {
        transition_out(if_block2);
      },
      d(detaching) {
        if (detaching) {
          detach(div40);
        }
        if (if_block0) if_block0.d();
        ctx[23](null);
        if_block1.d();
        if (if_block2) if_block2.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }
  const func = (r) => "@" + r;
  const func_1 = (r) => "@" + r;
  function instance$2($$self, $$props, $$invalidate) {
    let templates;
    let systemRefs;
    let userRefs;
    let { currentModelId = "" } = $$props;
    let { currentParams = {} } = $$props;
    let { thinkingMode = "level" } = $$props;
    function toggleTemplates() {
      if (!currentParams.templates) {
        $$invalidate(0, currentParams.templates = { enabled: true }, currentParams);
      } else {
        $$invalidate(0, currentParams.templates.enabled = !currentParams.templates.enabled, currentParams);
      }
      $$invalidate(0, currentParams);
      onConfigChange();
    }
    function updateTemplate(field, value) {
      if (!currentParams.templates) {
        $$invalidate(0, currentParams.templates = { enabled: true }, currentParams);
      }
      $$invalidate(0, currentParams.templates[field] = value || void 0, currentParams);
      $$invalidate(0, currentParams);
      onConfigChange();
    }
    const dispatch2 = createEventDispatcher();
    let isDropdownOpen = false;
    let dropdownContainer;
    function onConfigChange() {
      dispatch2("saveConfig");
    }
    function toggleDropdown(e) {
      e.stopPropagation();
      $$invalidate(4, isDropdownOpen = !isDropdownOpen);
    }
    function selectModel(model) {
      $$invalidate(1, currentModelId = model);
      $$invalidate(4, isDropdownOpen = false);
      onConfigChange();
    }
    onMount(() => {
      const handleClickOutside = (event) => {
        if (dropdownContainer && !dropdownContainer.contains(event.target)) {
          $$invalidate(4, isDropdownOpen = false);
        }
      };
      window.addEventListener("click", handleClickOutside);
      return () => {
        window.removeEventListener("click", handleClickOutside);
      };
    });
    function toggleStream() {
      $$invalidate(0, currentParams.use_stream = !currentParams.use_stream, currentParams);
      onConfigChange();
    }
    function toggleTemperature() {
      if (currentParams.temperature !== void 0) {
        $$invalidate(0, currentParams.temperature = void 0, currentParams);
      } else {
        $$invalidate(0, currentParams.temperature = 1, currentParams);
      }
      onConfigChange();
    }
    function toggleTopP() {
      if (currentParams.top_p !== void 0) {
        $$invalidate(0, currentParams.top_p = void 0, currentParams);
      } else {
        $$invalidate(0, currentParams.top_p = 1, currentParams);
      }
      onConfigChange();
    }
    function toggleMinP() {
      if (currentParams.min_p !== void 0) {
        $$invalidate(0, currentParams.min_p = void 0, currentParams);
      } else {
        $$invalidate(0, currentParams.min_p = 0, currentParams);
      }
      onConfigChange();
    }
    function setThinkingMode(mode) {
      $$invalidate(2, thinkingMode = mode);
      onConfigChange();
    }
    function toggleTool(tool) {
      const tools = currentParams.active_tools ?? [];
      if (tools.includes(tool)) {
        $$invalidate(0, currentParams.active_tools = tools.filter((t) => t !== tool), currentParams);
      } else {
        $$invalidate(0, currentParams.active_tools = [...tools, tool], currentParams);
      }
      onConfigChange();
    }
    function input0_input_handler() {
      currentModelId = this.value;
      $$invalidate(1, currentModelId);
    }
    const focus_handler = () => $$invalidate(4, isDropdownOpen = true);
    const click_handler = (model) => selectModel(model);
    const click_handler_1 = () => $$invalidate(4, isDropdownOpen = false);
    function div2_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        dropdownContainer = $$value;
        $$invalidate(5, dropdownContainer);
      });
    }
    const input_handler = (e) => {
      $$invalidate(0, currentParams.temperature = +e.currentTarget.value, currentParams);
      onConfigChange();
    };
    const input_handler_1 = (e) => {
      $$invalidate(0, currentParams.top_p = +e.currentTarget.value, currentParams);
      onConfigChange();
    };
    const input_handler_2 = (e) => {
      $$invalidate(0, currentParams.min_p = +e.currentTarget.value, currentParams);
      onConfigChange();
    };
    function input4_input_handler() {
      currentParams.top_k = to_number(this.value);
      $$invalidate(0, currentParams);
    }
    function input5_input_handler() {
      currentParams.seed = to_number(this.value);
      $$invalidate(0, currentParams);
    }
    function input6_input_handler() {
      currentParams.frequency_penalty = to_number(this.value);
      $$invalidate(0, currentParams);
    }
    function input7_input_handler() {
      currentParams.presence_penalty = to_number(this.value);
      $$invalidate(0, currentParams);
    }
    function input8_input_handler() {
      currentParams.repetition_penalty = to_number(this.value);
      $$invalidate(0, currentParams);
    }
    const click_handler_2 = () => setThinkingMode("level");
    const click_handler_3 = () => setThinkingMode("tokens");
    function select_change_handler() {
      currentParams.thinking_level = select_value(this);
      $$invalidate(0, currentParams);
    }
    function input_input_handler() {
      currentParams.thinking_tokens = to_number(this.value);
      $$invalidate(0, currentParams);
    }
    function select_change_handler_1() {
      currentParams.media_resolution = select_value(this);
      $$invalidate(0, currentParams);
    }
    const click_handler_4 = () => toggleTool("google_search");
    const click_handler_5 = () => toggleTool("googleMaps");
    const click_handler_6 = () => toggleTool("url_context");
    const click_handler_7 = () => toggleTool("code_execution");
    const input_handler_3 = (e) => updateTemplate("system_template", e.currentTarget.value);
    const input_handler_4 = (e) => updateTemplate("user_template", e.currentTarget.value);
    const input_handler_5 = (e) => updateTemplate("output_template", e.currentTarget.value);
    $$self.$$set = ($$props2) => {
      if ("currentModelId" in $$props2) $$invalidate(1, currentModelId = $$props2.currentModelId);
      if ("currentParams" in $$props2) $$invalidate(0, currentParams = $$props2.currentParams);
      if ("thinkingMode" in $$props2) $$invalidate(2, thinkingMode = $$props2.thinkingMode);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & /*currentParams*/
      1) {
        $$invalidate(3, templates = currentParams.templates ?? { enabled: false });
      }
      if ($$self.$$.dirty[0] & /*templates*/
      8) {
        $$invalidate(7, systemRefs = templates.system_template ? analyze(templates.system_template).contextRefs : []);
      }
      if ($$self.$$.dirty[0] & /*templates*/
      8) {
        $$invalidate(6, userRefs = templates.user_template ? analyze(templates.user_template).contextRefs : []);
      }
    };
    return [
      currentParams,
      currentModelId,
      thinkingMode,
      templates,
      isDropdownOpen,
      dropdownContainer,
      userRefs,
      systemRefs,
      toggleTemplates,
      updateTemplate,
      onConfigChange,
      toggleDropdown,
      selectModel,
      toggleStream,
      toggleTemperature,
      toggleTopP,
      toggleMinP,
      setThinkingMode,
      toggleTool,
      input0_input_handler,
      focus_handler,
      click_handler,
      click_handler_1,
      div2_binding,
      input_handler,
      input_handler_1,
      input_handler_2,
      input4_input_handler,
      input5_input_handler,
      input6_input_handler,
      input7_input_handler,
      input8_input_handler,
      click_handler_2,
      click_handler_3,
      select_change_handler,
      input_input_handler,
      select_change_handler_1,
      click_handler_4,
      click_handler_5,
      click_handler_6,
      click_handler_7,
      input_handler_3,
      input_handler_4,
      input_handler_5
    ];
  }
  class ModelSettings extends SvelteComponent {
    constructor(options) {
      super();
      init(
        this,
        options,
        instance$2,
        create_fragment$2,
        safe_not_equal,
        {
          currentModelId: 1,
          currentParams: 0,
          thinkingMode: 2
        },
        null,
        [-1, -1]
      );
    }
  }
  function create_fragment$1(ctx) {
    let div3;
    let div2;
    let modalheader;
    let t0;
    let div1;
    let requesttypesidebar;
    let t1;
    let div0;
    let modelsettings;
    let updating_currentModelId;
    let updating_currentParams;
    let updating_thinkingMode;
    let current;
    let mounted;
    let dispose;
    let modalheader_props = {
      isLoggedIn: (
        /*isLoggedIn*/
        ctx[1]
      ),
      userProfile: (
        /*userProfile*/
        ctx[2]
      ),
      projectId: (
        /*projectId*/
        ctx[3]
      ),
      serviceTier: (
        /*serviceTier*/
        ctx[4]
      ),
      optOut: (
        /*optOut*/
        ctx[5]
      )
    };
    modalheader = new ModalHeader({ props: modalheader_props });
    ctx[20](modalheader);
    modalheader.$on("close", function() {
      if (is_function(
        /*onClose*/
        ctx[0]
      )) ctx[0].apply(this, arguments);
    });
    modalheader.$on(
      "login",
      /*handleLogin*/
      ctx[12]
    );
    modalheader.$on(
      "logout",
      /*handleLogout*/
      ctx[13]
    );
    modalheader.$on(
      "quickBackup",
      /*handleQuickBackup*/
      ctx[16]
    );
    modalheader.$on(
      "quickRestore",
      /*handleQuickRestore*/
      ctx[17]
    );
    modalheader.$on(
      "export",
      /*handleExport*/
      ctx[18]
    );
    modalheader.$on(
      "importFile",
      /*handleImport*/
      ctx[19]
    );
    requesttypesidebar = new RequestTypeSidebar({
      props: {
        requestTypes: (
          /*requestTypes*/
          ctx[11]
        ),
        activeTab: (
          /*activeTab*/
          ctx[6]
        )
      }
    });
    requesttypesidebar.$on(
      "tabChange",
      /*handleTabChange*/
      ctx[15]
    );
    function modelsettings_currentModelId_binding(value) {
      ctx[21](value);
    }
    function modelsettings_currentParams_binding(value) {
      ctx[22](value);
    }
    function modelsettings_thinkingMode_binding(value) {
      ctx[23](value);
    }
    let modelsettings_props = {};
    if (
      /*currentModelId*/
      ctx[7] !== void 0
    ) {
      modelsettings_props.currentModelId = /*currentModelId*/
      ctx[7];
    }
    if (
      /*currentParams*/
      ctx[8] !== void 0
    ) {
      modelsettings_props.currentParams = /*currentParams*/
      ctx[8];
    }
    if (
      /*thinkingMode*/
      ctx[10] !== void 0
    ) {
      modelsettings_props.thinkingMode = /*thinkingMode*/
      ctx[10];
    }
    modelsettings = new ModelSettings({ props: modelsettings_props });
    binding_callbacks.push(() => bind(modelsettings, "currentModelId", modelsettings_currentModelId_binding));
    binding_callbacks.push(() => bind(modelsettings, "currentParams", modelsettings_currentParams_binding));
    binding_callbacks.push(() => bind(modelsettings, "thinkingMode", modelsettings_thinkingMode_binding));
    modelsettings.$on(
      "saveConfig",
      /*saveCurrentConfig*/
      ctx[14]
    );
    return {
      c() {
        div3 = element("div");
        div2 = element("div");
        create_component(modalheader.$$.fragment);
        t0 = space();
        div1 = element("div");
        create_component(requesttypesidebar.$$.fragment);
        t1 = space();
        div0 = element("div");
        create_component(modelsettings.$$.fragment);
        attr(div0, "class", "flex-1 overflow-y-auto bg-[#1e1e20]");
        attr(div1, "class", "flex flex-col md:flex-row flex-1 overflow-hidden");
        attr(div2, "class", "flex flex-col bg-[#1e1e20] w-full h-full sm:h-[90vh] sm:max-w-4xl sm:rounded-xl shadow-2xl border-0 sm:border border-zinc-800 overflow-hidden ring-0 sm:ring-1 ring-white/10 cursor-default");
        attr(div3, "class", "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-0 sm:p-4 sm:p-6");
        attr(div3, "role", "dialog");
        attr(div3, "aria-modal", "true");
        attr(div3, "tabindex", "-1");
      },
      m(target, anchor) {
        insert(target, div3, anchor);
        append(div3, div2);
        mount_component(modalheader, div2, null);
        append(div2, t0);
        append(div2, div1);
        mount_component(requesttypesidebar, div1, null);
        append(div1, t1);
        append(div1, div0);
        mount_component(modelsettings, div0, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen(div2, "click", stop_propagation(
              /*click_handler*/
              ctx[24]
            )),
            listen(div3, "click", function() {
              if (is_function(
                /*onClose*/
                ctx[0]
              )) ctx[0].apply(this, arguments);
            }),
            listen(
              div3,
              "keydown",
              /*keydown_handler*/
              ctx[25]
            )
          ];
          mounted = true;
        }
      },
      p(new_ctx, [dirty]) {
        ctx = new_ctx;
        const modalheader_changes = {};
        if (dirty & /*isLoggedIn*/
        2) modalheader_changes.isLoggedIn = /*isLoggedIn*/
        ctx[1];
        if (dirty & /*userProfile*/
        4) modalheader_changes.userProfile = /*userProfile*/
        ctx[2];
        if (dirty & /*projectId*/
        8) modalheader_changes.projectId = /*projectId*/
        ctx[3];
        if (dirty & /*serviceTier*/
        16) modalheader_changes.serviceTier = /*serviceTier*/
        ctx[4];
        if (dirty & /*optOut*/
        32) modalheader_changes.optOut = /*optOut*/
        ctx[5];
        modalheader.$set(modalheader_changes);
        const requesttypesidebar_changes = {};
        if (dirty & /*activeTab*/
        64) requesttypesidebar_changes.activeTab = /*activeTab*/
        ctx[6];
        requesttypesidebar.$set(requesttypesidebar_changes);
        const modelsettings_changes = {};
        if (!updating_currentModelId && dirty & /*currentModelId*/
        128) {
          updating_currentModelId = true;
          modelsettings_changes.currentModelId = /*currentModelId*/
          ctx[7];
          add_flush_callback(() => updating_currentModelId = false);
        }
        if (!updating_currentParams && dirty & /*currentParams*/
        256) {
          updating_currentParams = true;
          modelsettings_changes.currentParams = /*currentParams*/
          ctx[8];
          add_flush_callback(() => updating_currentParams = false);
        }
        if (!updating_thinkingMode && dirty & /*thinkingMode*/
        1024) {
          updating_thinkingMode = true;
          modelsettings_changes.thinkingMode = /*thinkingMode*/
          ctx[10];
          add_flush_callback(() => updating_thinkingMode = false);
        }
        modelsettings.$set(modelsettings_changes);
      },
      i(local) {
        if (current) return;
        transition_in(modalheader.$$.fragment, local);
        transition_in(requesttypesidebar.$$.fragment, local);
        transition_in(modelsettings.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(modalheader.$$.fragment, local);
        transition_out(requesttypesidebar.$$.fragment, local);
        transition_out(modelsettings.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching) {
          detach(div3);
        }
        ctx[20](null);
        destroy_component(modalheader);
        destroy_component(requesttypesidebar);
        destroy_component(modelsettings);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance$1($$self, $$props, $$invalidate) {
    let { onClose } = $$props;
    let isLoggedIn = false;
    let userProfile = null;
    let projectId = "";
    let serviceTier = "";
    let optOut = false;
    let activeTab = RequestType.Chat;
    let currentModelId = "";
    let currentParams = {};
    let modalHeader;
    let thinkingMode = "level";
    const requestTypes = Object.values(RequestType).filter((t) => t !== RequestType.Unknown);
    onMount(async () => {
      await checkLoginStatus();
      loadModelConfig(activeTab);
    });
    async function checkLoginStatus() {
      $$invalidate(1, isLoggedIn = AuthManager.isLoggedIn());
      if (isLoggedIn) {
        try {
          $$invalidate(2, userProfile = await AuthManager.fetchUserProfile());
          try {
            await GCAManager.ensureInitialized();
            const gcaInfo = GCAManager.getCachedInfo();
            $$invalidate(3, projectId = gcaInfo.projectId || "");
            $$invalidate(4, serviceTier = gcaInfo.serviceTier || "");
            $$invalidate(5, optOut = gcaInfo.optOut || false);
          } catch (e) {
            Logger.error("Failed to initialize GCA:", e);
          }
        } catch (e) {
          Logger.error("Error checking login status:", e);
          $$invalidate(1, isLoggedIn = false);
        }
      }
    }
    async function handleLogin() {
      try {
        await AuthManager.login();
        await checkLoginStatus();
      } catch (e) {
        Logger.error("Login failed:", e);
      }
    }
    function handleLogout() {
      AuthManager.logout();
      $$invalidate(1, isLoggedIn = false);
      $$invalidate(2, userProfile = null);
      $$invalidate(3, projectId = "");
      $$invalidate(4, serviceTier = "");
    }
    function loadModelConfig(type) {
      const config = ModelManager.getConfig(type);
      $$invalidate(7, currentModelId = config.model_id);
      $$invalidate(8, currentParams = { ...config.parameters });
      if (currentParams.thinking_tokens !== void 0) {
        $$invalidate(10, thinkingMode = "tokens");
      } else {
        $$invalidate(10, thinkingMode = "level");
      }
    }
    function saveCurrentConfig() {
      const paramsToSave = { ...currentParams };
      if (thinkingMode === "level") {
        delete paramsToSave.thinking_tokens;
      } else {
        delete paramsToSave.thinking_level;
      }
      ModelManager.setConfig(activeTab, {
        model_id: currentModelId,
        parameters: paramsToSave
      });
    }
    function handleTabChange(event) {
      const type = event.detail;
      saveCurrentConfig();
      $$invalidate(6, activeTab = type);
      loadModelConfig(type);
    }
    async function handleQuickBackup() {
      if (await BackupManager.backup()) {
        await alert("Backup saved successfully!");
      } else {
        await alert("Backup failed.");
      }
    }
    async function handleQuickRestore() {
      if (await confirm("Are you sure you want to restore? Current settings will be overwritten.")) {
        if (await BackupManager.restore()) {
          await alert("Restored successfully!");
          await checkLoginStatus();
          loadModelConfig(activeTab);
        } else {
          await alert("Restore failed or no backup found.");
        }
      }
    }
    async function handleExport() {
      await BackupManager.exportBackupToFile();
    }
    async function handleImport(event) {
      const file = event.detail;
      if (file) {
        if (await BackupManager.importBackupFromFile(file)) {
          await alert("Imported successfully!");
          await checkLoginStatus();
          loadModelConfig(activeTab);
        } else {
          await alert("Import failed.");
        }
      }
    }
    function modalheader_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        modalHeader = $$value;
        $$invalidate(9, modalHeader);
      });
    }
    function modelsettings_currentModelId_binding(value) {
      currentModelId = value;
      $$invalidate(7, currentModelId);
    }
    function modelsettings_currentParams_binding(value) {
      currentParams = value;
      $$invalidate(8, currentParams);
    }
    function modelsettings_thinkingMode_binding(value) {
      thinkingMode = value;
      $$invalidate(10, thinkingMode);
    }
    const click_handler = () => modalHeader == null ? void 0 : modalHeader.closeAllDropdowns();
    const keydown_handler = (e) => e.key === "Escape" && onClose();
    $$self.$$set = ($$props2) => {
      if ("onClose" in $$props2) $$invalidate(0, onClose = $$props2.onClose);
    };
    return [
      onClose,
      isLoggedIn,
      userProfile,
      projectId,
      serviceTier,
      optOut,
      activeTab,
      currentModelId,
      currentParams,
      modalHeader,
      thinkingMode,
      requestTypes,
      handleLogin,
      handleLogout,
      saveCurrentConfig,
      handleTabChange,
      handleQuickBackup,
      handleQuickRestore,
      handleExport,
      handleImport,
      modalheader_binding,
      modelsettings_currentModelId_binding,
      modelsettings_currentParams_binding,
      modelsettings_thinkingMode_binding,
      click_handler,
      keydown_handler
    ];
  }
  class Modal extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$1, create_fragment$1, safe_not_equal, { onClose: 0 });
    }
  }
  function create_fragment(ctx) {
    let button;
    let svg;
    let path;
    let t0;
    let span;
    let mounted;
    let dispose;
    return {
      c() {
        button = element("button");
        svg = svg_element("svg");
        path = svg_element("path");
        t0 = space();
        span = element("span");
        span.textContent = "Pomollu";
        attr(path, "d", "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z");
        attr(svg, "xmlns", "http://www.w3.org/2000/svg");
        attr(svg, "class", "h-6 w-6");
        attr(svg, "fill", "currentColor");
        attr(svg, "viewBox", "0 0 24 24");
        attr(button, "class", "flex gap-2 items-center hover:text-textcolor text-textcolor2");
        attr(
          button,
          "id",
          /*id*/
          ctx[0]
        );
      },
      m(target, anchor) {
        insert(target, button, anchor);
        append(button, svg);
        append(svg, path);
        append(button, t0);
        append(button, span);
        if (!mounted) {
          dispose = listen(
            button,
            "click",
            /*onClick*/
            ctx[1]
          );
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & /*id*/
        1) {
          attr(
            button,
            "id",
            /*id*/
            ctx2[0]
          );
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(button);
        }
        mounted = false;
        dispose();
      }
    };
  }
  function instance($$self, $$props, $$invalidate) {
    let { id } = $$props;
    function onClick() {
      const container = document.createElement("div");
      container.id = "pomollu-gca-container";
      document.body.appendChild(container);
      const modal = new Modal({
        target: container,
        props: {
          onClose: () => {
            modal.$destroy();
            document.body.removeChild(container);
          }
        }
      });
    }
    $$self.$$set = ($$props2) => {
      if ("id" in $$props2) $$invalidate(0, id = $$props2.id);
    };
    return [id, onClick];
  }
  class OpenButton extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, create_fragment, safe_not_equal, { id: 0 });
    }
  }
  class UI {
    constructor() {
      __publicField(this, "OPEN_BUTTON_ID", "pomollu-gca-openbutton");
      __publicField(this, "TARGET_SELECTOR", "div.rs-setting-cont-3");
      __publicField(this, "openButtonComponent", null);
      __publicField(this, "popupContainer", null);
      __publicField(this, "popupComponent", null);
      __publicField(this, "mainObserver", null);
      __publicField(this, "settingBgObserver", null);
      this.initialize();
      this.addPopup();
    }
    addPopup() {
      this.popupContainer = document.createElement("div");
      this.popupContainer.id = "pomollu-gca-container";
      document.body.appendChild(this.popupContainer);
      this.popupComponent = new Popup({
        target: this.popupContainer
      });
    }
    removePopup() {
      if (this.popupComponent) {
        this.popupComponent.$destroy();
        this.popupComponent = null;
      }
      if (this.popupContainer) {
        this.popupContainer.remove();
        this.popupContainer = null;
      }
    }
    initialize() {
      this.dispose();
      this.setupObserver();
      const existingSettingBg = document.querySelector(".setting-bg");
      if (existingSettingBg) {
        this.onSettingBgAdded(existingSettingBg);
      }
    }
    setupObserver() {
      this.mainObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType !== Node.ELEMENT_NODE) continue;
            const element2 = node;
            if (element2.classList.contains("setting-bg")) {
              this.onSettingBgAdded(element2);
            }
          }
          for (const node of mutation.removedNodes) {
            if (node.nodeType !== Node.ELEMENT_NODE) continue;
            const element2 = node;
            if (element2.classList.contains("setting-bg")) {
              this.onSettingBgRemoved();
            }
          }
        }
      });
      const main = document.querySelector("main");
      if (main) {
        this.mainObserver.observe(main, { childList: true });
      }
    }
    onSettingBgAdded(settingBg) {
      const target = settingBg.querySelector(this.TARGET_SELECTOR);
      if (target) {
        this.tryAddOpenButton(target);
      }
      this.settingBgObserver = new MutationObserver(() => {
        const target2 = settingBg.querySelector(this.TARGET_SELECTOR);
        const buttonExists = document.getElementById(this.OPEN_BUTTON_ID);
        if (target2 && !buttonExists) {
          this.addOpenButton(target2);
        } else if (!target2 && this.openButtonComponent) {
          this.openButtonComponent.$destroy();
          this.openButtonComponent = null;
        }
      });
      this.settingBgObserver.observe(settingBg, {
        childList: true,
        subtree: true
      });
    }
    onSettingBgRemoved() {
      var _a;
      (_a = this.settingBgObserver) == null ? void 0 : _a.disconnect();
      this.settingBgObserver = null;
      if (this.openButtonComponent) {
        this.openButtonComponent.$destroy();
        this.openButtonComponent = null;
      }
    }
    tryAddOpenButton(buttonContainer) {
      const openButton = document.getElementById(this.OPEN_BUTTON_ID);
      if (!openButton) {
        this.addOpenButton(buttonContainer);
      }
    }
    dispose() {
      if (this.mainObserver) {
        this.mainObserver.disconnect();
        this.mainObserver = null;
      }
      if (this.settingBgObserver) {
        this.settingBgObserver.disconnect();
        this.settingBgObserver = null;
      }
    }
    addOpenButton(buttonContainer) {
      this.openButtonComponent = new OpenButton({
        target: buttonContainer,
        props: {
          id: this.OPEN_BUTTON_ID
        }
      });
    }
    removeOpenButton() {
      if (this.openButtonComponent) {
        this.openButtonComponent.$destroy();
        this.openButtonComponent = null;
      }
      const openButton = document.getElementById(this.OPEN_BUTTON_ID);
      if (openButton) {
        openButton.remove();
      }
    }
    destroy() {
      this.dispose();
      this.removeOpenButton();
      this.removePopup();
    }
  }
  ModelManager.init();
  RisuAPI.addProvider("[Pomollu] Gemini Code Assist", handleRequest, { tokenizer: "gemma" });
  const ui = new UI();
  RisuAPI.onUnload(() => {
    ui.destroy();
  });
});
