/**
 * Atropos Vue 1.0.2
 * Touch-friendly 3D parallax hover effects
 * https://atroposjs.com
 *
 * Copyright 2021-2024 
 *
 * Released under the MIT License
 *
 * Released on: April 2, 2024
 */

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { ref, h, onMounted, onBeforeUnmount } from 'vue'; // eslint-disable-next-line

import AtroposCore from '../esm/atropos.esm.js';
var Atropos = {
  props: {
    component: {
      type: String,
      "default": 'div'
    },
    innerClass: String,
    scaleClass: String,
    rotateClass: String,
    eventsEl: {
      type: [String, Object],
      "default": undefined
    },
    alwaysActive: {
      type: Boolean,
      "default": false
    },
    activeOffset: {
      type: Number,
      "default": undefined
    },
    shadowOffset: {
      type: Number,
      "default": undefined
    },
    shadowScale: {
      type: Number,
      "default": undefined
    },
    duration: {
      type: Number,
      "default": undefined
    },
    rotate: {
      type: Boolean,
      "default": undefined
    },
    rotateTouch: {
      type: Boolean,
      "default": undefined
    },
    rotateXMax: {
      type: Number,
      "default": undefined
    },
    rotateYMax: {
      type: Number,
      "default": undefined
    },
    rotateXInvert: {
      type: Boolean,
      "default": undefined
    },
    rotateYInvert: {
      type: Boolean,
      "default": undefined
    },
    stretchX: {
      type: Number,
      "default": undefined
    },
    stretchY: {
      type: Number,
      "default": undefined
    },
    stretchZ: {
      type: Number,
      "default": undefined
    },
    commonOrigin: {
      type: Boolean,
      "default": true
    },
    shadow: {
      type: Boolean,
      "default": true
    },
    highlight: {
      type: Boolean,
      "default": true
    }
  },
  emits: ['enter', 'leave', 'rotate'],
  setup: function setup(props, ctx) {
    var elRef = ref(null);
    var atroposRef = ref(null);
    var slots = ctx.slots,
        emit = ctx.emit;

    var init = function init() {
      atroposRef.value = AtroposCore(_extends({
        el: elRef.value
      }, props, {
        onEnter: function onEnter() {
          emit('enter');
        },
        onLeave: function onLeave() {
          emit('leave');
        },
        onRotate: function onRotate() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          emit.apply(void 0, ['rotate'].concat(args));
        }
      }));
    };

    var destroy = function destroy() {
      if (atroposRef.value) {
        atroposRef.value.destroy();
        atroposRef.value = null;
      }
    };

    onMounted(function () {
      init();
    });
    onBeforeUnmount(function () {
      destroy();
    });

    var cls = function cls() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return args.filter(function (c) {
        return !!c;
      }).join(' ');
    };

    return function () {
      return h(props.component, {
        "class": 'atropos',
        ref: elRef
      }, [h('span', {
        "class": cls('atropos-scale', props.scaleClass)
      }, [h('span', {
        "class": cls('atropos-rotate', props.rotateClass)
      }, [h('span', {
        "class": cls('atropos-inner', props.innerClass)
      }, [slots["default"] && slots["default"](), props.highlight && h('span', {
        "class": 'atropos-highlight'
      })]), slots.rotate && slots.rotate(), props.shadow && h('span', {
        "class": 'atropos-shadow'
      })]), slots.scale && slots.scale()]), slots.root && slots.root()]);
    };
  }
};
export default Atropos;
export { Atropos };
