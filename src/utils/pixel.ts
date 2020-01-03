import randomcolor from 'randomcolor';
import colorConverter from 'color-convert';
import { Xel } from '~/types/app/pixel';

const COLOR_MIN = 0;
const COLOR_MAX = 255;
const COLOR_DIFF = 45;
const DEFAULT_COLOR = '#008cc8';

function castInRange(n: number) {
  if (n < COLOR_MIN) return COLOR_MIN;
  if (n > COLOR_MAX) return COLOR_MAX;
  return n;
}

function getMainColor(mainColor: string) {
  if (mainColor === 'random') {
    return randomcolor({ hue: 'random', luminosity: 'random' });
  }
  return `#${mainColor}`;
}

function getMainThinColor(mainColor: string) {
  const [red, green, blue] = colorConverter.hex.rgb(mainColor);
  const hex = colorConverter.rgb.hex(
    castInRange(red + COLOR_DIFF),
    castInRange(green + COLOR_DIFF),
    castInRange(blue + COLOR_DIFF)
  );
  return `#${hex}`;
}

export function generateSeed(mainColor: string): Xel[][] {
  const BG = '#555555';
  const MAIN = mainColor ? getMainColor(mainColor) : DEFAULT_COLOR;
  const SUB = getMainThinColor(MAIN);
  const LIGHT_GRAY = '#f5f5f5';
  const WHITE = '#FFFFFF';
  const HAIR = '#50340a';
  const SKIN = '#fec878';
  const YELLOW = '#fbed29';
  const PINK = '#e75e00';

  return [
    [
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: MAIN, after: HAIR },
      { before: MAIN, after: HAIR },
      { before: MAIN, after: HAIR },
      { before: MAIN, after: HAIR },
      { before: MAIN, after: HAIR },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true }
    ],
    [
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: MAIN, after: HAIR },
      { before: MAIN, after: HAIR },
      { before: MAIN, after: HAIR },
      { before: MAIN, after: HAIR },
      { before: MAIN, after: HAIR },
      { before: MAIN, after: HAIR },
      { before: MAIN, after: HAIR },
      { before: MAIN, after: BG },
      { before: MAIN, after: BG },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true }
    ],
    [
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: HAIR, static: true },
      { before: HAIR, static: true },
      { before: HAIR, static: true },
      { before: SKIN, static: true },
      { before: HAIR, static: true },
      { before: SKIN, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true }
    ],
    [
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: HAIR, static: true },
      { before: SKIN, static: true },
      { before: HAIR, static: true },
      { before: SKIN, static: true },
      { before: SKIN, static: true },
      { before: HAIR, static: true },
      { before: SKIN, static: true },
      { before: SKIN, static: true },
      { before: SKIN, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true }
    ],
    [
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: HAIR, static: true },
      { before: SKIN, static: true },
      { before: HAIR, static: true },
      { before: HAIR, static: true },
      { before: SKIN, static: true },
      { before: SKIN, static: true },
      { before: HAIR, after: SKIN },
      { before: SKIN, static: true },
      { before: SKIN, static: true },
      { before: SKIN, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true }
    ],
    [
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: HAIR, static: true },
      { before: HAIR, static: true },
      { before: SKIN, static: true },
      { before: SKIN, static: true },
      { before: SKIN, static: true },
      { before: HAIR, after: SKIN },
      { before: HAIR, after: PINK },
      { before: HAIR, after: PINK },
      { before: HAIR, after: SKIN },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true }
    ],
    [
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: SKIN, static: true },
      { before: SKIN, static: true },
      { before: SKIN, static: true },
      { before: SKIN, static: true },
      { before: SKIN, static: true },
      { before: SKIN, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true }
    ],
    [
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true }
    ],
    [
      { before: BG, static: true },
      { before: BG, static: true },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true }
    ],
    [
      { before: BG, static: true },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: SUB, after: PINK },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: SUB, after: PINK },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: BG, static: true },
      { before: BG, static: true }
    ],
    [
      { before: BG, static: true },
      { before: LIGHT_GRAY, after: SKIN },
      { before: WHITE, after: SKIN },
      { before: WHITE, after: SKIN },
      { before: SUB, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: YELLOW, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: YELLOW, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: SUB, after: SKIN },
      { before: WHITE, after: SKIN },
      { before: WHITE, after: SKIN },
      { before: WHITE, after: SKIN },
      { before: BG, static: true }
    ],
    [
      { before: BG, static: true },
      { before: LIGHT_GRAY, after: SKIN },
      { before: WHITE, after: SKIN },
      { before: WHITE, after: SKIN },
      { before: WHITE, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: WHITE, after: SKIN },
      { before: WHITE, after: SKIN },
      { before: WHITE, after: SKIN },
      { before: WHITE, after: SKIN },
      { before: BG, static: true }
    ],
    [
      { before: BG, static: true },
      { before: LIGHT_GRAY, after: SKIN },
      { before: WHITE, after: SKIN },
      { before: WHITE, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: WHITE, after: SKIN },
      { before: WHITE, after: SKIN },
      { before: WHITE, after: SKIN },
      { before: BG, static: true }
    ],
    [
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true }
    ],
    [
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: SUB, after: SKIN },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true }
    ],
    [
      { before: BG, static: true },
      { before: BG, static: true },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: BG, static: true },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: MAIN, after: SKIN },
      { before: BG, static: true },
      { before: BG, static: true }
    ]
  ];
}

export function generateSuggestColors() {
  return [randomcolor(), randomcolor(), randomcolor(), randomcolor()];
}
