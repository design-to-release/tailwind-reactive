import { defineComponent } from "san";
import { mouse, keyboard } from "@atomic-class/action";
import { tailwindcss } from "@atomic-class/process";
import { Status } from "@atomic-class/core";

import Icon from "./icon.js";

export default defineComponent({
  template: `
    <div style="display: inline-flex;">
      <button
        s-ref="myBtn"
        class="px-12 py-5 bw-2 br-5 text-white weight {{ status | tailwindcss }}"
        on-mousedown="mouseHandler"
        on-mouseup="mouseHandler"
      >
        <my-icon type="{{ isDisabled ? 1 : 0 }}"></my-icon>
        <span>{{ text }}</span>
      </button>
    </div>
  `,
  components: {
    "my-icon": Icon,
  },

  computed: {
    status() {
      return new Status(this.data.get("props"), this.data.get("states"));
    },
    isDisabled() {
      return this.data.get("states").includes("disable");
    }
  },

  filters: {
    tailwindcss,
  },

  initData() {
    return {
      states: ["default"],
      props: { "default": { "classes": "bg-black-700", "overlap": false }, "hover": { "classes": "bg-blue cursor-pointer", "overlap": false }, "active": { "classes": "bg-purple", "overlap": true }, "disable": { "classes": "bg-black-400 text-white-900 cursor-not-allowed", "overlap": true } },

      keycode: 0,
      text: "",
    };
  },

  created() {
    document.addEventListener("keydown", this.keyboardHandler.bind(this));
    document.addEventListener("keyup", this.keyboardHandler.bind(this));
  },

  attached() {
    const myBtn = this.ref("myBtn");

    myBtn.addEventListener("mouseenter", this.mouseHandler.bind(this));
    myBtn.addEventListener("mouseleave", this.mouseHandler.bind(this));
  },

  keyboardHandler(event) {
    const keycode = this.data.get("keycode");
    this.data.apply(
      "status",
      (status) => keyboard({ status, event, keycode }),
      { force: true }
    );
  },

  mouseHandler(event) {
    this.data.apply("status", (status) => mouse({ status, event }), {
      force: true,
    });
  },
});
